import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CIRCULARS } from "@/data/site";

export const Route = createFileRoute("/sirkuler")({
  head: () => ({
    meta: [
      { title: "Sirküler | ORBER Denetim" },
      {
        name: "description",
        content:
          "Vergi, SGK, bağımsız denetim ve e-dönüşüm mevzuatındaki güncel değişikliklere ilişkin ORBER Denetim sirkülerleri.",
      },
      { property: "og:title", content: "Sirküler | ORBER Denetim" },
      {
        property: "og:description",
        content: "Güncel vergi ve mevzuat sirkülerlerini kategori bazında inceleyin.",
      },
    ],
  }),
  component: Sirkuler,
});

function Sirkuler() {
  const categories = ["Tümü", ...Array.from(new Set(CIRCULARS.map((c) => c.category)))];
  const [filter, setFilter] = useState("Tümü");
  const list = filter === "Tümü" ? CIRCULARS : CIRCULARS.filter((c) => c.category === filter);

  return (
    <div>
      <PageHero
        eyebrow="Bilgilendirme"
        title="Sirküler"
        description="Vergi, SGK, bağımsız denetim ve e-dönüşüm mevzuatındaki güncel gelişmeleri düzenli olarak sirkülerlerimizle paylaşıyoruz."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === c
                  ? "border-turquoise bg-navy text-navy-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-turquoise/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-4">
          {list.map((c) => (
            <article
              key={c.id}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-elegant md:flex-row md:items-start"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-navy">
                <FileText className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded bg-navy px-2 py-1 font-semibold text-navy-foreground">
                    {c.no}
                  </span>
                  <span className="text-muted-foreground">{c.date}</span>
                  <span className="font-semibold uppercase tracking-wide text-turquoise">
                    {c.category}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-lg font-semibold text-navy">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
