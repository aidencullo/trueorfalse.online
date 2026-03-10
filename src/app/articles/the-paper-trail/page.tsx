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
            className="font-display font-700 text-text leading-none mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.04em" }}
          >
            {article.title}
          </h1>

          <p className="text-muted-light text-xl leading-relaxed mb-8 max-w-2xl">
            {article.subtitle}
          </p>

          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border text-muted text-[10px] font-mono px-3 py-1 tracking-wider"
              >
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
            Imagine you&apos;re at an airport. You step up to an Automated Passport Control kiosk,
            press your fingertips to the screen, hold still for a photo, and tap &ldquo;Submit.&rdquo;
            Twelve seconds. Done. You don&apos;t think twice. But that biometric scan just entered a
            federal database that may retain it for up to 75 years — longer than most marriages,
            longer than most careers, longer than most regrets.
            <a href="#source-1" className="footnote-ref">[1]</a>
          </p>

          <p>
            The modern government form is a masterpiece of ambient surveillance. It is invisible in its
            operation, mundane in its appearance, and nearly impossible to refuse. You need to travel.
            You need unemployment benefits. You need a driver&apos;s license. You need the form. And
            the form needs everything you have.
          </p>

          <h2>What the Airport Actually Collects</h2>

          <p>
            U.S. Customs and Border Protection (CBP) operates one of the most extensive civilian
            biometric collection programs in the world. The Biometric Entry-Exit program, launched
            under a 2004 congressional mandate and dramatically expanded since 2017, captures facial
            recognition photos of travelers at over 30 major airports.
            <a href="#source-2" className="footnote-ref">[2]</a>
            By 2023, CBP reported a facial recognition match rate of 97–99% — a number that sounds
            reassuring until you realize the denominator includes every person who ever flew
            internationally through an American airport.
          </p>

          <p>
            When you fill out the ESTA (Electronic System for Travel Authorization), you&apos;re not
            just answering whether you&apos;ve visited Iran or Cuba. You&apos;re consenting to a
            background check cross-referenced across 26 federal databases — including law enforcement,
            terrorism watchlists, and financial crimes records.
            <a href="#source-3" className="footnote-ref">[3]</a>
            The form asks about your &ldquo;social media presence,&rdquo; a field added in 2016 that
            lets agents review your Twitter, Instagram, and Facebook history.
            <a href="#source-4" className="footnote-ref">[4]</a>
            No warrant required.
          </p>

          <blockquote>
            <p>
              &ldquo;The border is the one place in America where the Fourth Amendment essentially
              doesn&apos;t apply. Searches require no warrant, no probable cause, no reasonable
              suspicion.&rdquo;
            </p>
          </blockquote>

          <p>
            This isn&apos;t hypothetical. In 2017, CBP began asking even U.S. citizens about their
            social media handles — voluntarily, technically, but try telling that to someone who
            just wants to get home.
            <a href="#source-5" className="footnote-ref">[5]</a>
            The Electronic Frontier Foundation documented cases where social media screening led
            to detentions based on posts by the traveler&apos;s <em>friends</em>.
          </p>

          <h2>Unemployment: The Form That Never Forgets</h2>

          <p>
            Unemployment insurance may be the most data-hungry non-criminal form in American civic
            life. To collect benefits you&apos;ve paid into your entire working life, most states
            require: your full employment history, your Social Security number, your banking
            information, your household composition, often your medical status if disability is
            involved, and — in an increasingly common requirement — identity verification through
            third-party services like ID.me.
            <a href="#source-6" className="footnote-ref">[6]</a>
          </p>

          <p>
            ID.me, which became the dominant identity verification vendor for state unemployment
            agencies during the COVID-19 pandemic, requires facial recognition, a government ID
            scan, and optional &ldquo;selfie verification&rdquo; that it stores indefinitely.
            At peak pandemic unemployment, over 30 states were routing applicants through ID.me&apos;s
            private servers — a private company holding biometric data on tens of millions of
            Americans who had no meaningful choice in the matter.
            <a href="#source-7" className="footnote-ref">[7]</a>
          </p>

          <p>
            The data collected doesn&apos;t stay siloed. State workforce agencies share unemployment
            data with the Social Security Administration, the IRS, child support enforcement
            agencies, the Department of Homeland Security, and — through the National Directory of
            New Hires — a federal database that tracks virtually every job, every employer, and
            every income source in the country.
            <a href="#source-8" className="footnote-ref">[8]</a>
          </p>

          <h2>The Consent Illusion</h2>

          <p>
            These systems persist because of a legal fiction called &ldquo;voluntary consent.&rdquo;
            You don&apos;t <em>have</em> to travel internationally. You don&apos;t <em>have</em> to
            collect unemployment. You don&apos;t <em>have</em> to get a driver&apos;s license. The
            forms are technically optional — in the same way that eating is optional.
          </p>

          <p>
            The Supreme Court has long recognized that benefits can&apos;t be conditioned on
            unconstitutional demands, under the &ldquo;unconstitutional conditions&rdquo; doctrine.
            But this doctrine has struggled to keep pace with the scale and integration of modern
            data collection. When data flows between 26 agencies automatically, when your airport
            photo is matched against your unemployment selfie is matched against your DMV record,
            the question of consent becomes almost philosophical.
          </p>

          <h2>What You Can Do (And What You Can&apos;t)</h2>

          <p>
            U.S. citizens can opt out of facial recognition at airports — CBP is required to
            offer this option, though agents don&apos;t always volunteer it.
            <a href="#source-9" className="footnote-ref">[9]</a>
            Non-citizens cannot. For everyone, the underlying data collection from ESTA, I-94 forms,
            and customs declarations continues regardless of the biometric opt-out.
          </p>

          <p>
            On the unemployment side, options are more limited. If your state routes through
            ID.me, your choices are roughly: comply, appeal for an alternative (which may not
            exist), or forgo benefits. The ACLU has sued several states over mandatory biometric
            collection for benefits, with mixed results.
          </p>

          <p>
            The deeper problem is structural. Forms are designed by program administrators who are
            rewarded for fraud prevention and penalized for benefits errors — not for protecting
            applicant privacy. The incentive is always toward more data, longer retention, wider
            sharing. There is no equivalent career incentive for data minimization.
          </p>

          <h2>The Accumulation Effect</h2>

          <p>
            No single form is the problem. The problem is the accumulation — the way that airport
            biometrics and unemployment identity checks and DMV records and tax filings and census
            responses aggregate, cross-reference, and persist in ways that no single agency
            designed and no single law governs.
          </p>

          <p>
            The United States has no comprehensive federal privacy law. The EU&apos;s GDPR gives
            European citizens rights to access, correct, and delete government-held data.
            Americans have no equivalent right against the federal government for most of these
            systems.
            <a href="#source-10" className="footnote-ref">[10]</a>
            The Privacy Act of 1974 — written before the internet, before biometrics, before cloud
            storage — remains the primary legal framework.
          </p>

          <p>
            The form asks for your name. It always has. But it used to forget.
          </p>

          {/* Sources */}
          <div className="sources">
            <h3>Sources</h3>
            <ol>
              <li id="source-1">
                U.S. Customs and Border Protection, <em>Privacy Impact Assessment for the Biometric Entry-Exit Program</em>.{" "}
                <a href="https://www.dhs.gov/sites/default/files/publications/privacy-pia-cbp-beep-may2018.pdf" target="_blank" rel="noopener noreferrer">
                  dhs.gov
                </a>
              </li>
              <li id="source-2">
                CBP, <em>Facial Recognition Technology at U.S. Airports</em>.{" "}
                <a href="https://www.cbp.gov/travel/biometrics" target="_blank" rel="noopener noreferrer">
                  cbp.gov/travel/biometrics
                </a>
              </li>
              <li id="source-3">
                U.S. Department of Homeland Security, <em>Electronic System for Travel Authorization (ESTA): Privacy Impact Assessment</em>.{" "}
                <a href="https://www.dhs.gov/publication/privacy-impact-assessments-travel-and-transportation" target="_blank" rel="noopener noreferrer">
                  dhs.gov
                </a>
              </li>
              <li id="source-4">
                U.S. Customs and Border Protection, <em>Notice of Modified System of Records: Social Media Identifiers</em>, Federal Register 82 FR 43556 (2017).{" "}
                <a href="https://www.federalregister.gov/documents/2017/09/18/2017-19365/privacy-act-of-1974-system-of-records" target="_blank" rel="noopener noreferrer">
                  federalregister.gov
                </a>
              </li>
              <li id="source-5">
                Electronic Frontier Foundation, <em>Social Media Surveillance at the U.S. Border</em>.{" "}
                <a href="https://www.eff.org/issues/border-searches" target="_blank" rel="noopener noreferrer">
                  eff.org/issues/border-searches
                </a>
              </li>
              <li id="source-6">
                U.S. Government Accountability Office, <em>Unemployment Insurance: Pandemic Fraud and Identity Theft</em>, GAO-23-105523 (2023).{" "}
                <a href="https://www.gao.gov/products/gao-23-105523" target="_blank" rel="noopener noreferrer">
                  gao.gov
                </a>
              </li>
              <li id="source-7">
                Davey Alba and Zolan Kanno-Youngs, &ldquo;States Are Requiring Facial Recognition to Get Unemployment Benefits,&rdquo; <em>The New York Times</em>, Feb. 2022.{" "}
                <a href="https://www.nytimes.com/2022/02/10/technology/state-unemployment-facial-recognition.html" target="_blank" rel="noopener noreferrer">
                  nytimes.com
                </a>
              </li>
              <li id="source-8">
                Office of Child Support Enforcement, <em>The National Directory of New Hires</em>, U.S. Dept. of Health &amp; Human Services.{" "}
                <a href="https://www.acf.hhs.gov/css/resource/national-directory-of-new-hires" target="_blank" rel="noopener noreferrer">
                  acf.hhs.gov
                </a>
              </li>
              <li id="source-9">
                Electronic Frontier Foundation, <em>How to Opt Out of Facial Recognition at the Airport</em>.{" "}
                <a href="https://www.eff.org/deeplinks/2019/04/how-opt-out-face-recognition-airport" target="_blank" rel="noopener noreferrer">
                  eff.org
                </a>
              </li>
              <li id="source-10">
                Caitlin Chin and Zachary Crain, &ldquo;A Primer on U.S. Federal Privacy Law,&rdquo; Center for Strategic and International Studies (2023).{" "}
                <a href="https://www.csis.org/analysis/primer-us-federal-privacy-law" target="_blank" rel="noopener noreferrer">
                  csis.org
                </a>
              </li>
            </ol>
          </div>

        </div>
      </article>

      {/* Back */}
      <div className="px-6 pb-24 max-w-3xl mx-auto">
        <div className="border-t border-border pt-10 flex items-center justify-between">
          <a href="/" className="text-muted hover:text-accent text-sm font-mono tracking-wider transition-colors flex items-center gap-2">
            ← Back to all articles
          </a>
          <span className="text-muted text-xs font-mono">PRESS — {article.date}</span>
        </div>
      </div>
    </main>
  );
}
