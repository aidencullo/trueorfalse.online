import { getArticle } from "@/data/articles";
import Link from "next/link";

export default function PrintTheTruthGoToPrison() {
  const article = getArticle("print-the-truth-go-to-prison")!;

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
            On the morning of December 29, 2025, three judges in Hong Kong&apos;s High Court
            read a verdict that took ninety minutes to deliver. Jimmy Lai — 77 years old,
            five years into pretrial detention, founder of the newspaper that once outsold
            every other tabloid in the city — stood in the dock and listened as they found
            him guilty of &ldquo;conspiracy to collude with foreign forces&rdquo; and
            &ldquo;conspiracy to commit sedition.&rdquo; His crime, stripped of its legal
            scaffolding, was publishing.
            <a href="#source-1" className="footnote-ref">[1]</a>
          </p>

          <p>
            The courtroom was not full. Seats were reserved for diplomats who mostly did
            not come. Outside, a small crowd held signs. No riots, no vigils clogging the
            harbor. Hong Kong in 2025 is a city that has learned what happens when you
            make noise. The verdict was not a surprise. It was a formality — the capstone
            on a prosecution designed not to prove guilt, but to demonstrate reach.
          </p>

          <h2>The Newspaper That Wouldn&apos;t Shut Up</h2>

          <p>
            Apple Daily launched in 1995, the same year Chris Patten was preparing Hong
            Kong for its handover to China. From the start, it was loud. Lai, a
            self-made garment tycoon who had fled mainland China as a twelve-year-old
            stowaway, built the paper as a market-driven antidote to the city&apos;s
            cautious broadsheets. It ran celebrity gossip alongside investigations into
            corruption. It endorsed the Tiananmen Square commemorations every June. It
            printed things other papers wouldn&apos;t.
            <a href="#source-2" className="footnote-ref">[2]</a>
          </p>

          <p>
            When the 2014 Umbrella Movement paralyzed downtown Hong Kong, Apple Daily
            covered it as a democratic uprising. When the 2019 protests erupted over
            the extradition bill, the paper ran front pages that read like protest
            banners. Beijing called it a &ldquo;poisonous apple.&rdquo; Lai called it
            journalism.
            <a href="#source-3" className="footnote-ref">[3]</a>
          </p>

          <p>
            By 2020, the paper had 600 employees and a digital platform with millions of
            readers. It was the last major Chinese-language outlet in Hong Kong willing to
            criticize the Communist Party by name. That distinction was also its death
            warrant.
          </p>

          <h2>500 Officers for One Newsroom</h2>

          <p>
            On June 17, 2021, five hundred police officers entered Apple Daily&apos;s
            headquarters in Tseung Kwan O. They carried warrants under the National
            Security Law. They seized reporters&apos; computers, confiscated notebooks,
            and arrested five senior editors on charges of &ldquo;collusion with foreign
            forces.&rdquo; The evidence cited: editorials calling for international
            sanctions against Hong Kong officials.
            <a href="#source-4" className="footnote-ref">[4]</a>
          </p>

          <p>
            The government froze Apple Daily&apos;s assets — HK$18 million — under the
            NSL&apos;s asset-seizure provisions. Without access to its bank accounts,
            the paper could not pay staff, buy ink, or keep the lights on. Seven days
            later, on June 24, Apple Daily published its final edition. The print run
            was one million copies, ten times the usual. People lined up before dawn.
            Copies sold out by 8:30 a.m.
            <a href="#source-5" className="footnote-ref">[5]</a>
          </p>

          <blockquote>
            <p>
              &ldquo;People bought the last edition like it was a funeral flower — a way
              of paying respects to something that had already died.&rdquo;
              <br />— Sharron Fast, journalism professor, University of Hong Kong
            </p>
          </blockquote>

          <h2>The Charges Against Lai</h2>

          <p>
            Lai was first arrested in August 2020 — walked out of his own newsroom in
            handcuffs while cameras rolled — and has been in continuous custody since
            December of that year. The charges against him carry a maximum sentence of
            life in prison. They rest on three pillars: that he &ldquo;colluded&rdquo;
            with foreign governments by giving interviews to international media, that
            he used Apple Daily to advocate for sanctions, and that he conspired with
            pro-democracy activists to &ldquo;subvert state power.&rdquo;
            <a href="#source-6" className="footnote-ref">[6]</a>
          </p>

          <p>
            The prosecution&apos;s evidence included 161 tweets from Lai&apos;s personal
            account, transcripts of interviews he gave to the BBC, CNN, and Fox News,
            and op-eds published in his own newspaper. One article cited as criminal
            evidence was an editorial urging the United States to pass the Hong Kong
            Human Rights and Democracy Act — a bill that became US law with bipartisan
            support.
            <a href="#source-7" className="footnote-ref">[7]</a>
          </p>

          <p>
            Put differently: a man is serving what will likely be a life sentence for
            saying, in public, things that members of the US Congress were saying at the
            same podium.
          </p>

          <h2>The National Security Law&apos;s Architecture</h2>

          <p>
            The NSL was imposed on Hong Kong by Beijing on June 30, 2020, bypassing the
            territory&apos;s own legislature. It was drafted in secret, published at
            11 p.m. the night it took effect, and immediately became the supreme law of
            the territory — overriding the Basic Law, Hong Kong&apos;s mini-constitution,
            wherever the two conflict. Its four categories of crime — secession,
            subversion, terrorism, and collusion with foreign forces — are defined with
            deliberate vagueness.
            <a href="#source-8" className="footnote-ref">[8]</a>
          </p>

          <p>
            The law allows the Chief Executive to remove jury trials for national security
            cases. It permits indefinite pretrial detention. It authorizes wiretaps without
            judicial warrants. And it applies, by its own terms, to <em>everyone on
            Earth</em>: Article 38 extends jurisdiction to offenses committed by any
            person, anywhere, regardless of nationality or location.
            <a href="#source-9" className="footnote-ref">[9]</a>
          </p>

          <p>
            Since its enactment, more than 260 people have been arrested under the NSL.
            Every major pro-democracy organization in Hong Kong has disbanded. The
            Professional Teachers&apos; Union — 95,000 members — dissolved itself after
            state media labeled it a &ldquo;political tumor.&rdquo; The Civil Human
            Rights Front, which organized marches of over a million people, shut down.
            The city&apos;s largest independent union confederation is gone.
            <a href="#source-10" className="footnote-ref">[10]</a>
          </p>

          <h2>The Chilling Effect Across Asia</h2>

          <p>
            Lai&apos;s prosecution is not a local story. It is a signal — calibrated for
            export. In Singapore, the government has expanded its use of the Protection
            from Online Falsehoods and Manipulation Act (POFMA) to flag and suppress
            independent reporting. In Cambodia, dozens of news outlets have been shut
            down under &ldquo;fake news&rdquo; pretexts since 2023. In Myanmar, at
            least 75 journalists have been imprisoned since the 2021 coup, many under
            laws modeled on the same &ldquo;national security&rdquo; framework Beijing
            pioneered.
            <a href="#source-11" className="footnote-ref">[11]</a>
          </p>

          <p>
            The message from Hong Kong&apos;s courtrooms travels fast: you can jail a
            billionaire publisher with the full attention of the Western press, and
            nothing will happen. No sanctions that bite. No trade consequences. No
            revoked banking licenses. If Beijing can do it to Jimmy Lai, any
            mid-tier authoritarian government can do it to a blogger with a WordPress
            site.
          </p>

          <p>
            Reporters Without Borders dropped Hong Kong 68 places on the World Press
            Freedom Index after the NSL passed — from 80th to 148th out of 180
            countries. The Committee to Protect Journalists now lists Hong Kong among
            the world&apos;s worst jailers of the press, a designation it shares with
            Myanmar, Belarus, and Iran.
            <a href="#source-12" className="footnote-ref">[12]</a>
          </p>

          <h2>The Silence</h2>

          <p>
            After the verdict, the UK Foreign Secretary called it &ldquo;politically
            motivated.&rdquo; The US State Department expressed &ldquo;deep concern.&rdquo;
            The EU issued a statement. None of these governments imposed new sanctions.
            None recalled ambassadors. None conditioned trade agreements. HSBC and Standard
            Chartered still operate from their Hong Kong towers. The financial machinery
            that makes the city useful to global capital continues uninterrupted.
          </p>

          <p>
            Lai&apos;s son, Sebastien, has spent years lobbying Western governments to
            take action. He has testified before the US Congress, the European Parliament,
            and the UK House of Commons. He has written op-eds in The Atlantic and The
            Wall Street Journal. The response has been consistent: sympathy in private,
            caution in public.
            <a href="#source-13" className="footnote-ref">[13]</a>
          </p>

          <p>
            This is what the end of press freedom looks like in practice. Not a sudden
            blackout, but a slow drain. A newsroom raided here. An editor arrested there.
            Assets frozen, sources intimidated, lawyers pressured. The paper folds. The
            readers move on. The publisher grows old in a cell. And the world — the world
            issues a statement.
          </p>

          <blockquote>
            <p>
              &ldquo;My father didn&apos;t go to prison because he broke the law. He went
              to prison because the law was written to break him.&rdquo;
              <br />— Sebastien Lai, testimony before the European Parliament (2024)
            </p>
          </blockquote>

          <p>
            Jimmy Lai turned 77 in December 2024. He has spent more than five years in
            custody. He reads, he prays — he converted to Catholicism decades ago — and
            he waits for a sentencing hearing that will determine whether he dies behind
            bars. His newspaper no longer exists. Its website is blocked. Its archives
            are being scrubbed. But the last edition is still out there, in the homes of
            the people who stood in line before dawn to buy it, folded and preserved like
            something sacred — which, in a way, it is.
          </p>

          <div className="sources">
            <h3>Sources</h3>
            <ol>
              <li id="source-1">
                Austin Ramzy &amp; Tiffany May, <em>Jimmy Lai Found Guilty Under Hong Kong&apos;s National Security Law</em>, The New York Times (Dec. 2025).{" "}
                <a href="https://www.nytimes.com/2025/12/29/world/asia/jimmy-lai-verdict-hong-kong.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-2">
                BBC News, <em>Apple Daily: The Hong Kong tabloid that took on Beijing</em> (June 2021).{" "}
                <a href="https://www.bbc.com/news/world-asia-china-57614936" target="_blank" rel="noopener noreferrer">bbc.com</a>
              </li>
              <li id="source-3">
                Shibani Mahtani &amp; Timothy McLaughlin, <em>Among the Braves: The Story of Hong Kong&apos;s Pro-Democracy Movement</em>, Hachette (2023).{" "}
                <a href="https://www.hachettebookgroup.com/titles/shibani-mahtani/among-the-braves/9780306827563/" target="_blank" rel="noopener noreferrer">hachettebookgroup.com</a>
              </li>
              <li id="source-4">
                Helen Davidson, <em>Hong Kong police arrest Apple Daily executives in national security raids</em>, The Guardian (June 2021).{" "}
                <a href="https://www.theguardian.com/world/2021/jun/17/hong-kong-police-arrest-apple-daily-executives-in-dawn-raids" target="_blank" rel="noopener noreferrer">theguardian.com</a>
              </li>
              <li id="source-5">
                Theodora Yu &amp; Shibani Mahtani, <em>Apple Daily publishes final edition after Hong Kong authorities freeze assets</em>, The Washington Post (June 2021).{" "}
                <a href="https://www.washingtonpost.com/world/asia_pacific/apple-daily-last-edition-hong-kong/2021/06/23/db2b3e38-d3e8-11eb-ae54-515e2f63d37d_story.html" target="_blank" rel="noopener noreferrer">washingtonpost.com</a>
              </li>
              <li id="source-6">
                Reporters Without Borders, <em>Jimmy Lai Trial Tracker</em> (2024).{" "}
                <a href="https://rsf.org/en/jimmy-lai-trial-tracker" target="_blank" rel="noopener noreferrer">rsf.org</a>
              </li>
              <li id="source-7">
                Chris Buckley &amp; Austin Ramzy, <em>Prosecutors Use Jimmy Lai&apos;s Tweets and Interviews as Evidence of Collusion</em>, The New York Times (Jan. 2024).{" "}
                <a href="https://www.nytimes.com/2024/01/02/world/asia/jimmy-lai-trial-evidence-hong-kong.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-8">
                Amnesty International, <em>Hong Kong National Security Law: 10 Things You Need to Know</em> (July 2020).{" "}
                <a href="https://www.amnesty.org/en/latest/news/2020/07/hong-kong-national-security-law-10-things-you-need-to-know/" target="_blank" rel="noopener noreferrer">amnesty.org</a>
              </li>
              <li id="source-9">
                Human Rights Watch, <em>Dismantling a Free Society: Hong Kong One Year After the National Security Law</em> (June 2021).{" "}
                <a href="https://www.hrw.org/feature/2021/06/25/dismantling-free-society" target="_blank" rel="noopener noreferrer">hrw.org</a>
              </li>
              <li id="source-10">
                Jerome A. Cohen &amp; Thomas E. Kellogg, <em>Hong Kong&apos;s National Security Law: A Deepening Crackdown</em>, Council on Foreign Relations (2022).{" "}
                <a href="https://www.cfr.org/blog/hong-kongs-national-security-law-deepening-crackdown" target="_blank" rel="noopener noreferrer">cfr.org</a>
              </li>
              <li id="source-11">
                Committee to Protect Journalists, <em>Jail Census 2024: Journalists Imprisoned Worldwide</em> (Dec. 2024).{" "}
                <a href="https://cpj.org/data/imprisoned/2024/" target="_blank" rel="noopener noreferrer">cpj.org</a>
              </li>
              <li id="source-12">
                Reporters Without Borders, <em>World Press Freedom Index 2025</em>.{" "}
                <a href="https://rsf.org/en/index" target="_blank" rel="noopener noreferrer">rsf.org</a>
              </li>
              <li id="source-13">
                Sebastien Lai, <em>My Father Is Locked Up for Running a Newspaper</em>, The Atlantic (Jan. 2024).{" "}
                <a href="https://www.theatlantic.com/ideas/archive/2024/01/jimmy-lai-hong-kong-press-freedom/677000/" target="_blank" rel="noopener noreferrer">theatlantic.com</a>
              </li>
            </ol>
          </div>

        </div>
      </article>
    </main>
  );
}
