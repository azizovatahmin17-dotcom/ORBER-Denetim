import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  full_name: z.string().trim().min(2, "Ad soyad en az 2 karakter olmalı").max(100),
  email: z.string().trim().email("Geçerli bir e-posta girin").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  link_url: z
    .string()
    .trim()
    .url("Geçerli bir bağlantı girin (https://...)")
    .max(500)
    .optional()
    .or(z.literal("")),
  cover_letter: z.string().trim().max(2000, "Ön yazı en fazla 2000 karakter olabilir").optional().or(z.literal("")),
});

const inputClass =
  "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-turquoise";

export function ApplyDialog({
  positionSlug,
  positionTitle,
  triggerClassName,
  triggerLabel = "Başvur",
}: {
  positionSlug: string;
  positionTitle: string;
  triggerClassName?: string;
  triggerLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      full_name: String(fd.get("full_name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      link_url: String(fd.get("link_url") ?? ""),
      cover_letter: String(fd.get("cover_letter") ?? ""),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Lütfen formu kontrol edin.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("job_applications").insert({
      position_slug: positionSlug,
      position_title: positionTitle,
      full_name: parsed.data.full_name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      link_url: parsed.data.link_url || null,
      cover_letter: parsed.data.cover_letter || null,
    });
    setLoading(false);

    if (error) {
      toast.error("Başvuru gönderilemedi. Lütfen tekrar deneyin.");
      return;
    }

    toast.success("Başvurunuz alındı. İnsan Kaynakları ekibimiz sizinle iletişime geçecek.");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={triggerClassName}>{triggerLabel}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-navy">{positionTitle}</DialogTitle>
          <DialogDescription>
            Başvuru formunu doldurun; ekibimiz en kısa sürede dönüş yapacaktır.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block text-sm font-medium">
            Ad Soyad *
            <input name="full_name" required maxLength={100} className={inputClass} placeholder="Ad Soyad" />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              E-Posta *
              <input name="email" type="email" required maxLength={255} className={inputClass} placeholder="ornek@mail.com" />
            </label>
            <label className="block text-sm font-medium">
              Telefon
              <input name="phone" maxLength={30} className={inputClass} placeholder="+90 5xx xxx xx xx" />
            </label>
          </div>
          <label className="block text-sm font-medium">
            CV / LinkedIn Bağlantısı
            <input name="link_url" maxLength={500} className={inputClass} placeholder="https://linkedin.com/in/..." />
          </label>
          <label className="block text-sm font-medium">
            Ön Yazı
            <textarea
              name="cover_letter"
              rows={4}
              maxLength={2000}
              className={inputClass}
              placeholder="Kendinizden ve deneyiminizden kısaca bahsedin."
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-foreground disabled:opacity-60"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Başvuruyu Gönder
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
