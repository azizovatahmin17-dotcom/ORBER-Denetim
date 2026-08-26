import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react";
import { CIRCULARS, COMPANY, INFO_ARTICLES, SERVICES, STATS } from "@/data/site";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ORBER Denetim | Bağımsız Denetim ve Yeminli Mali Müşavirlik" },
      {
        name: "description",
        content:
          "Orber Beta Bağımsız Denetim ve YMM A.Ş. — tam tasdik, bağımsız denetim, mali müşavirlik, kurumsal finans ve danışmanlık hizmetleri. İstanbul.",
      },
      { property: "og:title", content: "ORBER Denetim | Bağımsız Denetim ve YMM" },
      {
        property: "og:description",
        content:
          "2006'dan bu yana şirketlere tam tasdik, bağımsız denetim, mali müşavirlik ve stratejik finansal danışmanlık hizmetleri.",
      },
    ],
  }),
  component: Index,
});

function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Circle;
  return <Cmp className={className} />;
}

function Index() {
  const [activeTab, setActiveTab] = useState(INFO_ARTICLES[0]?.slug ?? "");
  const active = INFO_ARTICLES.find((a) => a.slug === activeTab) ?? INFO_ARTICLES[0];
  if (!active) return null;

  return (
    <div>
      {/* HERO */}
      <section className="surface-navy relative overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-70" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-turquoise/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
              {COMPANY.legalName}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-navy-foreground md:text-6xl">
              Neden <span className="text-gradient-turquoise">ORBER Denetim</span>?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              İşinizin büyümesi ve refahı için tecrübeli uzman ekibimizle size 7/24 en iyi
              çözümleri en uygun şartlarla sunuyoruz.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/hizmetlerimiz"
                className="inline-flex items-center gap-2 rounded-md border border-navy-foreground/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-white/15"
              >
                Hizmetlerimizi İnceleyin <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portal"
                className="inline-flex items-center gap-2 rounded-md bg-turquoise px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-turquoise-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                Portal Girişi
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="font-display text-lg font-semibold text-navy-foreground">
              Kurumsal Güvence Alanlarımız
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "Yeminli Mali Müşavirlik ve Tam Tasdik",
                "KGK mevzuatına uygun Bağımsız Denetim",
                "UFRS / TFRS uyumlu raporlama",
                "Vergi, teşvik ve yatırım danışmanlığı",
                "Yabancı yatırımcılara uçtan uca destek",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-navy">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <p className="mt-5 font-display text-2xl font-bold text-navy">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
                {s.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
              Hizmetlerimiz
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
              Uçtan uca denetim, mali müşavirlik ve danışmanlık
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              On ayrı uzmanlık alanında, şirketinizin ölçeğine ve sektörüne uygun profesyonel
              çözümler sunuyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                to="/hizmetlerimiz/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-turquoise/50 hover:shadow-elegant"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-navy-foreground transition-colors group-hover:bg-turquoise group-hover:text-turquoise-foreground">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-bold text-muted-foreground/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-turquoise">
                  Detaylı Bilgi <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KNOWLEDGE BASE */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
              Bilgi Merkezi
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
              Şirketiniz için pratik mevzuat rehberleri
            </h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[340px_1fr]">
            <div className="flex flex-col gap-2">
              {INFO_ARTICLES.map((a) => (
                <button
                  key={a.slug}
                  type="button"
                  onClick={() => setActiveTab(a.slug)}
                  className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
                    a.slug === activeTab
                      ? "border-turquoise bg-navy text-navy-foreground"
                      : "border-border bg-card text-foreground hover:border-turquoise/50"
                  }`}
                >
                  {a.navTitle}
                </button>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl font-bold text-navy">{active.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.summary}</p>
              <div className="mt-6 space-y-5">
                {active.sections.slice(0, 3).map((sec) => (
                  <div key={sec.heading}>
                    <h4 className="font-display text-base font-semibold text-navy">{sec.heading}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{sec.body}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/bilgiler/$slug"
                params={{ slug: active.slug }}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-soft"
              >
                Rehberin Tamamını Okuyun <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CIRCULARS */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
                Sirküler
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
                Güncel mevzuat sirkülerleri
              </h2>
            </div>
            <Link
              to="/sirkuler"
              className="inline-flex items-center gap-2 text-sm font-semibold text-turquoise"
            >
              Tüm sirkülerler <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CIRCULARS.slice(0, 6).map((c) => (
              <article
                key={c.id}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-elegant"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded bg-navy px-2 py-1 font-semibold text-navy-foreground">
                    {c.no}
                  </span>
                  <span className="text-muted-foreground">{c.date}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-turquoise">
                  {c.category}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / MAP */}
      <section className="surface-navy">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-navy-foreground md:text-4xl">
              Uzman ekibimizle tanışın
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-navy-foreground/75">
              {COMPANY.intro}
            </p>
            <ul className="mt-8 space-y-4 text-sm text-navy-foreground/85">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-turquoise" />
                {COMPANY.address}
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-turquoise" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-turquoise" />
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-turquoise" />
                {COMPANY.hours}
              </li>
            </ul>
            <Link
              to="/iletisim"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-turquoise px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-turquoise-foreground shadow-glow"
            >
              Bize Ulaşın
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/15">
            <iframe
              title="ORBER Denetim harita"
              src={COMPANY.mapEmbed}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
