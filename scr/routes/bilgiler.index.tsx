import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { INFO_ARTICLES } from "@/data/site";

export const Route = createFileRoute("/bilgiler/")({
  head: () => ({
    meta: [
      { title: "Bilgiler | ORBER Denetim" },
      {
        name: "description",
        content:
          "Şirket kuruluşu, şirket türleri, kuruluş maliyetleri, teşvikler ve mevzuat rehberleri ile pratik bilgi merkezi.",
      },
      { property: "og:title", content: "Bilgiler | ORBER Denetim" },
      {
        property: "og:description",
        content: "Şirket kuruluşu ve mali mevzuat konularında kapsamlı rehberler.",
      },
    ],
  }),
  component: BilgilerPage,
});

function BilgilerPage() {
  return (
    <div>
      <PageHero
        eyebrow="Bilgi Merkezi"
        title="Bilgiler"
        description="Girişimciler ve kurumsal yönetimler için hazırladığımız pratik mevzuat rehberleri."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {INFO_ARTICLES.map((a) => (
            <Link
              key={a.slug}
              to="/bilgiler/$slug"
              params={{ slug: a.slug }}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-navy">
                <BookOpen className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold text-navy">{a.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-turquoise">
                Rehberi Oku
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
