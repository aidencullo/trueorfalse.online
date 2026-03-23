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
    image: "/images/paper-trail.svg",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%)",
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
    image: "/images/ice-machine.svg",
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #2d1117 40%, #6e1b23 70%, #8b2500 100%)",
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
    image: "/images/jimmy-lai.svg",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 40%, #2e2e6e 70%, #4a148c 100%)",
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
    image: "/images/snowden.svg",
    gradient: "linear-gradient(135deg, #0a1a0a 0%, #1a2e1a 40%, #0f460f 70%, #2e7d32 100%)",
  },
  {
    slug: "the-algorithm-at-the-border",
    title: "The Algorithm at the Border",
    subtitle: "ICE doesn\u2019t need a warrant to find you. It needs a purchase order and a Palantir login.",
    category: "Immigration",
    date: "March 23, 2026",
    readTime: "9 min",
    excerpt: "Palantir dashboards, cell phone location brokers, social media scrapers, and the commercial data pipelines that make sanctuary cities a legal fiction. How ICE built a deportation machine that tracks everyone \u2014 citizen or not \u2014 without ever needing a warrant.",
    tags: ["ICE", "Immigration", "Palantir", "Surveillance", "AI"],
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 40%, #3d0a5e 70%, #6a0dad 100%)",
  },
  {
    slug: "the-right-you-dont-have",
    title: "The Right You Don\u2019t Have",
    subtitle: "Latin America has comprehensive digital privacy laws. The United States still doesn\u2019t.",
    category: "Privacy",
    date: "March 23, 2026",
    readTime: "9 min",
    excerpt: "Brazil, Argentina, and Mexico built federal privacy frameworks while the US couldn\u2019t pass a single bill. The country that invented the internet has no law protecting the data of the people who use it.",
    tags: ["Privacy", "Latin America", "LGPD", "Data Protection"],
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #0f1a3e 40%, #1a3a6e 70%, #0d47a1 100%)",
  },
  {
    slug: "print-the-truth-go-to-prison",
    title: "Print the Truth, Go to Prison",
    subtitle: "Jimmy Lai published a newspaper that criticized Beijing. Now he faces life behind bars.",
    category: "Press Freedom",
    date: "March 23, 2026",
    readTime: "9 min",
    excerpt: "Hong Kong\u2019s highest-profile national security trial ended with a guilty verdict for the founder of Apple Daily. His prosecution \u2014 built on tweets, interviews, and editorials \u2014 is a blueprint for silencing the press worldwide.",
    tags: ["Press Freedom", "Hong Kong", "Jimmy Lai", "National Security Law", "Censorship"],
    image: "/images/print-truth.svg",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 40%, #3e1a1a 70%, #6e2323 100%)",
  },
  {
    slug: "the-nonprofit-that-ate-the-world",
    title: "The Nonprofit That Ate the World",
    subtitle: "OpenAI promised to build AGI for humanity. Then it built a $150 billion company for shareholders.",
    category: "AI",
    date: "March 23, 2026",
    readTime: "9 min",
    excerpt: "Founded as a nonprofit research lab to ensure artificial general intelligence benefits all of humanity, OpenAI has become a closed-source, for-profit company valued at over $150 billion \u2014 its safety team gutted, its charter abandoned, its future controlled by Microsoft and venture capital.",
    tags: ["AI", "OpenAI", "Corporate Power", "Technology"],
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 40%, #3e1a3e 70%, #6a1b9a 100%)",
  },
  {
    slug: "twelve-years-in-the-cold",
    title: "Twelve Years in the Cold",
    subtitle: "Edward Snowden exposed the surveillance state and it swallowed him whole",
    category: "Surveillance",
    date: "March 23, 2026",
    readTime: "10 min",
    excerpt: "Twelve years after the biggest intelligence leak in American history, the programs Snowden exposed are still running \u2014 legalized, expanded, and privatized. The whistleblower is a Russian citizen raising his children in Moscow. The country he tried to warn has moved on.",
    tags: ["Snowden", "NSA", "Surveillance", "Section 702", "Russia"],
    gradient: "linear-gradient(135deg, #0a0f1a 0%, #1a1a2e 40%, #2e1a3e 70%, #4a1a6e 100%)",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
