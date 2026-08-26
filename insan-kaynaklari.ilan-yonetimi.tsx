import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, Users, FileCheck2, Megaphone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/insan-kaynaklari/ilan-yonetimi")({
  head: () => ({
    meta: [
      { title: "İlan Yönetimi | ORBER Denetim" },
      {
        name: "description",
        content:
          "Kurumsal işe alım süreçlerinde ilan hazırlama, aday havuzu yönetimi, mülakat koordinasyonu ve özlük uyum hizmetleri.",
      },
      { property: "og:title", content: "İlan Yönetimi | ORBER Denetim" },
      {
        property: "og:description",
        content: "İşe alım ilanlarınızın uçtan uca yönetimi için kurumsal destek.",
      },
    ],
  }),
  component: IlanYonetimi,
});

const STEPS = [
  {
    icon: ClipboardList,
    title: "İhtiyaç Analizi",
    text: "Pozisyonun görev tanımı, yetkinlik matrisi ve ücret bandı birlikte belirlenir.",
  },
  {
    icon: Megaphone,
    title: "İlan Hazırlığı ve Yayını",
    text: "Kurumsal dile uygun ilan metni hazırlanır, uygun kanallarda yayınlanır.",
  },
  {
    icon: Users,
    title: "Aday Havuzu Yönetimi",
    text: "Başvurular ön elemeden geçirilir, kısa liste ve mülakat koordinasyonu sağlanır.",
  },
  {
    icon: FileCheck2,
    title: "İşe Alım ve Özlük Uyumu",
    text: "Teklif süreci, işe giriş bildirimleri ve özlük dosyası mevzuata uygun tamamlanır.",
  },
];

function IlanYonetimi() {
  return (
    <div>
      <PageHero
        eyebrow="Kariyer"
        title="İlan Yönetimi"
        description="Şirketlerin işe alım ilanlarını uçtan uca yöneterek doğru yetenekle buluşmalarını sağlıyoruz."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-turquoise">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-sm font-bold text-turquoise">
                  0{i + 1}
                </span>
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold text-navy">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-accent p-8 text-center">
          <h2 className="font-display text-xl font-semibold text-navy">
            İlan yönetimi desteği mi arıyorsunuz?
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            İşe alım süreçlerinizi kurumsal standartlara taşımak için ekibimizle iletişime geçin.
          </p>
          <a
            href={`mailto:${COMPANY.email}`}
            className="mt-6 inline-flex items-center rounded-md bg-navy px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-foreground"
          >
            {COMPANY.email}
          </a>
        </div>
      </section>
    </div>
  );
}
