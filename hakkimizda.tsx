import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target, Gem, Landmark } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda | ORBER Denetim" },
      {
        name: "description",
        content:
          "2006'dan bu yana faaliyet gösteren Orber Beta Bağımsız Denetim ve YMM A.Ş.'nin kurumsal yapısı, vizyonu, misyonu ve değerleri.",
      },
      { property: "og:title", content: "Hakkımızda | ORBER Denetim" },
      {
        property: "og:description",
        content: "Kurumsal bilgi, vizyon, misyon ve uzman kadromuz hakkında detaylar.",
      },
    ],
  }),
  component: Hakkimizda,
});

const VALUES = [
  {
    icon: Gem,
    title: "Bağımsızlık ve Tarafsızlık",
    text: "Tüm denetim çalışmalarımız mesleki etik ilkeler ve bağımsızlık kuralları çerçevesinde yürütülür.",
  },
  {
    icon: Landmark,
    title: "Mevzuata Tam Uyum",
    text: "Kamu Gözetimi Kurumu, Gelir İdaresi ve uluslararası standartlarla tam entegrasyon sağlarız.",
  },
  {
    icon: Target,
    title: "Çözüm Odaklılık",
    text: "Raporlamanın ötesine geçerek uygulanabilir, ölçülebilir aksiyon planları sunarız.",
  },
  {
    icon: Eye,
    title: "Gizlilik",
    text: "Müşterilerimize ait tüm finansal veriler mutlak gizlilik ilkesiyle korunur.",
  },
];

function Hakkimizda() {
  return (
    <div>
      <PageHero
        eyebrow="Kurumsal"
        title="Hakkımızda"
        description="Orber Beta Bağımsız Denetim ve Yeminli Mali Müşavirlik A.Ş., köklü tecrübesi ve seçkin kadrosuyla kurumsal şirketlerin güvenilir çözüm ortağıdır."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <h2 className="font-display text-2xl font-bold text-navy">Kurumsal Bilgi</h2>
            <p>{COMPANY.intro}</p>
            <p>
              {COMPANY.founded} yılında kurulan şirketimiz; eski kamu denetçileri, hesap uzmanları
              ve yeminli mali müşavirlerden oluşan uzman kadrosuyla bağımsız denetim, tam tasdik,
              mali müşavirlik, kurumsal finans ve yönetim danışmanlığı alanlarında hizmet
              vermektedir.
            </p>
            <p>
              İstanbul Bahçelievler'deki merkez ofisimizden Türkiye geneline ve yabancı sermayeli
              şirketlere hizmet sunuyor; şirket kuruluşundan yatırım teşviklerine, çalışma
              izinlerinden vatandaşlık süreçlerine kadar geniş bir yelpazede uçtan uca destek
              sağlıyoruz.
            </p>
            <p>
              Her müşterimize sektör dinamiklerini bilen özel bir ekip atanır; iletişim tek bir
              sorumlu üzerinden yürütülür ve raporlama takvimi baştan netleştirilir.
            </p>
          </div>

          <aside className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-semibold text-navy">Künye</h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Unvan</dt>
                <dd className="font-medium text-foreground">{COMPANY.legalName}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Kuruluş</dt>
                <dd className="font-medium text-foreground">{COMPANY.founded}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Merkez</dt>
                <dd className="font-medium text-foreground">{COMPANY.address}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Çalışma Saatleri</dt>
                <dd className="font-medium text-foreground">{COMPANY.hours}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-navy-foreground">
              <Eye className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-navy">Vizyonumuz</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Denetim ve mali müşavirlik alanında uluslararası standartları Türkiye'deki uygulama
              gerçekliğiyle buluşturan, şeffaflığı ve kurumsal güveni yükselten öncü bir denetim
              kuruluşu olmak.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-turquoise text-turquoise-foreground">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-navy">Misyonumuz</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Müşterilerimizin mali süreçlerini yasal mevzuata tam uyumlu şekilde yöneterek riskleri
              önceden bertaraf etmek, doğru ve zamanında bilgiyle karar alma süreçlerine katkı
              sağlamak ve sürdürülebilir büyümelerini desteklemek.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl font-bold text-navy">Değerlerimiz</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6">
                <v.icon className="h-5 w-5 text-turquoise" />
                <h3 className="mt-4 font-display text-base font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
