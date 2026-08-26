import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES } from "@/data/site";

export const Route = createFileRoute("/hizmetlerimiz/")({
  head: () => ({
    meta: [
      { title: "Hizmetlerimiz | ORBER Denetim" },
      {
        name: "description",
        content:
          "Tam tasdik, bağımsız denetim, mali müşavirlik, kurumsal finans, bordrolama, iç denetim ve BT hizmetleri dahil tüm ORBER Denetim hizmet kategorileri.",
      },
      { property: "og:title", content: "Hizmetlerimiz | ORBER Denetim" },
      {
        property: "og:description",
        content: "Kurumsal denetim ve mali danışmanlık hizmetlerimizin tamamını inceleyin.",
      },
    ],
  }),
  component: HizmetlerPage,
});

function HizmetlerPage() {
  return (
    <div>
      <PageHero
        eyebrow="Hizmet Kataloğu"
        title="Hizmetlerimiz"
        description="Denetim, mali müşavirlik ve kurumsal danışmanlık alanlarında uçtan uca çözümler sunuyoruz."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.ShieldCheck;
            return (
              <Link
                key={s.slug}
                to="/hizmetlerimiz/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-turquoise">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-lg font-semibold text-navy">{s.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-turquoise">
                  Detaylı Bilgi
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
