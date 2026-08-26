import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { LockKeyhole, ShieldCheck, FileStack, Headset, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { COMPANY } from "@/data/site";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/portal/")({
  head: () => ({
    meta: [
      { title: "Portal Girişi | ORBER Denetim" },
      {
        name: "description",
        content:
          "ORBER Denetim müşteri portalı: mali tablolarınıza, beyannamelerinize ve denetim raporlarınıza güvenli erişim.",
      },
      { property: "og:title", content: "Portal Girişi | ORBER Denetim" },
      {
        property: "og:description",
        content: "Müşterilerimize özel güvenli belge ve raporlama portalı.",
      },
    ],
  }),
  component: Portal,
});

const credentials = z.object({
  email: z.string().trim().email("Geçerli bir e-posta girin").max(255),
  password: z.string().min(6, "Şifre en az 6 karakter olmalı").max(72),
});

const inputClass =
  "mt-1.5 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm font-normal text-navy-foreground outline-none placeholder:text-navy-foreground/40 focus:border-turquoise";

function Portal() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && user) navigate({ to: "/portal/panel" });
  }, [authLoading, user, navigate]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = credentials.safeParse({
      email: String(fd.get("email") ?? ""),
      password: String(fd.get("password") ?? ""),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Bilgileri kontrol edin.");
      return;
    }

    setLoading(true);
    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword(parsed.data);
      setLoading(false);
      if (error) {
        toast.error(
          error.message.includes("Invalid login")
            ? "E-posta veya şifre hatalı."
            : "Giriş yapılamadı: " + error.message,
        );
        return;
      }
      toast.success("Hoş geldiniz.");
      navigate({ to: "/portal/panel" });
    } else {
      const fullName = String(fd.get("full_name") ?? "").trim();
      const company = String(fd.get("company") ?? "").trim();
      const { error } = await supabase.auth.signUp({
        ...parsed.data,
        options: {
          emailRedirectTo: `${window.location.origin}/portal/panel`,
          data: { full_name: fullName, company },
        },
      });
      setLoading(false);
      if (error) {
        toast.error(
          error.message.includes("already registered")
            ? "Bu e-posta ile zaten bir hesap var."
            : "Kayıt oluşturulamadı: " + error.message,
        );
        return;
      }
      toast.success("Hesabınız oluşturuldu. E-postanıza gelen onay bağlantısını kontrol edin.");
    }
  }

  async function googleSignIn() {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error("Google ile giriş yapılamadı.");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/portal/panel" });
  }

  return (
    <div className="surface-navy relative min-h-[80vh] overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-turquoise/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
            Müşteri Portalı
          </span>
          <h1 className="mt-5 text-4xl font-bold text-navy-foreground md:text-5xl">
            ORBER <span className="text-gradient-turquoise">PORTAL</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-navy-foreground/75">
            Mali tablolarınıza, beyannamelerinize, bordro belgelerinize ve denetim raporlarınıza
            7/24 güvenli erişim sağlayın.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-navy-foreground/85">
            {[
              { icon: FileStack, text: "Beyanname, tahakkuk ve rapor arşivi" },
              { icon: ShieldCheck, text: "Uçtan uca şifreli belge paylaşımı" },
              { icon: Headset, text: "Sorumlu müşavirinize doğrudan mesaj" },
            ].map((i) => (
              <li key={i.text} className="flex items-center gap-3">
                <i.icon className="h-5 w-5 text-turquoise" />
                {i.text}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-navy-foreground/60">
            Portal erişim bilgileriniz için: {COMPANY.phone} · {COMPANY.email}
          </p>
        </div>

        <form
          className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm"
          onSubmit={onSubmit}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-turquoise text-turquoise-foreground">
              <LockKeyhole className="h-5 w-5" />
            </span>
            <h2 className="font-display text-xl font-bold text-navy-foreground">
              {mode === "login" ? "Güvenli Giriş" : "Portal Hesabı Oluştur"}
            </h2>
          </div>

          {mode === "signup" && (
            <>
              <label className="mt-6 block text-sm font-medium text-navy-foreground">
                Ad Soyad
                <input name="full_name" maxLength={100} className={inputClass} placeholder="Ad Soyad" />
              </label>
              <label className="mt-4 block text-sm font-medium text-navy-foreground">
                Şirket
                <input name="company" maxLength={150} className={inputClass} placeholder="Şirket Ünvanı" />
              </label>
            </>
          )}

          <label className="mt-6 block text-sm font-medium text-navy-foreground">
            E-Posta
            <input
              required
              type="email"
              name="email"
              maxLength={255}
              className={inputClass}
              placeholder="ornek@sirket.com"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-navy-foreground">
            Şifre
            <input
              required
              type="password"
              name="password"
              minLength={6}
              maxLength={72}
              className={inputClass}
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-turquoise px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-turquoise-foreground shadow-glow disabled:opacity-60"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {mode === "login" ? "Portal Girişi" : "Hesap Oluştur"}
          </button>

          <button
            type="button"
            onClick={googleSignIn}
            className="mt-3 w-full rounded-md border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-white/15"
          >
            Google ile devam et
          </button>

          <p className="mt-5 text-center text-sm text-navy-foreground/70">
            {mode === "login" ? "Portal hesabınız yok mu?" : "Zaten hesabınız var mı?"}{" "}
            <button
              type="button"
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              className="font-semibold text-turquoise underline-offset-4 hover:underline"
            >
              {mode === "login" ? "Hesap oluşturun" : "Giriş yapın"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
