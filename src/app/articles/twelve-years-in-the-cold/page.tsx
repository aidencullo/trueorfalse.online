import { getArticle } from "@/data/articles";
import Link from "next/link";


export default function TwelveYearsInTheColdArticle() {
  const article = getArticle("twelve-years-in-the-cold")!;

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
            On a December evening in 2022, Edward Snowden walked into a Russian government
            office and swore an oath of allegiance to the Russian Federation. He raised his
            right hand, recited the words, and became a citizen of the country whose surveillance
            apparatus he had spent a decade criticizing from the inside.
            <a href="#source-1" className="footnote-ref">[1]</a>{" "}
            The man who blew the whistle on American mass surveillance now lives under one of
            the most extensive domestic monitoring systems on Earth — and he did not get to
            choose. That is what exile looks like when every country with an extradition treaty
            is off the table.
          </p>

          <h2>The Shelf Life of Outrage</h2>

          <p>
            When Snowden&apos;s revelations hit in June 2013, the reaction was volcanic. The
            Guardian and the Washington Post published story after story: the NSA was
            vacuuming up phone metadata from every Verizon customer in the country, tapping
            directly into the servers of Google and Facebook through PRISM, and intercepting
            internet traffic flowing through undersea cables on a planetary scale.
            <a href="#source-2" className="footnote-ref">[2]</a>{" "}
            Congress held hearings. Silicon Valley issued furious denials, then furious
            confirmations. Angela Merkel called Obama to ask why the NSA was listening to her
            cell phone. For a few months, it looked like something might actually change.
          </p>

          <p>
            Some things did. In 2015, Congress passed the USA FREEDOM Act, which officially
            ended the bulk collection of domestic phone metadata — the program exposed in
            the very first Snowden story. Tech companies raced to implement end-to-end
            encryption. Apple encrypted iPhones by default. WhatsApp turned on the Signal
            Protocol for a billion users overnight.
            <a href="#source-3" className="footnote-ref">[3]</a>{" "}
            The encryption wars, at least temporarily, tilted toward privacy.
          </p>

          <p>
            But the deeper infrastructure — the legal authorities, the corporate partnerships,
            the fiber-optic taps — was never dismantled. It was rebranded.
          </p>

          <h2>Section 702: The Law That Won&apos;t Die</h2>

          <p>
            Section 702 of the Foreign Intelligence Surveillance Act is the legal backbone of
            nearly everything Snowden exposed. It authorizes the NSA to collect the
            communications of foreign targets without individual warrants — but in practice,
            it sweeps up vast quantities of American communications in the process. PRISM
            and upstream collection both operated under its authority.
            <a href="#source-4" className="footnote-ref">[4]</a>
          </p>

          <p>
            In 2018, Congress reauthorized Section 702 for six years. Privacy advocates pushed
            for a warrant requirement before the FBI could search the database for Americans&apos;
            communications — a so-called &ldquo;backdoor search&rdquo; reform. It failed. The
            FBI conducted an estimated <strong>3.4 million</strong> warrantless searches of
            702 data in 2021 alone, including queries related to Black Lives Matter protesters
            and a sitting member of Congress.
            <a href="#source-5" className="footnote-ref">[5]</a>
          </p>

          <p>
            Then came April 2024. Congress reauthorized Section 702 again — and made it worse.
            The Reforming Intelligence and Securing America Act didn&apos;t just extend the
            program. It expanded the definition of &ldquo;electronic communications service
            provider&rdquo; so broadly that any business, landlord, or institution with access
            to Wi-Fi equipment could theoretically be compelled to assist NSA surveillance.
            The Brennan Center for Justice called it &ldquo;the largest expansion of
            surveillance since the Patriot Act.&rdquo;
            <a href="#source-6" className="footnote-ref">[6]</a>
          </p>

          <blockquote>
            <p>
              &ldquo;The government has turned a program that was supposed to target foreigners
              abroad into a domestic surveillance tool — and Congress just made it easier.&rdquo;
              <br />— Elizabeth Goitein, Brennan Center for Justice
            </p>
          </blockquote>

          <h2>More Surveillance, Not Less</h2>

          <p>
            The bitter irony of the post-Snowden era is that surveillance has expanded, not
            contracted. The tools are different — less NSA bulk collection, more commercial
            data brokerage — but the effect is the same. The government didn&apos;t need to
            fight the encryption wars when it could simply buy location data from apps on
            your phone.
          </p>

          <p>
            In 2023, the Office of the Director of National Intelligence declassified a report
            acknowledging that intelligence agencies purchase commercially available data on
            Americans — including location records, web browsing history, and social media
            activity — in quantities that would require a warrant if collected directly.
            <a href="#source-7" className="footnote-ref">[7]</a>{" "}
            The legal workaround is elegantly cynical: if a data broker sells it, it&apos;s
            not a search. The Fourth Amendment, drafted in 1791 to prevent the government from
            rifling through your papers, has no opinion on whether Venntel can sell your GPS
            coordinates to the DHS for a few thousand dollars a year.
          </p>

          <p>
            Meanwhile, the NSA&apos;s budget has grown. In 2023, the U.S. intelligence
            community&apos;s top-line budget hit <strong>$71.7 billion</strong> — a record, and
            roughly double what it was before 9/11.
            <a href="#source-8" className="footnote-ref">[8]</a>{" "}
            The surveillance state didn&apos;t shrink after Snowden. It adapted.
          </p>

          <h2>Life in Moscow</h2>

          <p>
            Snowden did not plan to end up in Russia. He was transiting through Moscow&apos;s
            Sheremetyevo Airport in June 2013, bound for Ecuador, when the State Department
            revoked his passport. He spent 40 days in the airport&apos;s transit zone — a scene
            that felt lifted from a Kafka novel — before Russia granted him temporary asylum.
            <a href="#source-9" className="footnote-ref">[9]</a>{" "}
            That temporary arrangement is now permanent.
          </p>

          <p>
            He married Lindsay Mills in 2017. They have two children, both born in Russia. He
            received permanent residency in 2020 and Russian citizenship in September 2022,
            shortly after Putin announced a military mobilization for the war in Ukraine.
            Snowden has said he opposes the invasion, though his public statements on Russian
            policy have been conspicuously muted compared to his relentless criticism of
            American surveillance.
            <a href="#source-10" className="footnote-ref">[10]</a>
          </p>

          <p>
            Critics have seized on this as proof that he&apos;s compromised — a useful
            instrument of Russian intelligence, whether he knows it or not. His defenders
            point out the obvious: he is a man living in a country that could revoke his
            protection at any moment. Silence is the price of shelter.
          </p>

          <p>
            The irony is not subtle. Russia&apos;s SORM system requires every telecom operator
            in the country to install FSB-accessible interception equipment on its networks.
            <a href="#source-11" className="footnote-ref">[11]</a>{" "}
            The country that gave Snowden asylum conducts domestic surveillance that would
            make the NSA blush — and does so without the pretense of judicial oversight. He
            traded one panopticon for another. The difference is that the second one lets him
            stay.
          </p>

          <h2>The Whistleblower Problem</h2>

          <p>
            Snowden still faces charges under the Espionage Act of 1917. Under that statute,
            he cannot argue in court that his disclosures served the public interest. There is
            no whistleblower defense. The law treats leaking classified information to a
            journalist exactly the same as selling it to a foreign spy.
          </p>

          <p>
            In September 2020, the Ninth Circuit Court of Appeals ruled that the bulk phone
            metadata program Snowden exposed was <strong>illegal</strong> — and that senior
            intelligence officials had misrepresented it to Congress and the courts.
            <a href="#source-12" className="footnote-ref">[12]</a>{" "}
            No official was charged. No one was fired. The program had already been quietly
            wound down and replaced by other collection methods. The court&apos;s ruling was
            a vindication in the abstract — proof that Snowden was right — delivered to a man
            who cannot set foot in the country whose laws proved him so.
          </p>

          <p>
            Eric Holder, Obama&apos;s attorney general, said in 2016 that Snowden performed a
            &ldquo;public service.&rdquo; Obama did not pardon him. Trump called him a
            &ldquo;traitor&rdquo; and suggested execution. Biden showed no interest in the
            case. The bipartisan consensus on Snowden is not that he was wrong — it&apos;s that
            being right doesn&apos;t matter.
          </p>

          <h2>Twelve Years</h2>

          <p>
            Edward Snowden is 42 years old. He has spent more than a quarter of his life in
            Russia. His children are Russian citizens who have never been to the United States.
            The surveillance programs he exposed are still running — legalized, expanded,
            privatized, and normalized. The public outrage he ignited lasted about as long as
            a news cycle.
          </p>

          <p>
            The phone in your pocket is tracked by a constellation of data brokers who sell
            your movements to anyone with a purchase order. The NSA still collects content
            under Section 702, now with broader authority than it had before Snowden went
            public. The FBI still searches that database without a warrant. The intelligence
            budget is at an all-time high.
          </p>

          <p>
            Nothing about this story has a clean ending. The man who told the truth is in
            exile. The system he exposed is larger than ever. And the country that once
            debated whether its government had gone too far has, for the most part, decided
            it doesn&apos;t want to talk about it anymore.
          </p>

          <div className="sources">
            <h3>Sources</h3>
            <ol>
              <li id="source-1">
                Andrew Roth, <em>Edward Snowden Granted Russian Citizenship by Putin</em>, The Guardian (Sept. 2022).{" "}
                <a href="https://www.theguardian.com/us-news/2022/sep/26/edward-snowden-granted-russian-citizenship-by-putin" target="_blank" rel="noopener noreferrer">theguardian.com</a>
              </li>
              <li id="source-2">
                Glenn Greenwald, <em>NSA Collecting Phone Records of Millions of Verizon Customers Daily</em>, The Guardian (June 2013).{" "}
                <a href="https://www.theguardian.com/world/2013/jun/06/nsa-phone-records-verizon-court-order" target="_blank" rel="noopener noreferrer">theguardian.com</a>
              </li>
              <li id="source-3">
                Charlie Savage, <em>Obama Signs USA FREEDOM Act, Ending Bulk Phone Data Collection</em>, The New York Times (June 2015).{" "}
                <a href="https://www.nytimes.com/2015/06/03/us/politics/senate-surveillance-bill-passes-hurdle-but-showdown-looms.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-4">
                Privacy and Civil Liberties Oversight Board, <em>Report on the Surveillance Program Operated Pursuant to Section 702</em> (July 2014).{" "}
                <a href="https://www.pclob.gov/library/702-Report.pdf" target="_blank" rel="noopener noreferrer">pclob.gov</a>
              </li>
              <li id="source-5">
                Charlie Savage, <em>F.B.I. Conducted Millions of Searches of Americans&apos; Data, Report Finds</em>, The New York Times (April 2022).{" "}
                <a href="https://www.nytimes.com/2022/04/29/us/politics/fbi-searches-surveillance-court.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-6">
                Elizabeth Goitein, <em>Congress Just Expanded Warrantless Surveillance</em>, Brennan Center for Justice (April 2024).{" "}
                <a href="https://www.brennancenter.org/our-work/analysis-opinion/congress-just-expanded-warrantless-surveillance" target="_blank" rel="noopener noreferrer">brennancenter.org</a>
              </li>
              <li id="source-7">
                Office of the Director of National Intelligence, <em>Senior Advisory Group Report on Commercially Available Information</em> (Jan. 2022, declassified June 2023).{" "}
                <a href="https://www.odni.gov/files/ODNI/documents/assessments/ODNI-Declassified-Report-on-CAI-January2022.pdf" target="_blank" rel="noopener noreferrer">odni.gov</a>
              </li>
              <li id="source-8">
                Julian E. Barnes, <em>U.S. Intelligence Budget Reaches Record $71.7 Billion</em>, The New York Times (Oct. 2023).{" "}
                <a href="https://www.nytimes.com/2023/10/30/us/politics/intelligence-budget.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-9">
                Peter Baker, <em>Snowden Stranded at Moscow Airport</em>, The New York Times (June 2013).{" "}
                <a href="https://www.nytimes.com/2013/06/24/world/offering-snowden-asylum-putin-resets-us-relations.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-10">
                Mary Ilyushina, <em>Snowden Gets Russian Citizenship as Putin Orders Mobilization</em>, The Washington Post (Sept. 2022).{" "}
                <a href="https://www.washingtonpost.com/world/2022/09/26/snowden-russian-citizenship-putin/" target="_blank" rel="noopener noreferrer">washingtonpost.com</a>
              </li>
              <li id="source-11">
                Andrei Soldatov &amp; Irina Borogan, <em>Russia&apos;s Surveillance State</em>, World Policy Journal (2013).{" "}
                <a href="https://www.worldpoliticsreview.com/russia-surveillance-sorm-putin/" target="_blank" rel="noopener noreferrer">worldpoliticsreview.com</a>
              </li>
              <li id="source-12">
                Charlie Savage, <em>Court Rules Bulk NSA Phone Surveillance Was Illegal</em>, The New York Times (Sept. 2020).{" "}
                <a href="https://www.nytimes.com/2020/09/02/us/politics/nsa-phone-program-illegal.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
            </ol>
          </div>

        </div>
      </article>
    </main>
  );
}
