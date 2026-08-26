export const COMPANY = {
  shortName: "ORBER Denetim",
  legalName: "Orber Beta Bağımsız Denetim ve Yeminli Mali Müşavirlik A.Ş.",
  intro:
    "Orber Denetim, kurumsal şirketlerin finansal, mali ve stratejik süreçlerinde yasal mevzuatlara tam uyum ve maksimum verimlilik sağlayan profesyonel çözüm ortağıdır.",
  address:
    "Çobançeşme Mahallesi, Sanayi Caddesi No:44, Nish İstanbul B Blok Kat:9, 34197 Bahçelievler / İstanbul / Türkiye",
  phone: "+90 212 603 60 20",
  mobile: "+90 530 065 17 81",
  email: "info@orberdenetim.com",
  hours: "Pazartesi - Cuma: 09:00 - 18:00",
  founded: "2006",
  mapEmbed:
    "https://www.google.com/maps?q=Nish+Istanbul+Sanayi+Caddesi+No:44+Bah%C3%A7elievler+%C4%B0stanbul&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Nish+Istanbul+Sanayi+Caddesi+No:44+Bah%C3%A7elievler+%C4%B0stanbul",
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  detail: string[];
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "tam-tasdik-hizmeti",
    title: "Tam Tasdik Hizmeti",
    summary:
      "Şirketlerin dönem sonu mali tablolarının ve vergi beyannamelerinin mevzuata uygunluğunun denetimi ve tasdiki.",
    icon: "ShieldCheck",
    detail: [
      "Tam tasdik hizmeti, 3568 sayılı kanun çerçevesinde Yeminli Mali Müşavirlerimiz tarafından yürütülür. Şirketinizin hesap dönemi boyunca gerçekleşen tüm mali işlemleri periyodik olarak incelenir; dönem sonunda mali tablolar ve kurumlar vergisi beyannamesi tasdik raporuna bağlanır.",
      "Süreç boyunca vergi risklerini önceden tespit ederek olası cezai yaptırımların önüne geçiyor, şirketinizin vergi mevzuatına tam uyumunu güvence altına alıyoruz.",
    ],
    bullets: [
      "Dönemsel hesap incelemesi ve mutabakat kontrolleri",
      "Kurumlar vergisi beyannamesi tasdik raporu",
      "KDV iadesi ve istisna tasdik işlemleri",
      "Vergi risk haritası ve düzeltici aksiyon planı",
    ],
  },
  {
    slug: "mali-musavirlik-hizmeti",
    title: "Mali Müşavirlik Hizmeti",
    summary:
      "Kanuni defterlerin tutulması, beyannamelerin hazırlanması ve kurumsal raporlama süreçleri.",
    icon: "Calculator",
    detail: [
      "Kanuni defterlerinizin güncel mevzuata uygun şekilde tutulması, tüm vergi beyannamelerinin zamanında hazırlanıp gönderilmesi ve yönetimin ihtiyaç duyduğu kurumsal raporlamanın oluşturulması hizmetin kapsamındadır.",
      "e-Fatura, e-Defter ve e-Arşiv süreçlerinde dijital dönüşüm desteği sağlıyoruz.",
    ],
    bullets: [
      "Muhasebe kayıtları ve kanuni defter tutulması",
      "KDV, muhtasar, geçici vergi beyannameleri",
      "e-Fatura / e-Defter / e-Arşiv uyumu",
      "Aylık yönetim raporlaması",
    ],
  },
  {
    slug: "bagimsiz-dis-denetim-hizmeti",
    title: "Bağımsız Dış Denetim Hizmeti",
    summary:
      "Finansal tabloların uluslararası finansal raporlama standartlarına (UFRS) göre bağımsız denetimi.",
    icon: "FileSearch",
    detail: [
      "Kamu Gözetimi Kurumu (KGK) mevzuatı ve Uluslararası Denetim Standartları doğrultusunda finansal tablolarınızın bağımsız denetimini gerçekleştiriyoruz.",
      "Denetim sonucunda paydaşlarınıza sunulabilecek güvenilir, şeffaf ve uluslararası kabul gören bir denetim raporu üretilir.",
    ],
    bullets: [
      "UFRS / TFRS uyumlu finansal tablo denetimi",
      "Ara dönem sınırlı denetim çalışmaları",
      "Konsolidasyon ve grup raporlama denetimi",
      "Denetim komitesine yönelik bulgular raporu",
    ],
  },
  {
    slug: "kurumsal-finans-hizmeti",
    title: "Kurumsal Finans Hizmeti",
    summary:
      "Şirket birleşmeleri, satın almalar, değerleme çalışmaları ve finansal yeniden yapılandırma.",
    icon: "TrendingUp",
    detail: [
      "Birleşme ve satın alma (M&A) süreçlerinin her aşamasında; hedef şirket analizi, finansal ve vergisel durum tespiti (due diligence), değerleme ve müzakere desteği sağlıyoruz.",
      "Borç yapılandırma, nakit akış yönetimi ve sermaye artırım planlamalarında stratejik danışmanlık sunuyoruz.",
    ],
    bullets: [
      "Şirket değerleme ve fizibilite raporları",
      "Finansal ve vergisel due diligence",
      "Birleşme, bölünme ve tür değişikliği işlemleri",
      "Finansal yeniden yapılandırma planlaması",
    ],
  },
  {
    slug: "yonetim-danismanligi-hizmeti",
    title: "Yönetim Danışmanlığı Hizmeti",
    summary:
      "Kurumsal yönetim altyapısının kurulması, süreç analizi ve operasyonel verimlilik yönetimi.",
    icon: "Compass",
    detail: [
      "Kurumsal yönetim ilkeleri doğrultusunda organizasyon yapınızı, yetki matrislerinizi ve iş süreçlerinizi yeniden tasarlıyoruz.",
      "Operasyonel verimlilik ölçümleri ve performans göstergeleri (KPI) ile sürdürülebilir büyümeyi destekliyoruz.",
    ],
    bullets: [
      "Kurumsal yönetim ve organizasyon tasarımı",
      "Süreç analizi ve iş akışı optimizasyonu",
      "Bütçeleme ve performans yönetim sistemleri",
      "Maliyet muhasebesi altyapısının kurulması",
    ],
  },
  {
    slug: "bordrolama-hizmetleri",
    title: "Bordrolama Hizmetleri",
    summary:
      "Personel özlük işleri, maaş bordrolarının hazırlanması ve SGK mevzuat uyum süreçleri.",
    icon: "Users",
    detail: [
      "Personel özlük dosyalarının oluşturulması, aylık ücret bordrolarının hazırlanması, SGK bildirgeleri ve işten çıkış işlemleri gizlilik esasıyla yürütülür.",
      "Kıdem ve ihbar tazminatı hesaplamaları, teşvik takibi ve İŞKUR süreçleri hizmete dahildir.",
    ],
    bullets: [
      "Aylık bordro hesaplama ve gizli ücret yönetimi",
      "SGK e-bildirge ve muhtasar prim hizmet beyannamesi",
      "İşe giriş / çıkış ve özlük dosyası yönetimi",
      "SGK teşviklerinin tespiti ve uygulanması",
    ],
  },
  {
    slug: "ciro-denetimi",
    title: "Ciro Denetimi",
    summary:
      "Alışveriş merkezleri, bayiler ve imtiyazlı sözleşmelerde hasılat ve ciro doğruluğunun tespiti.",
    icon: "Receipt",
    detail: [
      "AVM kiracıları, franchise ve bayilik ağları ile imtiyaz sözleşmelerinde beyan edilen ciroların doğruluğu bağımsız olarak denetlenir.",
      "Yazarkasa, POS ve muhasebe kayıtları çapraz kontrol edilerek taraflar arasında güvene dayalı bir mutabakat zemini oluşturulur.",
    ],
    bullets: [
      "AVM kira sözleşmesi ciro kontrolü",
      "POS, ÖKC ve muhasebe kaydı çapraz mutabakatı",
      "Franchise ve bayi hasılat denetimi",
      "Dönemsel ciro doğrulama raporu",
    ],
  },
  {
    slug: "bt-hizmetleri",
    title: "BT Hizmetleri",
    summary:
      "Bilgi teknolojileri risk analizi, siber veri güvenliği denetimleri ve IT altyapı kontrolleri.",
    icon: "ServerCog",
    detail: [
      "Bilgi teknolojileri genel kontrolleri (ITGC), yetkilendirme matrisleri ve veri bütünlüğü denetimleri gerçekleştirilir.",
      "KVKK uyumu, siber güvenlik olgunluk değerlendirmesi ve iş sürekliliği planlaması kapsam dahilindedir.",
    ],
    bullets: [
      "BT genel kontrolleri (ITGC) denetimi",
      "Siber güvenlik ve sızma testi koordinasyonu",
      "KVKK teknik ve idari tedbir uyumu",
      "ERP yetki ve görevler ayrılığı analizi",
    ],
  },
  {
    slug: "ic-denetim-hizmetleri",
    title: "İç Denetim Hizmetleri",
    summary:
      "Şirket içi risklerin belirlenmesi, hata ve suistimallerin önlenmesi amacıyla iç kontrol sistemlerinin kurulması.",
    icon: "SearchCheck",
    detail: [
      "Risk odaklı iç denetim metodolojisi ile şirketinizin süreçlerindeki kontrol zafiyetleri tespit edilir ve iyileştirme önerileri raporlanır.",
      "Suistimal (fraud) incelemeleri ve etik hat süreçlerinin kurgulanmasında destek sağlanır.",
    ],
    bullets: [
      "Risk odaklı iç denetim planı",
      "İç kontrol sisteminin kurulması ve testi",
      "Suistimal inceleme ve önleme çalışmaları",
      "Yönetim kuruluna periyodik denetim raporlaması",
    ],
  },
  {
    slug: "sanal-ofis-hizmeti",
    title: "Sanal Ofis Hizmeti",
    summary:
      "Modern girişimler ve yabancı yatırımcılar için prestijli yasal adres ve operasyonel sekreterlik çözümleri.",
    icon: "Building2",
    detail: [
      "Nish İstanbul'daki prestijli merkez adresimizde şirketiniz için yasal tescile uygun sanal ofis çözümleri sunuyoruz.",
      "Resmi evrak takibi, çağrı karşılama ve toplantı odası kullanımı ile operasyonel yükünüzü azaltıyoruz.",
    ],
    bullets: [
      "Ticaret sicilinde tescile uygun yasal adres",
      "Posta ve resmi tebligat takibi",
      "Çağrı karşılama ve sekretarya desteği",
      "Randevulu toplantı odası kullanımı",
    ],
  },
];

