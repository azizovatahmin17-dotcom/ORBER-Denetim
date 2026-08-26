import { SERVICES, INFO_ARTICLES } from "@/data/site";

export type NavChild = { label: string; to: string; params?: Record<string, string> };
export type NavItem = { label: string; to: string; children?: NavChild[] };

export const NAV_ITEMS: NavItem[] = [
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "Sirküler", to: "/sirkuler" },
  {
    label: "Bilgiler",
    to: "/bilgiler",
    children: INFO_ARTICLES.map((a) => ({
      label: a.navTitle,
      to: "/bilgiler/$slug",
      params: { slug: a.slug },
    })),
  },
  {
    label: "Hizmetlerimiz",
    to: "/hizmetlerimiz",
    children: SERVICES.map((s) => ({
      label: s.title,
      to: "/hizmetlerimiz/$slug",
      params: { slug: s.slug },
    })),
  },
  { label: "İletişim", to: "/iletisim" },
  {
    label: "İnsan Kaynakları",
    to: "/insan-kaynaklari",
    children: [
      { label: "Açık Pozisyonlar", to: "/insan-kaynaklari/acik-pozisyonlar" },
      { label: "İlan Yönetimi", to: "/insan-kaynaklari/ilan-yonetimi" },
    ],
  },
];
