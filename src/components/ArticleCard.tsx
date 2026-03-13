import Link from "next/link";
import type { Article } from "@/data/articles";

export default function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block border border-border hover:border-accent/40 transition-all duration-300 p-6 bg-surface hover:bg-surface-hover relative overflow-hidden"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* accent bar */}
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500" />

      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="text-accent text-[10px] font-mono tracking-[0.2em] uppercase font-medium">
          {article.category}
        </span>
        <span className="text-muted text-[10px] font-mono tracking-wider shrink-0">
          {article.readTime} read
        </span>
      </div>

      <h2 className="font-display font-bold text-xl leading-tight tracking-tight text-text mb-2 group-hover:text-accent transition-colors duration-200">
        {article.title}
      </h2>

      <p className="text-muted-light text-sm leading-relaxed mb-5 line-clamp-3">
        {article.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-muted border border-border px-2 py-0.5 font-mono tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-muted text-[10px] font-mono">{article.date}</span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-accent text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span>Read article</span>
        <span>→</span>
      </div>
    </Link>
  );
}