export type InfoArticle = {
  slug: string;
  title: string;
  navTitle: string;
  summary: string;
  sections: { heading: string; body: string; items?: string[] }[];
};

export const INFO_ARTICLES: InfoArticle[] = [
  {
    slug: "adim-adim-sirket-kurulusu",
    navTitle: "Adım Adım Şirket Kuruluşu",
    title: "Adım Adım Şirket Kuruluşu",
    summary:
      "Mali Müşavir seçimi, ana sözleşme hazırlığı, MERSİS onayı, potansiyel vergi kimlik numarası ve banka sermaye süreçleri.",
    sections: [
      {
        heading: "1. Mali Müşavir Seçimi",
        body: "Kuruluş sürecinin ilk adımı, şirket türünüze ve faaliyet alanınıza hâkim bir mali müşavir ile çalışmaya başlamaktır. Doğru vergi planlaması kuruluş aşamasında başlar.",
      },
      {
        heading: "2. Ana Sözleşme Hazırlığı",
        body: "Şirketin unvanı, merkez adresi, faaliyet konusu (NACE kodu), sermaye tutarı, ortaklık payları ve temsil yetkileri ana sözleşmede belirlenir.",
      },
      {
        heading: "3. MERSİS Başvurusu ve Onayı",
        body: "Ana sözleşme MERSİS sistemine girilir, sistem üzerinden talep numarası alınır ve ticaret sicil müdürlüğünün onayına sunulur.",
      },
      {
        heading: "4. Potansiyel Vergi Kimlik Numarası",
        body: "Kuruluş öncesinde ortaklar ve şirket için potansiyel vergi kimlik numarası alınır; banka işlemleri bu numara ile yürütülür.",
      },
      {
        heading: "5. Banka ve Sermaye Süreçleri",
        body: "Anonim şirketlerde nakdi sermayenin %25'i tescil öncesinde bloke edilir. Rekabet Kurumu payı ilgili banka hesabına yatırılır.",
      },
      {
        heading: "6. Tescil, İlan ve Açılış İşlemleri",
        body: "Ticaret sicil tescili ve Türkiye Ticaret Sicili Gazetesi ilanının ardından vergi dairesi açılışı, imza sirküleri, defter tasdiki ve e-fatura/e-defter başvuruları tamamlanır.",
        items: [
          "Ticaret sicil tescili ve gazete ilanı",
          "Vergi dairesi yoklaması ve mükellefiyet tesisi",
          "Kanuni defterlerin noter/sicil tasdiki",
          "e-İmza, e-Fatura ve e-Defter başvuruları",
        ],
      },
    ],
  },
  {
    slug: "limited-sirket-kurulus-maliyeti",
    navTitle: "Limited Şirket Kuruluş Maliyeti",
    title: "Limited Şirket Kuruluş Maliyeti",
    summary:
      "Güncel harçlar, ticaret odası kayıt ücretleri, noter masrafları ve başlangıç sermaye sınırları.",
    sections: [
      {
        heading: "Maliyet Kalemleri",
        body: "Limited şirket kuruluş maliyeti; ortak sayısı, sermaye tutarı ve müdür sayısına göre değişkenlik gösterir. Başlıca kalemler aşağıdaki gibidir.",
        items: [
          "Ticaret sicil tescil harcı ve gazete ilan bedeli",
          "Ticaret odası kayıt ücreti ve yıllık aidat",
          "Noter masrafları (imza beyannamesi, vekâletname)",
          "Rekabet Kurumu payı (sermayenin binde 0,4'ü)",
          "Defter tasdik ücretleri ve e-imza bedeli",
          "Mali müşavirlik kuruluş hizmet bedeli",
        ],
      },
      {
        heading: "Sermaye Sınırları",
        body: "Limited şirketlerde asgari sermaye tutarı kanunla belirlenir ve pay bedelleri ortaklar tarafından taahhüt edilir. Nakdi sermaye kuruluşta bloke edilmeksizin, tescili izleyen yirmi dört ay içinde ödenebilir.",
      },
      {
        heading: "Bütçe Planlaması",
        body: "Kuruluş maliyetlerinin yanı sıra ilk yıl için muhasebe, bordro, kira ve zorunlu sigorta giderlerini de içeren bir işletme bütçesi hazırlanmasını öneriyoruz. Ekibimiz şirketinize özel maliyet çalışması sunar.",
      },
    ],
  },
  {
    slug: "sirket-turleri",
    navTitle: "Şirket Türleri Nelerdir?",
    title: "Şirket Türleri Nelerdir?",
    summary:
      "Sermaye şirketleri (Anonim, Limited, Komandit) ve Şahıs şirketleri (Hakiki şahıs, Adi, Kollektif) rehberi.",
    sections: [
      {
        heading: "Sermaye Şirketleri",
        body: "Ortakların sorumluluğunun taahhüt ettikleri sermaye ile sınırlı olduğu şirket türleridir.",
        items: [
          "Anonim Şirket: Hisse devri kolaylığı, halka açılma imkânı, yönetim kurulu yapısı.",
          "Limited Şirket: Esnek yapı, düşük kuruluş maliyeti, müdürler kurulu ile yönetim.",
          "Sermayesi Paylara Bölünmüş Komandit Şirket: Komandite ve komanditer ortakların bir arada bulunduğu karma yapı.",
        ],
      },
      {
        heading: "Şahıs Şirketleri",
        body: "Ortakların sorumluluğunun kişisel mal varlığına kadar uzandığı, kuruluşu hızlı ve düşük maliyetli yapılardır.",
        items: [
          "Hakiki (gerçek) şahıs işletmesi: Tek kişi, hızlı kuruluş, kademeli gelir vergisi.",
          "Adi Şirket: Sözleşmeye dayalı ortaklık, tüzel kişiliği bulunmaz.",
          "Kollektif Şirket: Ticaret unvanı altında, ortakların sınırsız sorumluluğu ile faaliyet gösterir.",
        ],
      },
      {
        heading: "Hangi Tür Size Uygun?",
        body: "Doğru şirket türü; ortak sayısı, sermaye ihtiyacı, yatırımcı planı ve vergi yükü senaryolarına göre belirlenmelidir. Karşılaştırmalı analiz için ekibimizle iletişime geçebilirsiniz.",
      },
    ],
  },
  {
    slug: "tesvikler",
    navTitle: "Teşvikler",
    title: "Teşvikler ve Devlet Destekleri",
    summary:
      "Yatırım teşvik belgeleri, KOSGEB destekleri, ihracat teşvikleri ve vergi muafiyetleri.",
    sections: [
      {
        heading: "Yatırım Teşvik Belgesi",
        body: "Bölgesel, stratejik ve öncelikli yatırımlar kapsamında KDV istisnası, gümrük vergisi muafiyeti, vergi indirimi, sigorta primi işveren hissesi desteği ve faiz desteği sağlanır.",
      },
      {
        heading: "KOSGEB Destekleri",
        body: "Girişimcilik, işletme geliştirme, Ar-Ge ve inovasyon programları ile KOBİ'lere geri ödemesiz ve geri ödemeli destekler sunulmaktadır.",
      },
      {
        heading: "İhracat Teşvikleri",
        body: "Pazara giriş, yurt dışı fuar katılımı, marka tescili (Turquality) ve navlun destekleri ihracatçı firmalar için önemli avantajlar sağlar.",
      },
      {
        heading: "Vergi ve SGK Muafiyetleri",
        body: "Ar-Ge ve tasarım merkezi istisnaları, teknopark kazanç istisnası, genç girişimci kazanç istisnası ve çeşitli SGK prim teşvikleri değerlendirilmelidir.",
        items: [
          "Ar-Ge ve tasarım merkezi indirimleri",
          "Teknokent kazanç istisnası",
          "Genç girişimci vergi ve prim desteği",
          "İstihdam odaklı SGK prim teşvikleri",
        ],
      },
    ],
  },
  {
    slug: "turk-vergi-sistemi",
    navTitle: "Türk Vergi Sistemi",
    title: "Türk Vergi Sistemi",
    summary:
      "Kurumlar vergisi, Gelir vergisi, KDV ve ÖTV mevzuatlarının şirketlere yönelik güncel uygulamaları.",
    sections: [
      {
        heading: "Kurumlar Vergisi",
        body: "Sermaye şirketlerinin kazançları üzerinden alınır. Geçici vergi dönemleri ile yıl içinde peşin ödeme yapılır, yıllık beyanname ile mahsup edilir. İstisna ve indirimler kazancı doğrudan etkiler.",
      },
      {
        heading: "Gelir Vergisi",
        body: "Gerçek kişilerin ticari, zirai, serbest meslek, ücret, kira, menkul sermaye iradı ve diğer kazançları artan oranlı tarife üzerinden vergilendirilir.",
      },
      {
        heading: "Katma Değer Vergisi (KDV)",
        body: "Mal teslimi ve hizmet ifalarında uygulanır. İndirim mekanizması, tevkifat uygulamaları ve iade süreçleri şirketler için kritik başlıklardır.",
      },
      {
        heading: "ÖTV ve Diğer Vergiler",
        body: "Özel Tüketim Vergisi belirli mal gruplarında tek aşamada uygulanır. Ayrıca damga vergisi, harçlar, emlak vergisi ve dijital hizmet vergisi gibi yükümlülükler bulunur.",
        items: [
          "Damga vergisi ve harçlar",
          "Stopaj (tevkifat) yükümlülükleri",
          "Transfer fiyatlandırması ve örtülü sermaye kuralları",
          "Çifte vergilendirmeyi önleme anlaşmaları",
        ],
      },
    ],
  },
  {
    slug: "yurtdisi-yatirim",
    navTitle: "Yurtdışı Yatırım",
    title: "Yurtdışı Yatırım Danışmanlığı",
    summary:
      "Türk firmalarının global pazarlara açılması ve yurt dışı şirket kurulum süreçleri.",
    sections: [
      {
        heading: "Pazar ve Ülke Analizi",
        body: "Hedef ülkenin vergi rejimi, teşvik yapısı, işgücü maliyetleri ve regülasyonları karşılaştırmalı olarak analiz edilir.",
      },
      {
        heading: "Yurt Dışı Şirket Kuruluşu",
        body: "Şube, irtibat bürosu veya bağlı ortaklık seçenekleri arasında en uygun yapı belirlenir; kuruluş ve tescil süreçleri yerel iş ortaklarımızla yürütülür.",
      },
      {
        heading: "Vergisel Yapılandırma",
        body: "Çifte vergilendirmeyi önleme anlaşmaları, kontrol edilen yabancı kurum kazancı ve transfer fiyatlandırması kuralları dikkate alınarak optimum yapı kurgulanır.",
        items: [
          "Yurt dışı iştirak kazancı istisnası değerlendirmesi",
          "Transfer fiyatlandırması dokümantasyonu",
          "Kâr transferi ve temettü planlaması",
          "Konsolide raporlama altyapısı",
        ],
      },
    ],
  },
  {
    slug: "turk-vatandasligi",
    navTitle: "Türk Vatandaşlığı",
    title: "Türk Vatandaşlığı",
    summary:
      "Yabancı yatırımcılar için taşınmaz alımı veya sermaye yatırımı yoluyla vatandaşlık süreçleri.",
    sections: [
      {
        heading: "Yatırım Yoluyla Vatandaşlık",
        body: "Yabancı yatırımcılar, mevzuatta belirlenen tutarlarda taşınmaz alımı, sabit sermaye yatırımı, banka mevduatı, devlet borçlanma araçları veya istihdam oluşturma yoluyla Türk vatandaşlığına başvurabilir.",
        items: [
          "Taşınmaz alımı (üç yıl satmama şerhi ile)",
          "Sabit sermaye yatırımı",
          "Banka mevduatı veya devlet borçlanma araçları",
          "Belirlenen sayıda istihdam oluşturulması",
        ],
      },
      {
        heading: "Süreç Yönetimi",
        body: "Uygunluk belgesi alınması, değerleme raporu, tapu işlemleri, ikamet izni ve vatandaşlık başvurusu adımları uçtan uca takip edilir.",
      },
      {
        heading: "Mali ve Vergisel Danışmanlık",
        body: "Yatırım yapısının vergisel sonuçları, tam/dar mükellefiyet durumu ve gelir beyanı yükümlülükleri konusunda danışmanlık sağlanır.",
      },
    ],
  },
  {
    slug: "turkiyede-calisma-izni",
    navTitle: "Türkiye'de Çalışma İzni",
    title: "Türkiye'de Çalışma İzni",
    summary:
      "Yabancı personel için yasal çalışma izni başvuruları, uzatma ve uyum süreçleri.",
    sections: [
      {
        heading: "Başvuru Türleri",
        body: "Süreli çalışma izni, süresiz çalışma izni, bağımsız çalışma izni ve Turkuaz Kart başvuruları yabancının statüsüne göre belirlenir.",
      },
      {
        heading: "İşveren Yükümlülükleri",
        body: "Çalışma ve Sosyal Güvenlik Bakanlığı'na e-Devlet üzerinden yapılan başvurularda; sermaye, istihdam ve ücret kriterlerinin sağlanması gerekir.",
        items: [
          "Türk vatandaşı istihdam oranı şartı",
          "Asgari ücret katsayısı kriterleri",
          "Sermaye ve ciro yeterlilik şartları",
          "SGK bildirim ve işe giriş yükümlülükleri",
        ],
      },
      {
        heading: "Uzatma ve Denetim",
        body: "İzin süresinin bitiminden önce uzatma başvurusu yapılmalı, idari para cezası riskine karşı bildirim yükümlülükleri takip edilmelidir.",
      },
    ],
  },
];

