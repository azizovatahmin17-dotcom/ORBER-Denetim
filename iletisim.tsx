import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim | ORBER Denetim" },
      {
        name: "description",
        content:
          "ORBER Denetim iletişim bilgileri: Nish İstanbul Bahçelievler ofis adresi, telefon +90 212 603 60 20 ve info@orberdenetim.com.",
      },
      { property: "og:title", content: "İletişim | ORBER Denetim" },
      {
        property: "og:description",
        content: "Ofis adresimiz, telefon numaralarımız ve çalışma saatlerimiz.",
      },
    ],
  }),
  component: Iletisim,
});

function Iletisim() {
  return (
    <div>
      <PageHero
        eyebrow="Bize Ulaşın"
        title="İletişim"
        description="Sorularınız ve teklif talepleriniz için uzman ekibimizle iletişime geçebilirsiniz."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">Kurumsal İletişim Bilgileri</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-turquoise" />
                <div>
                  <p className="font-semibold text-navy">Adres</p>
                  <p className="mt-1 text-muted-foreground">{COMPANY.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-turquoise" />
                <div>
                  <p className="font-semibold text-navy">Telefon</p>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-muted-foreground hover:text-turquoise"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-turquoise" />
                <div>
                  <p className="font-semibold text-navy">Cep Telefonu</p>
                  <a
                    href={`tel:${COMPANY.mobile.replace(/\s/g, "")}`}
                    className="mt-1 block text-muted-foreground hover:text-turquoise"
                  >
                    {COMPANY.mobile}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-turquoise" />
                <div>
                  <p className="font-semibold text-navy">E-Posta</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="mt-1 block text-muted-foreground hover:text-turquoise"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-turquoise" />
                <div>
                  <p className="font-semibold text-navy">Çalışma Saatleri</p>
                  <p className="mt-1 text-muted-foreground">{COMPANY.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          <form
            className="rounded-xl border border-border bg-card p-8"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Mesajınız alındı. En kısa sürede dönüş yapacağız.");
              (e.target as HTMLFormElement).reset();
            }}
          >
            <h2 className="font-display text-2xl font-bold text-navy">Bize Yazın</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-navy">
                Ad Soyad
                <input
                  required
                  name="name"
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none focus:border-turquoise"
                />
              </label>
              <label className="text-sm font-medium text-navy">
                Şirket
                <input
                  name="company"
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none focus:border-turquoise"
                />
              </label>
              <label className="text-sm font-medium text-navy">
                E-Posta
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none focus:border-turquoise"
                />
              </label>
              <label className="text-sm font-medium text-navy">
                Telefon
                <input
                  name="phone"
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none focus:border-turquoise"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-navy">
              Mesajınız
              <textarea
                required
                name="message"
                rows={5}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none focus:border-turquoise"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-turquoise px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-turquoise-foreground shadow-glow"
            >
              Gönder
            </button>
          </form>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-border">
          <iframe
            title="ORBER Denetim ofis haritası"
            src={COMPANY.mapEmbed}
            width="100%"
            height="440"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
      </section>
    </div>
  );
}
