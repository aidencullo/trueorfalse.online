export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  gradient: string;
  span?: "wide" | "tall" | "large";
}

export const articles: Article[] = [
  {
    slug: "the-paper-trail",
    title: "The Paper Trail",
    subtitle: "Every form you fill out is a data point in a system designed to remember forever",
    category: "Privacy",
    date: "March 10, 2026",
    readTime: "7 min",
    excerpt: "From airport kiosks to unemployment offices, routine government forms have become one of the most effective surveillance tools ever built — not because they were designed that way, but because no one asked them not to be.",
    tags: ["Privacy", "Government", "Surveillance", "Data"],
    featured: true,
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%)",
    span: "large",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
