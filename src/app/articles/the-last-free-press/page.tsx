import { getArticle } from "@/data/articles";
import Link from "next/link";


export default function TheLastFreePressArticle() {
  const article = getArticle("the-last-free-press")!;

  return (
    <main className="min-h-screen bg-bg">
      <nav className="px-6 py-6 max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-muted hover:text-text text-lg transition-colors"
        >
          ←
        </Link>
      </nav>

      <header className="px-6 pt-8 pb-12 max-w-3xl mx-auto">
        <h1 className="font-display font-bold text-text leading-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
          {article.title}
        </h1>
        <p className="text-muted-light text-lg leading-relaxed">
          {article.subtitle}
        </p>
      </header>

      <article className="px-6 pb-20 max-w-3xl mx-auto">
        <div className="article-body">

          <p>
            On December 29, 2025, a Hong Kong court found Jimmy Lai guilty of sedition and
            collusion with foreign forces under the National Security Law. He faces life in
            prison. His crime: running a newspaper.
            <a href="#source-1" className="footnote-ref">[1]</a>
          </p>

          <h2>Apple Daily</h2>

          <p>
            Jimmy Lai founded Apple Daily in 1995. At its peak, it was Hong Kong&apos;s
            most-read newspaper — tabloid energy, serious investigations, and an editorial
            line that never flinched from criticizing Beijing. It endorsed the pro-democracy
            protests of 2014 and 2019. It published leaked documents. It named names.
            <a href="#source-2" className="footnote-ref">[2]</a>
          </p>

          <p>
            On June 17, 2021, 500 police officers raided Apple Daily&apos;s newsroom. They
            seized hard drives, notebooks, and reporters&apos; phones. They arrested five
            editors. Seven days later, Apple Daily published its final edition. Residents
            lined up before dawn to buy copies. The print run sold out within hours —{" "}
            <strong>one million copies</strong>, ten times the usual.
            <a href="#source-3" className="footnote-ref">[3]</a>
          </p>

          <blockquote>
            <p>
              &ldquo;They don&apos;t want to just shut down the paper. They want to make
              an example so that no one ever tries again.&rdquo;
              <br />— Mark Simon, former aide to Jimmy Lai
            </p>
          </blockquote>

          <h2>The National Security Law</h2>

          <p>
            Beijing imposed the National Security Law on Hong Kong on June 30, 2020, bypassing
            the territory&apos;s legislature entirely. The law criminalizes secession, subversion,
            terrorism, and &ldquo;collusion with foreign forces&rdquo; — defined so broadly that
            speaking to a foreign journalist can qualify. Maximum penalty: life imprisonment.
            <a href="#source-4" className="footnote-ref">[4]</a>
          </p>

          <p>
            Since its passage, over <strong>260 people</strong> have been arrested under the law.
            Every major pro-democracy organization in Hong Kong has dissolved. The city&apos;s
            independent unions, student groups, and civil liberties organizations are gone. The
            Professional Teachers&apos; Union — 95,000 members — disbanded in 2021 after state
            media called it a &ldquo;political tumor.&rdquo;
            <a href="#source-5" className="footnote-ref">[5]</a>
          </p>

          <h2>The Trial</h2>

          <p>
            Lai&apos;s trial began in December 2023 and lasted over a year. The prosecution
            presented his tweets, his interviews with foreign media, and his newspaper&apos;s
            editorials as evidence of &ldquo;collusion.&rdquo; An op-ed calling for international
            sanctions was cited as proof of conspiracy with foreign powers.
            <a href="#source-6" className="footnote-ref">[6]</a>
          </p>

          <p>
            The trial was conducted without a jury — a provision of the National Security Law
            that allows the Chief Executive to remove jury trials for national security cases.
            Three hand-picked judges delivered the verdict.
            <a href="#source-7" className="footnote-ref">[7]</a>
          </p>

          <p>
            Lai is 77 years old. He has been in custody since December 2020. He was denied bail
            after Beijing intervened to overrule a Hong Kong court that had granted it. He spends
            23 hours a day in solitary confinement.
            <a href="#source-8" className="footnote-ref">[8]</a>
          </p>

          <h2>The Silence</h2>

          <p>
            The Committee to Protect Journalists ranks Hong Kong as one of the world&apos;s
            worst jailers of journalists. Reporters Without Borders dropped it 68 places on
            the World Press Freedom Index since the NSL passed — from 80th to 148th.
            <a href="#source-9" className="footnote-ref">[9]</a>
          </p>

          <p>
            Western governments issued statements. The UK called the verdict &ldquo;politically
            motivated.&rdquo; The US State Department said it was &ldquo;deeply concerned.&rdquo;
            No government imposed consequences. Trade with China continues. Financial institutions
            remain in Hong Kong. The message is clear: press freedom is a value, not a policy.
            <a href="#source-10" className="footnote-ref">[10]</a>
          </p>

          <p>
            Jimmy Lai built a newspaper that told the truth about power. Power took the
            newspaper. Then it took him.
          </p>

          <div className="sources">
            <h3>Sources</h3>
            <ol>
              <li id="source-1">
                Austin Ramzy &amp; Tiffany May, <em>Jimmy Lai Found Guilty Under Hong Kong National Security Law</em>, The New York Times (Dec. 2025).{" "}
                <a href="https://www.nytimes.com/2025/12/29/world/asia/jimmy-lai-verdict-hong-kong.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-2">
                BBC News, <em>Apple Daily: The Hong Kong tabloid that took on Beijing</em> (June 2021).{" "}
                <a href="https://www.bbc.com/news/world-asia-china-57614936" target="_blank" rel="noopener noreferrer">bbc.com</a>
              </li>
              <li id="source-3">
                Helen Davidson, <em>Hong Kong&apos;s Apple Daily prints final edition</em>, The Guardian (June 2021).{" "}
                <a href="https://www.theguardian.com/world/2021/jun/23/hong-kong-apple-daily-final-edition" target="_blank" rel="noopener noreferrer">theguardian.com</a>
              </li>
              <li id="source-4">
                Amnesty International, <em>Hong Kong National Security Law: 10 Things You Need to Know</em> (2020).{" "}
                <a href="https://www.amnesty.org/en/latest/news/2020/07/hong-kong-national-security-law-10-things-you-need-to-know/" target="_blank" rel="noopener noreferrer">amnesty.org</a>
              </li>
              <li id="source-5">
                Jerome Cohen &amp; Thomas Kellogg, <em>Hong Kong&apos;s Civil Society Crackdown</em>, Council on Foreign Relations (2022).{" "}
                <a href="https://www.cfr.org/blog/hong-kongs-civil-society-crackdown" target="_blank" rel="noopener noreferrer">cfr.org</a>
              </li>
              <li id="source-6">
                Reporters Without Borders, <em>Jimmy Lai Trial Tracker</em> (2024).{" "}
                <a href="https://rsf.org/en/jimmy-lai-trial-tracker" target="_blank" rel="noopener noreferrer">rsf.org</a>
              </li>
              <li id="source-7">
                Chris Buckley, <em>No Jury for Jimmy Lai</em>, The New York Times (Dec. 2023).{" "}
                <a href="https://www.nytimes.com/2023/12/18/world/asia/jimmy-lai-trial-hong-kong.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-8">
                Sebastien Lai, <em>My Father Is Locked Up for Running a Newspaper</em>, The Atlantic (2024).{" "}
                <a href="https://www.theatlantic.com/ideas/archive/2024/01/jimmy-lai-hong-kong-press-freedom/677000/" target="_blank" rel="noopener noreferrer">theatlantic.com</a>
              </li>
              <li id="source-9">
                Reporters Without Borders, <em>World Press Freedom Index 2025</em>.{" "}
                <a href="https://rsf.org/en/index" target="_blank" rel="noopener noreferrer">rsf.org</a>
              </li>
              <li id="source-10">
                U.S. Department of State, <em>Statement on Jimmy Lai Verdict</em> (Dec. 2025).{" "}
                <a href="https://www.state.gov/hong-kong/" target="_blank" rel="noopener noreferrer">state.gov</a>
              </li>
            </ol>
          </div>

        </div>
      </article>
    </main>
  );
}
