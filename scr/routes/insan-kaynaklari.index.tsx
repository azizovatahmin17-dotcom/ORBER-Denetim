import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, ClipboardList, GraduationCap, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/insan-kaynaklari/")({
  head: () => ({
    meta: [
      { title: "İnsan Kaynakları | ORBER Denetim" },
      {
        name: "description",
        content:
          "ORBER Denetim'de kariyer: açık pozisyonlar, ilan yönetimi, işe alım süreci ve çalışan gelişim programlarımız.",
      },
      { property: "og:title", content: "İnsan Kaynakları | ORBER Denetim" },
      {
        property: "og:description",
        content: "Kariyer fırsatlarını keşfedin ve ekibimize katılın.",
      },
    ],
  }),
  component: IkPage,
});

const CULTURE = [
  {
    icon: GraduationCap,
    title: "Sürekli Gelişim",
    text: "SMMM/YMM sınav hazırlığı, sertifikasyon destekleri ve düzenli teknik eğitimler.",
  },
  {
    icon: HeartHandshake,
    title: "Mentorluk Kültürü",
    text: "Eski kamu denetçileri ve hesap uzmanlarından oluşan kadromuzla birebir mentorluk.",
  },
  {
    icon: Briefcase,
    title: "Çeşitli Portföy",
    text: "Farklı sektörlerden kurumsal müşterilerle geniş kapsamlı proje deneyimi.",
  },
];

function IkPage() {
  return (
    <div>
      <PageHero
        eyebrow="Kariyer"
        title="İnsan Kaynakları"
        description="Denetim ve mali müşavirlik alanında kariyerini büyütmek isteyen profesyonellerle çalışıyoruz."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {CULTURE.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-turquoise">
                <c.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold text-navy">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            to="/insan-kaynaklari/acik-pozisyonlar"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-elegant"
          >
            <Briefcase className="h-6 w-6 text-turquoise" />
            <div>
              <h3 className="font-display text-base font-semibold text-navy">Açık Pozisyonlar</h3>
              <p className="text-sm text-muted-foreground">Güncel iş ilanlarımızı inceleyin ve başvurun.</p>
            </div>
          </Link>
          <Link
            to="/insan-kaynaklari/ilan-yonetimi"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-elegant"
          >
            <ClipboardList className="h-6 w-6 text-turquoise" />
            <div>
              <h3 className="font-display text-base font-semibold text-navy">İlan Yönetimi</h3>
              <p className="text-sm text-muted-foreground">Kurumsal işe alım ve ilan süreçleri yönetimi.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
