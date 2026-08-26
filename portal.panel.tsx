import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FileStack, ShieldCheck, Headset, LogOut, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/portal/panel")({
  head: () => ({
    meta: [
      { title: "Portal Panelim | ORBER Denetim" },
      {
        name: "description",
        content: "ORBER Denetim müşteri portalı paneli: belgeleriniz, raporlarınız ve iletişim kanalınız.",
      },
      { property: "og:title", content: "Portal Panelim | ORBER Denetim" },
      { property: "og:description", content: "Müşteri portalı kişisel paneliniz." },
    ],
  }),
  component: Panel,
});

type Profile = { full_name: string | null; company: string | null; phone: string | null };

function Panel() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/portal" });
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("full_name, company, phone")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data }) => setProfile(data ?? { full_name: null, company: null, phone: null }));
  }, [user]);

  async function saveProfile(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user) return;
    const fd = new FormData(e.currentTarget);
    setSaving(true);
    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      full_name: String(fd.get("full_name") ?? "").trim().slice(0, 100) || null,
      company: String(fd.get("company") ?? "").trim().slice(0, 150) || null,
      phone: String(fd.get("phone") ?? "").trim().slice(0, 30) || null,
      updated_at: new Date().toISOString(),
    });
    setSaving(false);
    if (error) {
      toast.error("Bilgiler kaydedilemedi.");
      return;
    }
    toast.success("Bilgileriniz güncellendi.");
  }

  async function signOut() {
    await supabase.auth.signOut();
    toast.success("Çıkış yapıldı.");
    navigate({ to: "/portal" });
  }

  if (loading || !user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-turquoise" />
      </div>
    );
  }

  const inputClass =
    "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-turquoise";

  return (
    <div>
      <section className="surface-navy relative overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
              Müşteri Portalı
            </span>
            <h1 className="mt-3 text-3xl font-bold text-navy-foreground md:text-4xl">
              Hoş geldiniz{profile?.full_name ? `, ${profile.full_name}` : ""}
            </h1>
            <p className="mt-2 text-sm text-navy-foreground/70">{user.email}</p>
          </div>
          <button
            onClick={signOut}
            className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-navy-foreground hover:bg-white/10"
          >
            <LogOut className="h-4 w-4" /> Çıkış Yap
          </button>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-3">
        <form onSubmit={saveProfile} className="rounded-xl border border-border bg-card p-6 lg:col-span-2">
          <h2 className="font-display text-lg font-semibold text-navy">Hesap Bilgilerim</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Ad Soyad
              <input name="full_name" defaultValue={profile?.full_name ?? ""} maxLength={100} className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              Şirket
              <input name="company" defaultValue={profile?.company ?? ""} maxLength={150} className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              Telefon
              <input name="phone" defaultValue={profile?.phone ?? ""} maxLength={30} className={inputClass} />
            </label>
          </div>
          <button
            type="submit"
            disabled={saving}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-foreground disabled:opacity-60"
          >
            {saving && <Loader2 className="h-4 w-4 animate-spin" />} Kaydet
          </button>
        </form>

        <div className="space-y-4">
          {[
            { icon: FileStack, title: "Belgelerim", text: "Beyanname, tahakkuk ve rapor arşiviniz müşavirinizce yüklenir." },
            { icon: ShieldCheck, title: "Güvenlik", text: "Oturumunuz uçtan uca şifreli bağlantı ile korunmaktadır." },
            { icon: Headset, title: "Destek", text: `${COMPANY.phone} · ${COMPANY.email}` },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6">
              <c.icon className="h-6 w-6 text-turquoise" />
              <h3 className="mt-3 font-display text-base font-semibold text-navy">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
