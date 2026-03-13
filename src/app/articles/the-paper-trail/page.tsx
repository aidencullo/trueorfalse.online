import Header from "@/components/Header";
import ReadingProgress from "@/components/ReadingProgress";
import { getArticle } from "@/data/articles";

export default function ThepapertrailArticle() {
  const article = getArticle("the-paper-trail")!;

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
            You step up to a TSA kiosk at the airport. Camera flashes. You tap submit. Twelve seconds.
            That biometric scan just entered a federal database that may retain it for up to{" "}
            <strong>75 years.</strong>
            <a href="#source-1" className="footnote-ref">[1]</a>{" "}
            You didn&apos;t sign anything. You didn&apos;t opt in. You just wanted to get home.
          </p>

          <h2>The Airport</h2>

          <p>
            CBP&apos;s biometric program is live at 238 airports. TSA is targeting 400+.
            <a href="#source-2" className="footnote-ref">[2]</a>{" "}
            Beyond facial scans, the ESTA form — required for travelers from 42 countries — now
            asks for social media handles. In December 2025, CBP proposed expanding ESTA to require
            five years of social media history, a decade of email addresses, phone numbers, IP
            metadata, and your entire immediate family&apos;s personal information.
            <a href="#source-3" className="footnote-ref">[3]</a>{" "}
            All of it cross-referenced against the Automated Targeting System, which assigns
            invisible risk scores retained for up to <strong>40 years</strong> and shared with foreign governments.
            <a href="#source-4" className="footnote-ref">[4]</a>
          </p>

          <p>
            In 2019, a CBP subcontractor downloaded 184,000 traveler face photos to its own
            private servers — without authorization — and lost them to a ransomware attack.
            They ended up on the dark web.
            <a href="#source-5" className="footnote-ref">[5]</a>{" "}
            Unlike passwords, you cannot change your face.
          </p>

          <blockquote>
            <p>
              In 2018, the <em>Boston Globe</em> revealed that TSA had been secretly assigning
              air marshals to surveil ordinary domestic passengers — not suspects, not watchlisted
              individuals — logging whether they had a &ldquo;cold penetrating stare.&rdquo; The program
              ran for six years before anyone outside TSA knew it existed.
              <a href="#source-6" className="footnote-ref">[6]</a>
            </p>
          </blockquote>

          <h2>Unemployment</h2>

          <p>
            To collect benefits you&apos;ve spent your career paying into, most states now require
            biometric identity verification. During COVID, 30+ states routed applicants through
            ID.me — a private company — storing facial scans on private servers indefinitely.
            That data flows onward to the IRS, SSA, child support agencies, and the National
            Directory of New Hires: a federal database tracking virtually every job and every
            paycheck in the country.
            <a href="#source-7" className="footnote-ref">[7]</a>
          </p>

          <p>
            When that aggregated data became an attack surface, the results were catastrophic.
            The DOL Inspector General estimates at least{" "}
            <strong>$163 billion</strong> in fraudulent pandemic UI payments — most of it enabled
            by identity theft using data stolen in prior breaches. Less than $1 billion has been recovered.
            <a href="#source-8" className="footnote-ref">[8]</a>
          </p>

          <h2>The Consent Illusion</h2>

          <p>
            You don&apos;t <em>have</em> to travel internationally. You don&apos;t <em>have</em> to
            claim unemployment. The forms are technically optional — in the same way eating is optional.
            The Privacy Act of 1974 says data collected for one purpose can only be used for a
            &ldquo;compatible&rdquo; purpose, defined as a &ldquo;routine use.&rdquo; Agencies define
            their own routine uses. The lists expand over time. Academics call this function creep;
            bureaucrats call it program evolution.
            <a href="#source-9" className="footnote-ref">[9]</a>
          </p>

          <p>
            In May 2025, the Privacy and Civil Liberties Oversight Board released a 125-page review
            of TSA&apos;s facial recognition program. It found the DHS Chief Privacy Officer had{" "}
            <strong>failed to conduct required privacy compliance reviews</strong> — and recommended
            the program remain genuinely voluntary.
            <a href="#source-10" className="footnote-ref">[10]</a>{" "}
            A 2019 NIST study found the same algorithms misidentified Asian and Black faces up to{" "}
            <strong>100 times more often</strong> than white male faces.
          </p>

          <p>
            The form asks for your name. It always has. But it used to forget.
          </p>

          {/* Sources */}
          <div className="sources">
            <h3>Sources</h3>
            <ol>
              <li id="source-1">
                DHS, <em>2024 Update on DHS&apos;s Use of Face Recognition Technologies</em> (Jan. 2025).{" "}
                <a href="https://www.dhs.gov/archive/news/2025/01/16/2024-update-dhss-use-face-recognition-face-capture-technologies" target="_blank" rel="noopener noreferrer">dhs.gov</a>
              </li>
              <li id="source-2">
                Biometric Update, <em>TSA targets 400 US airports for biometrics rollout</em> (Dec. 2024).{" "}
                <a href="https://www.biometricupdate.com/202412/tsa-targets-400-us-airports-for-biometrics-rollout" target="_blank" rel="noopener noreferrer">biometricupdate.com</a>
              </li>
              <li id="source-3">
                Federal Register, <em>Revision to I-94 and ESTA</em> (Dec. 2025).{" "}
                <a href="https://www.federalregister.gov/documents/2025/12/10/2025-22461/agency-information-collection-activities-revision-arrival-and-departure-record-form-i-94-and" target="_blank" rel="noopener noreferrer">federalregister.gov</a>
              </li>
              <li id="source-4">
                EPIC, <em>Automated Targeting System</em>.{" "}
                <a href="https://epic.org/automated-targeting-system/" target="_blank" rel="noopener noreferrer">epic.org</a>
              </li>
              <li id="source-5">
                Zack Whittaker, <em>CBP says traveler photos stolen in data breach</em>, TechCrunch (June 2019).{" "}
                <a href="https://techcrunch.com/2019/06/10/cbp-data-breach/" target="_blank" rel="noopener noreferrer">techcrunch.com</a>
              </li>
              <li id="source-6">
                Jana Winter, <em>Inside TSA&apos;s Quiet Skies</em>, Boston Globe (July 2018).{" "}
                <a href="https://apps.bostonglobe.com/news/nation/graphics/2018/07/tsa-quiet-skies/" target="_blank" rel="noopener noreferrer">bostonglobe.com</a>
              </li>
              <li id="source-7">
                ACFE, <em>National Directory of New Hires</em>, HHS.{" "}
                <a href="https://www.acf.hhs.gov/css/resource/national-directory-of-new-hires" target="_blank" rel="noopener noreferrer">acf.hhs.gov</a>
              </li>
              <li id="source-8">
                Jeff Stein, <em>An estimated $163 billion from pandemic unemployment benefits were misspent or stolen</em>, Washington Post (May 2022).{" "}
                <a href="https://www.washingtonpost.com/us-policy/2022/05/15/unemployment-pandemic-fraud-identity-theft/" target="_blank" rel="noopener noreferrer">washingtonpost.com</a>
              </li>
              <li id="source-9">
                Finn et al., &ldquo;The Concept of Function Creep,&rdquo; <em>Law, Innovation and Technology</em> (2021).{" "}
                <a href="https://www.tandfonline.com/doi/full/10.1080/17579961.2021.1898299" target="_blank" rel="noopener noreferrer">tandfonline.com</a>
              </li>
              <li id="source-10">
                Privacy and Civil Liberties Oversight Board, <em>Use of FRT by TSA</em> (May 2025).{" "}
                <a href="https://documents.pclob.gov/prod/Documents/OversightReport/90964138-44eb-483d-990e-057ce4c31db7/Use%20of%20FRT%20by%20TSA,%20PCLOB%20Report%20(5-12-25),%20Completed%20508,%20May%2019,%202025.pdf" target="_blank" rel="noopener noreferrer">PCLOB Report (PDF)</a>
              </li>
            </ol>
          </div>

        </div>
      </article>

      {/* Back */}
      <div className="px-6 pb-24 max-w-3xl mx-auto">
        <div className="border-t border-border pt-10 flex items-center justify-between">
          <a href="/" className="text-muted hover:text-accent text-sm font-mono tracking-wider transition-colors flex items-center gap-2">
            ← All articles
          </a>
          <span className="text-muted text-xs font-mono">TRUE OR FALSE — {article.date}</span>
        </div>
      </div>
    </main>
  );
}