export type Circular = {
  id: string;
  no: string;
  date: string;
  category: string;
  title: string;
  summary: string;
};

export const CIRCULARS: Circular[] = [
  {
    id: "2026-14",
    no: "2026/14",
    date: "12 Ağustos 2026",
    category: "Kurumlar Vergisi",
    title: "Kurumlar Vergisi Beyannamesinde Dikkat Edilecek Hususlar",
    summary:
      "Dönem sonu işlemleri, istisna ve indirimlerin beyanname üzerinde gösterimi ile geçici vergi mahsup uygulamalarına ilişkin açıklamalar.",
  },
  {
    id: "2026-13",
    no: "2026/13",
    date: "29 Temmuz 2026",
    category: "KDV",
    title: "KDV Tevkifat Uygulamasında Güncel Değişiklikler",
    summary:
      "Kısmi tevkifat kapsamına alınan yeni hizmet grupları ve iade taleplerinde aranan belgelere ilişkin düzenlemeler.",
  },
  {
    id: "2026-12",
    no: "2026/12",
    date: "10 Temmuz 2026",
    category: "SGK",
    title: "SGK Prim Teşviklerinde Süre Uzatımı",
    summary:
      "İstihdam teşviklerinin uygulama süresinin uzatılması ve geriye yönelik teşvik düzeltme başvuruları hakkında bilgilendirme.",
  },
  {
    id: "2026-11",
    no: "2026/11",
    date: "24 Haziran 2026",
    category: "Bağımsız Denetim",
    title: "Bağımsız Denetime Tabi Şirket Ölçütleri",
    summary:
      "Aktif toplamı, yıllık net satış hasılatı ve çalışan sayısı eşiklerinin güncellenmesi ile kapsama giren şirketlerin yükümlülükleri.",
  },
  {
    id: "2026-10",
    no: "2026/10",
    date: "05 Haziran 2026",
    category: "e-Dönüşüm",
    title: "e-Fatura ve e-Defter Geçiş Hadleri",
    summary:
      "Zorunlu geçiş hadlerinin güncellenmesi, başvuru takvimi ve saklama yükümlülüklerine ilişkin özet rehber.",
  },
  {
    id: "2026-09",
    no: "2026/09",
    date: "18 Mayıs 2026",
    category: "Transfer Fiyatlandırması",
    title: "Transfer Fiyatlandırması Belgelendirme Yükümlülükleri",
    summary:
      "Genel rapor, yıllık rapor ve ülke bazlı raporlama yükümlülüklerinin kapsamı ile son bildirim tarihleri.",
  },
  {
    id: "2026-08",
    no: "2026/08",
    date: "30 Nisan 2026",
    category: "Teşvik",
    title: "Yatırım Teşvik Belgesi Kapsamında KDV İstisnası",
    summary:
      "Makine ve teçhizat alımlarında istisna uygulaması, belge kapsamı dışına çıkma halinde doğacak yükümlülükler.",
  },
  {
    id: "2026-07",
    no: "2026/07",
    date: "14 Nisan 2026",
    category: "Gelir Vergisi",
    title: "Kira Gelirlerinin Beyanı ve İstisna Tutarları",
    summary:
      "Gayrimenkul sermaye iradı beyanında götürü ve gerçek gider yöntemi karşılaştırması ile istisna uygulaması.",
  },
];

