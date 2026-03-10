import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import Ticker from "@/components/Ticker";
import { articles } from "@/data/articles";

export default function Home() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <main className="min-h-screen bg-bg">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #CCFF00 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="mb-6 flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-muted text-[10px] font-mono tracking-[0.3em] uppercase">
              Est. 2026 — AI-written perspectives
            </span>
          </div>

          <h1 className="font-display font-700 leading-none tracking-tight mb-6"
            style={{ fontSize: "clamp(4rem, 12vw, 9rem)", letterSpacing: "-0.04em" }}>
            PRESS
          </h1>

          <div className="max-w-2xl">
            <p className="text-muted-light text-lg leading-relaxed">
              Sharp, researched commentary on technology, privacy, and the
              systems shaping our world — written by AI, cited like a term paper,
              designed like a manifesto.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-8 text-muted text-xs font-mono tracking-wider">
            <span>{articles.length} ARTICLE{articles.length !== 1 ? "S" : ""}</span>
            <span className="w-px h-4 bg-border" />
            <span>HUMAN EDITED</span>
            <span className="w-px h-4 bg-border" />
            <span>SOURCES CITED</span>
          </div>
        </div>
      </section>

      <Ticker />

      {/* Featured */}
      {featured && (
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-accent text-[10px] font-mono tracking-[0.3em] uppercase font-medium">
              Featured
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <a
            href={`/articles/${featured.slug}`}
            className="group block border border-border hover:border-accent/40 transition-all duration-300 bg-surface hover:bg-[#161616] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-700" />

            <div className="grid md:grid-cols-5 gap-0">
              {/* Big text side */}
              <div className="md:col-span-3 p-10 md:p-14 border-r-0 md:border-r border-border">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-accent text-[10px] font-mono tracking-[0.2em] uppercase">
                    {featured.category}
                  </span>
                  <span className="w-1 h-1 bg-muted rounded-full" />
                  <span className="text-muted text-[10px] font-mono">{featured.date}</span>
                </div>

                <h2 className="font-display font-700 text-text group-hover:text-accent transition-colors duration-200 mb-4"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1", letterSpacing: "-0.03em" }}>
                  {featured.title}
                </h2>

                <p className="text-muted-light text-base leading-relaxed mb-8 max-w-xl">
                  {featured.subtitle}
                </p>

                <div className="flex items-center gap-4">
                  <span className="text-accent text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                    Read article <span>→</span>
                  </span>
                  <span className="text-muted text-xs font-mono">{featured.readTime} read</span>
                </div>
              </div>

              {/* Accent side */}
              <div className="md:col-span-2 bg-[#0F0F0F] p-10 flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="text-[10px] font-mono tracking-[0.3em] text-muted uppercase mb-4">
                    Topics covered
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border text-muted text-[10px] font-mono px-3 py-1 tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <div className="text-[10px] font-mono tracking-[0.3em] text-muted uppercase mb-2">
                    Excerpt
                  </div>
                  <p className="text-muted-light text-sm leading-relaxed line-clamp-4">
                    {featured.excerpt}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </section>
      )}

      {/* All articles */}
      {rest.length > 0 && (
        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-muted text-[10px] font-mono tracking-[0.3em] uppercase">
              All articles
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Coming soon */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-muted text-[10px] font-mono tracking-[0.3em] uppercase">
            Coming soon
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Chrome & the Browser Wars", subtitle: "How Google's browser became the internet's tollbooth", cat: "Tech" },
            { title: "The Thirst for Power", subtitle: "Data centers are drinking our aquifers dry", cat: "Energy" },
            { title: "Signal vs. Noise", subtitle: "Why every app wants to be your news source", cat: "Media" },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-border p-6 opacity-40 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-[9px] font-mono text-muted tracking-widest border border-border px-2 py-0.5">
                SOON
              </div>
              <span className="text-accent text-[10px] font-mono tracking-[0.2em] uppercase block mb-3">
                {item.cat}
              </span>
              <h3 className="font-display font-700 text-lg leading-tight tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-muted text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-accent flex items-center justify-center">
              <span className="text-bg font-display font-bold text-xs">P</span>
            </div>
            <span className="font-display font-700 text-xs tracking-[0.2em] uppercase">PRESS</span>
          </div>
          <p className="text-muted text-xs font-mono">
            AI-written. Human-prompted. Sources cited.
          </p>
          <p className="text-muted text-[10px] font-mono tracking-wider">
            © 2026 PRESS
          </p>
        </div>
      </footer>
    </main>
  );
}
