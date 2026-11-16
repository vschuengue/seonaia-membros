// Produtos vendidos na Cakto. IDs não são segredo: são os IDs públicos dos produtos.
export type ProductSlug = "seo-geo" | "auditoria" | "paginas";

export type Product = {
  slug: ProductSlug;
  caktoId: string;
  nome: string;
  nomeCurto: string;
  subtitulo: string;
  cor: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "seo-geo",
    caktoId: "5ad08ec9-b488-4680-98a3-99b7eb825f11",
    nome: "SEO+GEO para Profissionais Liberais",
    nomeCurto: "SEO+GEO",
    subtitulo: "Site pronto pro Google e pras IAs em 7 dias",
    cor: "#7c9cff",
  },
  {
    slug: "auditoria",
    caktoId: "8e985055-3cfb-4a47-be09-7aff63b53f5e",
    nome: "Auditoria de Site em 1 Dia",
    nomeCurto: "Auditoria",
    subtitulo: "Os 20 erros que escondem seu site",
    cor: "#5fd4a8",
  },
  {
    slug: "paginas",
    caktoId: "25266e55-ec72-4de5-b864-c1243dfbc1a6",
    nome: "Páginas Prontas p/ Dentista, Psicólogo e Advogado",
    nomeCurto: "Páginas Prontas",
    subtitulo: "Textos prontos pra copiar e colar hoje",
    cor: "#ffb86b",
  },
];

export function productBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productByCaktoId(id: string | undefined | null): Product | undefined {
  if (!id) return undefined;
  return PRODUCTS.find((p) => p.caktoId === id);
}