export const JOB_OPENINGS = [
  {
    id: "denetci",
    title: "Bağımsız Denetçi Yardımcısı",
    department: "Bağımsız Denetim",
    location: "Bahçelievler / İstanbul",
    type: "Tam Zamanlı",
    description:
      "UFRS/TFRS uyumlu finansal tablo denetimlerinde saha çalışmalarına katılacak, denetim dosyalarının hazırlanmasında görev alacak takım arkadaşları arıyoruz.",
    requirements: [
      "İşletme, İktisat, Maliye veya ilgili bölüm mezunu",
      "Bağımsız denetim alanında 0-3 yıl deneyim",
      "İyi derecede İngilizce",
      "MS Excel ve denetim yazılımlarına hâkimiyet",
    ],
  },
  {
    id: "mali-musavir",
    title: "Kıdemli Mali Müşavir",
    department: "Mali Müşavirlik",
    location: "Bahçelievler / İstanbul",
    type: "Tam Zamanlı",
    description:
      "Kurumsal müşteri portföyünün muhasebe ve beyanname süreçlerini yönetecek, ekibe teknik liderlik yapacak SMMM ruhsatlı profesyoneller arıyoruz.",
    requirements: [
      "SMMM ruhsat sahibi",
      "En az 5 yıl kurumsal muhasebe deneyimi",
      "e-Defter / e-Fatura süreçlerine hâkimiyet",
      "Ekip yönetimi tecrübesi",
    ],
  },
  {
    id: "bordro-uzmani",
    title: "Bordro ve Özlük Uzmanı",
    department: "Bordrolama",
    location: "Bahçelievler / İstanbul",
    type: "Tam Zamanlı",
    description:
      "Çoklu müşteri yapısında bordro hesaplama, SGK bildirim ve özlük dosyası süreçlerini yürütecek uzman arayışımız bulunmaktadır.",
    requirements: [
      "İlgili bölümlerden mezun",
      "En az 3 yıl bordro deneyimi",
      "4857 ve 5510 sayılı kanunlara hâkimiyet",
      "Gizlilik ilkesine bağlılık",
    ],
  },
  {
    id: "bt-denetcisi",
    title: "BT Denetçisi",
    department: "BT Hizmetleri",
    location: "Hibrit / İstanbul",
    type: "Tam Zamanlı",
    description:
      "Bilgi teknolojileri genel kontrolleri, KVKK uyumu ve siber güvenlik denetimlerinde görev alacak ekip arkadaşı arıyoruz.",
    requirements: [
      "Bilgisayar/Yazılım Mühendisliği veya Bilişim Sistemleri mezunu",
      "ITGC, COBIT veya ISO 27001 bilgisi",
      "CISA sertifikası tercih sebebidir",
      "Analitik raporlama yetkinliği",
    ],
  },
];

export const STATS = [
  {
    value: "2006",
    label: "Kuruluş Yılı",
    description: "Kuruluş Yılı ve Köklü Sektörel Güven",
    icon: "Landmark",
  },
  {
    value: "Uzman Kadro",
    label: "Seçkin Ekip",
    description:
      "Eski Kamu Denetçileri, Hesap Uzmanları ve YMM'lerden Oluşan Seçkin Ekip",
    icon: "Users",
  },
  {
    value: "%100 Uyum",
    label: "Tam Entegrasyon",
    description: "Kamu ve Uluslararası Mali Standartlara Tam Entegrasyon",
    icon: "BadgeCheck",
  },
  {
    value: "7/24 Çözüm",
    label: "Kesintisiz Destek",
    description: "Şirketlere Yönelik Kesintisiz Stratejik Finansal Destek",
    icon: "Clock",
  },
];

export const PORTAL_URL = "/portal";
