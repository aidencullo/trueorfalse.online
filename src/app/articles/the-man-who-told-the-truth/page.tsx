import { getArticle } from "@/data/articles";
import Link from "next/link";
import Comments from "@/components/Comments";

export default function TheManWhoToldTheTruthArticle() {
  const article = getArticle("the-man-who-told-the-truth")!;

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
            On June 5, 2013, Glenn Greenwald published the first story. The NSA was collecting
            the phone records of millions of Verizon customers — every call, every day, in bulk.
            <a href="#source-1" className="footnote-ref">[1]</a>{" "}
            The source was a 29-year-old systems administrator named Edward Snowden, sitting in
            a hotel room in Hong Kong with four laptops and the most consequential intelligence
            leak in American history.
          </p>

          <h2>What He Revealed</h2>

          <p>
            Over the following months, journalists published document after document. The
            architecture of global mass surveillance came into focus:
          </p>

          <p>
            <strong>PRISM</strong> — direct access to user data from Google, Apple, Facebook,
            Microsoft, Yahoo, and other tech companies. Emails, chats, photos, videos, file
            transfers, login activity.
            <a href="#source-2" className="footnote-ref">[2]</a>
          </p>

          <p>
            <strong>XKeyscore</strong> — a search engine for virtually everything a person does
            on the internet. An NSA analyst could enter an email address and retrieve the content
            of every message, every browsing session, every chat — in real time, without a warrant.
            <a href="#source-3" className="footnote-ref">[3]</a>
          </p>

          <p>
            <strong>Upstream collection</strong> — the NSA was tapping undersea fiber optic cables,
            capturing internet traffic as it flowed between continents. The British partner agency
            GCHQ, under a program called TEMPORA, was buffering <strong>all internet traffic</strong> entering
            the UK for up to 30 days.
            <a href="#source-4" className="footnote-ref">[4]</a>
          </p>

          <blockquote>
            <p>
              &ldquo;I don&apos;t want to live in a world where everything I do and say is
              recorded. That is not something I am willing to support or live under.&rdquo;
              <br />— Edward Snowden, June 2013
            </p>
          </blockquote>

          <h2>What Changed</h2>

          <p>
            The revelations triggered the largest public debate about surveillance in a generation.
            In 2015, Congress passed the USA FREEDOM Act, which officially ended the bulk phone
            metadata program exposed in the very first Snowden story.
            <a href="#source-5" className="footnote-ref">[5]</a>{" "}
            Tech companies began implementing end-to-end encryption by default. Apple and Google
            encrypted smartphone storage. WhatsApp turned on Signal Protocol for a billion users.
          </p>

          <p>
            But the deeper programs — the ones collecting internet content, tapping cables, and
            compelling tech companies to hand over data — remained largely intact. Section 702 of
            FISA, the legal authority behind PRISM and upstream collection, was reauthorized in
            2018 and again in <strong>April 2024</strong>, with expanded powers allowing the
            government to compel any company with access to communications equipment to assist
            with surveillance.
            <a href="#source-6" className="footnote-ref">[6]</a>
          </p>

          <h2>What Didn&apos;t</h2>

          <p>
            Snowden fled to Hong Kong, then to Moscow — where he remains. The U.S. government
            charged him under the Espionage Act of 1917, a law originally designed for spies,
            not whistleblowers. Under the Espionage Act, Snowden cannot argue in court that his
            disclosures served the public interest. The law does not recognize a public interest
            defense.
            <a href="#source-7" className="footnote-ref">[7]</a>
          </p>

          <p>
            In September 2020, a federal court ruled that the bulk phone surveillance program
            Snowden exposed was <strong>illegal</strong> — and that the intelligence community
            had lied about it to Congress and the public.
            <a href="#source-8" className="footnote-ref">[8]</a>{" "}
            No one was prosecuted. No official was fired. The program had already been quietly
            replaced by other collection methods.
          </p>

          <p>
            In 2022, the EU&apos;s top court struck down the US-EU data transfer framework,
            citing ongoing NSA surveillance of European citizens — a direct consequence of
            Snowden&apos;s revelations. The ruling threw transatlantic data flows into legal
            chaos until a new framework was hastily negotiated.
            <a href="#source-9" className="footnote-ref">[9]</a>
          </p>

          <h2>Exile</h2>

          <p>
            Snowden was granted Russian citizenship in 2022. He has never returned to the
            United States. Multiple human rights organizations, including Amnesty International
            and the ACLU, have called for his charges to be dropped. President Obama&apos;s
            attorney general, Eric Holder, said in 2016 that Snowden had performed a
            &ldquo;public service.&rdquo; Obama did not pardon him.
            <a href="#source-10" className="footnote-ref">[10]</a>
          </p>

          <p>
            The surveillance apparatus Snowden revealed is still running. It has been legalized,
            expanded, and normalized. The public debate he ignited lasted about two news cycles.
            The infrastructure is permanent. The man who exposed it cannot come home.
          </p>

          <div className="sources">
            <h3>Sources</h3>
            <ol>
              <li id="source-1">
                Glenn Greenwald, <em>NSA Collecting Phone Records of Millions of Verizon Customers Daily</em>, The Guardian (June 2013).{" "}
                <a href="https://www.theguardian.com/world/2013/jun/06/nsa-phone-records-verizon-court-order" target="_blank" rel="noopener noreferrer">theguardian.com</a>
              </li>
              <li id="source-2">
                Barton Gellman &amp; Laura Poitras, <em>U.S., British Intelligence Mining Data from Nine U.S. Internet Companies</em>, The Washington Post (June 2013).{" "}
                <a href="https://www.washingtonpost.com/investigations/us-intelligence-mining-data-from-nine-us-internet-companies-in-broad-secret-program/2013/06/06/3a0c0da8-cebf-11e2-8845-d970ccb04497_story.html" target="_blank" rel="noopener noreferrer">washingtonpost.com</a>
              </li>
              <li id="source-3">
                Glenn Greenwald, <em>XKeyscore: NSA Tool Collects &apos;Nearly Everything a User Does on the Internet&apos;</em>, The Guardian (July 2013).{" "}
                <a href="https://www.theguardian.com/world/2013/jul/31/nsa-top-secret-program-online-data" target="_blank" rel="noopener noreferrer">theguardian.com</a>
              </li>
              <li id="source-4">
                Ewen MacAskill et al., <em>GCHQ Taps Fibre-Optic Cables</em>, The Guardian (June 2013).{" "}
                <a href="https://www.theguardian.com/uk/2013/jun/21/gchq-cables-secret-world-communications-nsa" target="_blank" rel="noopener noreferrer">theguardian.com</a>
              </li>
              <li id="source-5">
                Charlie Savage, <em>Obama Signs USA FREEDOM Act</em>, The New York Times (June 2015).{" "}
                <a href="https://www.nytimes.com/2015/06/03/us/politics/senate-surveillance-bill-passes-hurdle-but-showdown-looms.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-6">
                Elizabeth Goitein, <em>Congress Just Expanded Warrantless Surveillance</em>, Brennan Center for Justice (April 2024).{" "}
                <a href="https://www.brennancenter.org/our-work/analysis-opinion/congress-just-expanded-warrantless-surveillance" target="_blank" rel="noopener noreferrer">brennancenter.org</a>
              </li>
              <li id="source-7">
                Barton Gellman, <em>Edward Snowden, After Months of NSA Revelations, Says His Mission Is Accomplished</em>, The Washington Post (Dec. 2013).{" "}
                <a href="https://www.washingtonpost.com/world/national-security/edward-snowden-after-months-of-nsa-revelations-says-his-missions-accomplished/2013/12/23/49fc36de-6c1c-11e3-a523-fe73f0ff6b8d_story.html" target="_blank" rel="noopener noreferrer">washingtonpost.com</a>
              </li>
              <li id="source-8">
                Charlie Savage, <em>Court Rules NSA Phone Surveillance Program Was Illegal</em>, The New York Times (Sept. 2020).{" "}
                <a href="https://www.nytimes.com/2020/09/02/us/politics/nsa-phone-program-illegal.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-9">
                Adam Satariano, <em>E.U. Court Strikes Down Trans-Atlantic Data Transfer Pact</em>, The New York Times (July 2020).{" "}
                <a href="https://www.nytimes.com/2020/07/16/business/eu-data-transfer-pact-rejected.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-10">
                Matt Apuzzo, <em>Eric Holder Says Snowden Performed a &apos;Public Service&apos;</em>, The New York Times (May 2016).{" "}
                <a href="https://www.nytimes.com/2016/05/31/us/politics/eric-holder-edward-snowden.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
            </ol>
          </div>

          <Comments />

        </div>
      </article>
    </main>
  );
}
