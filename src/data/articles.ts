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
}

export const articles: Article[] = [
  {
    slug: "browser-shortcuts",
    title: "Browser Shortcuts",
    subtitle: "Ten keyboard shortcuts that make Chrome and Firefox actually fast",
    category: "Productivity",
    date: "March 6, 2026",
    readTime: "3 min",
    excerpt: "Most people use a browser eight hours a day and never learn ten shortcuts. Here are the ones worth knowing.",
    tags: ["Productivity", "Browser", "Keyboard", "Tools"],
  },
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
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
