import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Dot, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { INFO_ARTICLES } from "@/data/site";

export const Route = createFileRoute("/bilgiler/$slug")({
  loader: ({ params }) => {
    const article = INFO_ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "İçerik bulunamadı | ORBER Denetim" }, { name: "robots", content: "noindex" }] };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} | ORBER Denetim` },
        { name: "description", content: article.summary },
        { property: "og:title", content: `${article.title} | ORBER Denetim` },
        { property: "og:description", content: article.summary },
      ],
    };
  },
  component: BilgiDetay,
});

function BilgiDetay() {
  const { article } = Route.useLoaderData();
  const others = INFO_ARTICLES.filter((a) => a.slug !== article.slug);

  return (
    <div>
      <PageHero eyebrow="Bilgi Merkezi" title={article.title} description={article.summary} />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[2fr_1fr]">
        <article>
          {article.sections.map((s) => (
            <div key={s.heading} className="mb-8">
              <h2 className="font-display text-xl font-semibold text-navy">{s.heading}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>
              {s.items ? (
                <ul className="mt-4 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-1 text-sm text-foreground">
                      <Dot className="mt-0.5 h-5 w-5 shrink-0 text-turquoise" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          <Link
            to="/bilgiler"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-navy"
          >
            <ArrowLeft className="h-4 w-4" /> Tüm Bilgiler
          </Link>
        </article>

        <aside className="h-fit rounded-xl border border-border bg-card p-6">
          <h3 className="font-display text-base font-semibold text-navy">Diğer Konular</h3>
          <div className="mt-4 flex flex-col">
            {others.map((a) => (
              <Link
                key={a.slug}
                to="/bilgiler/$slug"
                params={{ slug: a.slug }}
                className="border-b border-border py-2.5 text-sm text-muted-foreground transition-colors last:border-0 hover:text-turquoise"
              >
                {a.navTitle}
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
