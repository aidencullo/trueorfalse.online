import Header from "@/components/Header";
import ReadingProgress from "@/components/ReadingProgress";
import { getArticle } from "@/data/articles";

export default function BrowserShortcutsArticle() {
  const article = getArticle("browser-shortcuts")!;

  return (
    <main className="min-h-screen bg-bg">
      <ReadingProgress />
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-12 px-6 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-accent text-[10px] font-mono tracking-[0.3em] uppercase font-medium">
              {article.category}
            </span>
            <span className="w-1 h-1 bg-border rounded-full" />
            <span className="text-muted text-[10px] font-mono">{article.date}</span>
            <span className="w-1 h-1 bg-border rounded-full" />
            <span className="text-muted text-[10px] font-mono">{article.readTime} read</span>
          </div>

          <h1
            className="font-display font-bold text-text leading-none mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.04em" }}
          >
            {article.title}
          </h1>

          <p className="text-muted-light text-xl leading-relaxed mb-8 max-w-2xl">
            {article.subtitle}
          </p>

          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="border border-border text-muted text-[10px] font-mono px-3 py-1 tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="px-6 py-14 max-w-3xl mx-auto">
        <div className="article-body">

          <p>
            Most people use a browser eight hours a day and operate it almost entirely with a mouse. That&apos;s fine.
            It&apos;s also slow. Here are ten shortcuts that actually change how you work — two you probably know,
            eight you might not.
          </p>

          <h2>Navigation</h2>

          <h3>Cmd+L — Jump to the address bar</h3>
          <p>
            Instantly highlights the URL so you can type a new one, paste a link, or search. This one replaces
            the click-and-drag select you&apos;ve been doing for years. Once it&apos;s muscle memory, going back feels broken.
          </p>

          <h3>Cmd+[ and Cmd+] — Back and forward</h3>
          <p>
            The arrow buttons in the top-left corner are a trap. These keys do the same thing without moving your hands.
            Works in both Chrome and Firefox.
          </p>

          <h3>Cmd+R — Reload</h3>
          <p>
            The reload shortcut everyone learns first. Add <strong>Shift</strong> — <strong>Cmd+Shift+R</strong> — and
            you get a hard reload that bypasses the cache. Indispensable when you&apos;re debugging a page that won&apos;t update.
          </p>

          <h2>Tabs</h2>

          <h3>Cmd+T — New tab</h3>
          <p>
            The shortcut everyone knows. Listed here because it pairs with the next one.
          </p>

          <h3>Cmd+W — Close tab</h3>
          <p>
            Close the current tab without touching the X. Combined with Cmd+T, you have a full open/close loop
            from the keyboard. Works for windows too when there&apos;s only one tab left.
          </p>

          <h3>Cmd+Shift+T — Reopen closed tab</h3>
          <p>
            You closed something you needed. This brings it back, in order, as many times as you need it.
            Repeatedly pressing it steps back through your closed tab history.
          </p>

          <h2>Window</h2>

          <h3>Cmd+M — Minimize</h3>
          <p>
            Simple and underused. Way faster than reaching for the yellow dot, and it works on any app.
            Muscle memory for context switching without a trackpad.
          </p>

          <h3>Cmd+Ctrl+F — Enter full screen</h3>
          <p>
            Toggles the browser into true full-screen mode — no menu bar, no dock. Good for reading long articles,
            video calls, or anything where the OS chrome is just clutter. Press again to exit.
          </p>

          <h2>On the Page</h2>

          <h3>Cmd+F — Find on page</h3>
          <p>
            Opens the find bar so you can search the current page. Type a word and jump straight to every match.
            Useful on documentation pages, long articles, or anywhere you&apos;re scanning for a specific term.
          </p>

          <h3>Cmd+Shift+N — Private window</h3>
          <p>
            Opens a new incognito (Chrome) or private (Firefox) window. No cookies, no session, no history.
            The right tool for testing what a logged-out user sees, or for anything you&apos;d rather not persist.
          </p>

          <blockquote>
            <p>
              None of these are hidden. They&apos;re in every browser&apos;s menu bar. The question is whether you practice
              them until reaching for the mouse feels like the slow path — because it is.
            </p>
          </blockquote>

        </div>
      </article>

      {/* Back */}
      <div className="px-6 pb-24 max-w-3xl mx-auto">
        <div className="border-t border-border pt-10 flex items-center justify-between">
          <a href="/" className="text-muted hover:text-accent text-sm font-mono tracking-wider transition-colors flex items-center gap-2">
            ← All articles
          </a>
          <span className="text-muted text-xs font-mono">PRESS — {article.date}</span>
        </div>
      </div>
    </main>
  );
}
