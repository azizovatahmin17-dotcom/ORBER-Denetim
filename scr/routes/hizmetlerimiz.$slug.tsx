import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES } from "@/data/site";

export const Route = createFileRoute("/hizmetlerimiz/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Hizmet bulunamadı | ORBER Denetim" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.title} | ORBER Denetim` },
        { name: "description", content: service.summary },
        { property: "og:title", content: `${service.title} | ORBER Denetim` },
        { property: "og:description", content: service.summary },
      ],
    };
  },
  component: HizmetDetay,
});

function HizmetDetay() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div>
      <PageHero eyebrow="Hizmetlerimiz" title={service.title} description={service.summary} />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[2fr_1fr]">
        <div>
          {service.detail.map((p) => (
            <p key={p} className="mb-5 text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}

          <h2 className="mt-8 font-display text-xl font-semibold text-navy">Hizmet Kapsamı</h2>
          <ul className="mt-4 space-y-3">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-turquoise" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/iletisim"
              className="inline-flex items-center rounded-md bg-navy px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-foreground"
            >
              Teklif Alın
            </Link>
            <Link
              to="/hizmetlerimiz"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-navy"
            >
              <ArrowLeft className="h-4 w-4" /> Tüm Hizmetler
            </Link>
          </div>
        </div>

        <aside className="h-fit rounded-xl border border-border bg-card p-6">
          <h3 className="font-display text-base font-semibold text-navy">Diğer Hizmetler</h3>
          <div className="mt-4 flex flex-col">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/hizmetlerimiz/$slug"
                params={{ slug: s.slug }}
                className="border-b border-border py-2.5 text-sm text-muted-foreground transition-colors last:border-0 hover:text-turquoise"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
