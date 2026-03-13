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
  {
    slug: "the-machine-knows-your-name",
    title: "The Machine Knows Your Name",
    subtitle: "ICE built a deportation apparatus that runs on data brokers, DMV photos, and utility bills",
    category: "Immigration",
    date: "March 13, 2026",
    readTime: "8 min",
    excerpt: "Immigration and Customs Enforcement doesn't need a warrant to find you. It needs a contract with a data broker. The agency has spent over $2.8 billion on surveillance technology since 2008 — building a system that monitors the movements of virtually everyone in the country.",
    tags: ["ICE", "Immigration", "Surveillance", "Privacy"],
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #2d1117 40%, #6e1b23 70%, #8b2500 100%)",
    span: "wide",
  },
  {
    slug: "the-last-free-press",
    title: "The Last Free Press",
    subtitle: "Jimmy Lai sits in a Hong Kong prison for the crime of publishing a newspaper",
    category: "Press Freedom",
    date: "March 13, 2026",
    readTime: "7 min",
    excerpt: "The founder of Apple Daily — once Hong Kong's most-read newspaper — has been imprisoned since 2020. His trial under Beijing's National Security Law is the highest-profile press freedom case in the world, and almost nobody is talking about it.",
    tags: ["Press Freedom", "Hong Kong", "Jimmy Lai", "Censorship"],
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 40%, #2e2e6e 70%, #4a148c 100%)",
    span: "tall",
  },
  {
    slug: "the-man-who-told-the-truth",
    title: "The Man Who Told the Truth",
    subtitle: "Edward Snowden revealed the architecture of mass surveillance — and America shrugged",
    category: "Whistleblowing",
    date: "March 13, 2026",
    readTime: "9 min",
    excerpt: "In 2013, a 29-year-old NSA contractor leaked the most consequential intelligence documents in American history. Twelve years later, the programs he exposed are still running, he's still in exile, and the public has mostly moved on.",
    tags: ["Snowden", "NSA", "Surveillance", "Whistleblowing"],
    gradient: "linear-gradient(135deg, #0a1a0a 0%, #1a2e1a 40%, #0f460f 70%, #2e7d32 100%)",
    span: "wide",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
