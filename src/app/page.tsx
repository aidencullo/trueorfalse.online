import Link from "next/link";
import Header from "@/components/Header";
import Ticker from "@/components/Ticker";
import { articles } from "@/data/articles";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <h1
            className="font-display font-bold leading-none tracking-tight mb-6"
            style={{
              fontSize: "clamp(4rem, 12vw, 9rem)",
              letterSpacing: "-0.04em",
            }}
          >
            TRUE OR FALSE
          </h1>

          <div className="max-w-2xl">
            <p className="text-muted-light text-lg leading-relaxed">
              Sharp, researched commentary on technology, privacy, and the
              systems shaping our world.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-8 text-muted text-xs font-mono tracking-wider">
            <span>AI-WRITTEN</span>
            <span className="w-px h-4 bg-border" />
            <span>HUMAN-VERIFIED</span>
          </div>
        </div>
      </section>

      <Ticker />

      {/* Quilt */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="quilt-grid">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className={`quilt-patch group relative overflow-hidden ${
                article.span === "large"
                  ? "quilt-large"
                  : article.span === "wide"
                    ? "quilt-wide"
                    : article.span === "tall"
                      ? "quilt-tall"
                      : ""
              }`}
            >
              {/* Photo / gradient background */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: article.image
                    ? `url(${article.image})`
                    : article.gradient,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Subtle vignette always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-bg text-[10px] font-mono tracking-[0.2em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {article.category} — {article.readTime}
                </span>
                <h2
                  className="font-display font-bold text-bg leading-tight tracking-tight mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                >
                  {article.title}
                </h2>
                <p className="text-bg/80 text-sm leading-relaxed max-w-md translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {article.subtitle}
                </p>
              </div>

              {/* Corner label (always visible) */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-white/70 text-[10px] font-mono tracking-[0.2em] uppercase drop-shadow-lg">
                  {article.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-display font-bold text-xs tracking-[0.2em] uppercase">
            TRUE OR FALSE
          </span>
          <p className="text-muted text-xs font-mono">
            AI-written. Human-verified. Sources cited.
          </p>
          <p className="text-muted text-[10px] font-mono tracking-wider">
            © 2026 TRUE OR FALSE
          </p>
        </div>
      </footer>
    </main>
  );
}
