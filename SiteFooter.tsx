import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { COMPANY, INFO_ARTICLES, SERVICES } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="surface-navy">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-xl font-bold text-navy-foreground">
            ORBER<span className="text-turquoise"> Denetim</span>
          </span>
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-navy-foreground/50">
            {COMPANY.legalName}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-navy-foreground/75">{COMPANY.intro}</p>
          <Link
            to="/portal"
            className="mt-6 inline-flex rounded-md bg-turquoise px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-turquoise-foreground shadow-glow"
          >
            Portal Girişi
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-turquoise">
            Hizmetlerimiz
          </h3>
          <ul className="mt-4 space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/hizmetlerimiz/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm text-navy-foreground/75 transition-colors hover:text-turquoise"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-turquoise">Bilgiler</h3>
          <ul className="mt-4 space-y-2">
            {INFO_ARTICLES.map((a) => (
              <li key={a.slug}>
                <Link
                  to="/bilgiler/$slug"
                  params={{ slug: a.slug }}
                  className="text-sm text-navy-foreground/75 transition-colors hover:text-turquoise"
                >
                  {a.navTitle}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
            <li>
              <Link to="/hakkimizda" className="text-sm text-navy-foreground/75 hover:text-turquoise">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link to="/sirkuler" className="text-sm text-navy-foreground/75 hover:text-turquoise">
                Sirküler
              </Link>
            </li>
            <li>
              <Link
                to="/insan-kaynaklari/acik-pozisyonlar"
                className="text-sm text-navy-foreground/75 hover:text-turquoise"
              >
                Açık Pozisyonlar
              </Link>
            </li>
            <li>
              <Link
                to="/insan-kaynaklari/ilan-yonetimi"
                className="text-sm text-navy-foreground/75 hover:text-turquoise"
              >
                İlan Yönetimi
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-turquoise">İletişim</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" />
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-turquoise" />
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
            </li>
            <li className="flex gap-3">
              <Smartphone className="h-4 w-4 shrink-0 text-turquoise" />
              <a href={`tel:${COMPANY.mobile.replace(/\s/g, "")}`}>{COMPANY.mobile}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-turquoise" />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 text-turquoise" />
              <span>{COMPANY.hours}</span>
            </li>
          </ul>
          <div className="mt-5 overflow-hidden rounded-lg border border-white/15">
            <iframe
              title="ORBER Denetim ofis konumu"
              src={COMPANY.mapEmbed}
              width="100%"
              height="160"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-navy-foreground/55 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {COMPANY.legalName} — Tüm hakları saklıdır.
          </span>
          <span>Bağımsız Denetim ve Yeminli Mali Müşavirlik</span>
        </div>
      </div>
    </footer>
  );
}
