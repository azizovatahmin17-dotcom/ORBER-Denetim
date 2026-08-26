import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { JOB_OPENINGS, COMPANY } from "@/data/site";

export const Route = createFileRoute("/insan-kaynaklari/acik-pozisyonlar")({
  head: () => ({
    meta: [
      { title: "Açık Pozisyonlar | ORBER Denetim" },
      {
        name: "description",
        content:
          "Bağımsız denetçi, mali müşavir, bordro uzmanı ve BT denetçisi pozisyonları için güncel iş ilanlarımız.",
      },
      { property: "og:title", content: "Açık Pozisyonlar | ORBER Denetim" },
      {
        property: "og:description",
        content: "ORBER Denetim ekibine katılmak için açık pozisyonları inceleyin.",
      },
    ],
  }),
  component: AcikPozisyonlar,
});

function AcikPozisyonlar() {
  return (
    <div>
      <PageHero
        eyebrow="Kariyer"
        title="Açık Pozisyonlar"
        description="Ekibimize katılmak için aşağıdaki pozisyonları inceleyebilir, özgeçmişinizi bize iletebilirsiniz."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="space-y-6">
          {JOB_OPENINGS.map((job) => (
            <article key={job.id} className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-lg font-semibold text-navy">{job.title}</h2>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-turquoise">
                    {job.department}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {job.type}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{job.description}</p>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <ApplyDialog
                  positionSlug={job.id}
                  positionTitle={job.title}
                  triggerClassName="inline-flex items-center rounded-md bg-navy px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-foreground"
                />
                <a
                  href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(job.title + " Başvurusu")}`}
                  className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground"
                >
                  E-posta ile başvur
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
