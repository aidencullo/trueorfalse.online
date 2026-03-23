import { getArticle } from "@/data/articles";
import Link from "next/link";


export default function TheRightYouDontHaveArticle() {
  const article = getArticle("the-right-you-dont-have")!;

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
            In August 2020, a Brazilian judge ordered Facebook to pay 20 million reais — roughly
            $4 million — for sharing user data without consent. The case wasn&apos;t novel. It
            wasn&apos;t even particularly dramatic by Brazilian legal standards. What made it
            remarkable was the law behind it: the <em>Lei Geral de Prote&ccedil;&atilde;o de Dados</em>,
            or LGPD, which had gone into effect just weeks earlier. Brazil had a comprehensive
            federal privacy law. The United States, which invented the internet, still does not.
            <a href="#source-1" className="footnote-ref">[1]</a>
          </p>

          <h2>The Map Has Flipped</h2>

          <p>
            For decades, the assumption in tech policy circles was that digital rights would radiate
            outward from Silicon Valley and Washington. The US and the EU would set the standards;
            the rest of the world would follow. Europe delivered on its end — the General Data
            Protection Regulation became the global gold standard in 2018. But the United States
            never showed up. Congress has introduced and abandoned federal privacy legislation in
            every session since 2012. The American Data Privacy and Protection Act came tantalizingly
            close in 2022, passing the House Energy and Commerce Committee with bipartisan support,
            then dying quietly in the Senate.
            <a href="#source-2" className="footnote-ref">[2]</a>
          </p>

          <p>
            Meanwhile, Latin America moved. Not tentatively. Not as an afterthought. Country after
            country enacted privacy frameworks that, in many cases, are more protective than anything
            Americans have ever had. As of 2025, at least <strong>15 Latin American countries</strong> have
            comprehensive data protection laws on the books.
            <a href="#source-3" className="footnote-ref">[3]</a>
          </p>

          <h2>Brazil: The LGPD</h2>

          <p>
            Brazil&apos;s LGPD, signed into law in 2018 and fully enforced by 2021, is modeled on
            the GDPR but adapted for Brazilian legal traditions. It applies to any company that
            processes the data of people in Brazil — regardless of where the company is based. It
            requires explicit consent for data collection, grants citizens the right to access,
            correct, and delete their data, and mandates that companies appoint a Data Protection
            Officer. Violations carry fines of up to 2% of a company&apos;s revenue in Brazil,
            capped at 50 million reais per infraction.
            <a href="#source-4" className="footnote-ref">[4]</a>
          </p>

          <p>
            The law created its own enforcement body — the Autoridade Nacional de Prote&ccedil;&atilde;o
            de Dados, or ANPD — which began issuing fines and regulations in 2023. In its first major
            enforcement action, the ANPD sanctioned a telecommunications company for failing to
            appoint a data protection officer and for processing data without a lawful basis. It
            wasn&apos;t a wrist slap. It was a signal: Brazil was serious.
            <a href="#source-5" className="footnote-ref">[5]</a>
          </p>

          <blockquote>
            <p>
              &ldquo;The LGPD represents one of the most significant legal developments in Latin
              America in a generation. It doesn&apos;t just regulate companies — it creates a
              culture of data rights that didn&apos;t previously exist.&rdquo;
              <br />— Bruno Bioni, founder of Data Privacy Brasil
            </p>
          </blockquote>

          <h2>Argentina: Privacy as a Constitutional Right</h2>

          <p>
            Argentina didn&apos;t wait for the digital age to protect privacy. The country&apos;s
            constitution, amended in 1994, includes <em>habeas data</em> — a legal mechanism that
            gives every person the right to access, correct, or delete any personal information held
            in public or private databases. This is not a statute. It is a constitutional guarantee,
            sitting alongside the rights to free speech and due process.
            <a href="#source-6" className="footnote-ref">[6]</a>
          </p>

          <p>
            Argentina&apos;s Personal Data Protection Act, Law 25.326, was enacted in 2000 — five
            years before Facebook existed, eight years before the iPhone. It established a national
            data protection authority and imposed strict requirements on cross-border data transfers.
            In 2003, the European Commission recognized Argentina as providing an &ldquo;adequate&rdquo;
            level of data protection — one of only a handful of non-European countries to receive
            that designation. As of 2024, Argentina was working on a major update to align more
            closely with the GDPR while preserving its constitutional foundations.
            <a href="#source-7" className="footnote-ref">[7]</a>
          </p>

          <h2>Mexico: INAI and the Fight for Transparency</h2>

          <p>
            Mexico&apos;s approach to privacy is inseparable from its fight for government transparency.
            The country&apos;s Federal Law on Protection of Personal Data Held by Private Parties,
            enacted in 2010, gave Mexicans the right to access, rectify, cancel, and oppose the
            processing of their personal data — known as ARCO rights. Enforcement fell to INAI, the
            Instituto Nacional de Transparencia, Acceso a la Informaci&oacute;n y Protecci&oacute;n
            de Datos Personales, an autonomous constitutional body with the power to investigate
            complaints, issue binding resolutions, and levy fines.
            <a href="#source-8" className="footnote-ref">[8]</a>
          </p>

          <p>
            INAI became one of the most assertive privacy regulators in the hemisphere. It investigated
            complaints against banks, telecom companies, hospitals, and political parties. It fined
            companies for selling customer databases without consent. It published detailed guidance
            on biometric data, cloud computing, and children&apos;s privacy. Then, in 2023, President
            Andr&eacute;s Manuel L&oacute;pez Obrador proposed abolishing it — calling it expensive,
            corrupt, and unnecessary. The Senate approved the dissolution in late 2024, folding
            INAI&apos;s functions into the Secretar&iacute;a de la Funci&oacute;n P&uacute;blica,
            a body under direct executive control.
            <a href="#source-9" className="footnote-ref">[9]</a>
          </p>

          <blockquote>
            <p>
              &ldquo;Eliminating INAI doesn&apos;t eliminate the right to privacy. It eliminates
              the institution that enforced it.&rdquo;
              <br />— Article 19, international freedom of expression organization
            </p>
          </blockquote>

          <p>
            The dismantling of INAI is a cautionary tale: privacy rights are only as durable as the
            institutions that defend them. But even in its diminished state, Mexico&apos;s legal
            framework still provides more explicit data protection rights than anything that exists
            at the federal level in the United States.
          </p>

          <h2>The American Patchwork</h2>

          <p>
            The US has no comprehensive federal privacy law. What it has instead is a patchwork:
            HIPAA covers health data. FERPA covers student records. COPPA covers children under 13.
            The Gramm-Leach-Bliley Act covers some financial data. Everything else — your browsing
            history, your location data, your purchase records, your face — is largely unregulated
            at the federal level.
            <a href="#source-10" className="footnote-ref">[10]</a>
          </p>

          <p>
            Individual states have tried to fill the gap. California passed the CCPA in 2018 and
            strengthened it with the CPRA in 2020. Virginia, Colorado, Connecticut, and a handful
            of other states followed with their own laws. But these laws vary wildly in scope, enforcement
            mechanisms, and definitions of personal data. A company operating in all 50 states faces
            a maze of conflicting requirements — or, more commonly, follows whichever state&apos;s law
            is weakest and hopes for the best.
            <a href="#source-11" className="footnote-ref">[11]</a>
          </p>

          <p>
            The result is that an American living in Mississippi has essentially no statutory privacy
            rights over their personal data, while a Brazilian in S&atilde;o Paulo, a Mexican in
            Guadalajara, and an Argentine in Buenos Aires are protected by comprehensive national
            frameworks — and in Argentina&apos;s case, by the constitution itself.
          </p>

          <h2>Why It Matters</h2>

          <p>
            This is not an abstract policy gap. It is a daily reality. American data brokers collect
            and sell detailed profiles — health conditions, sexual orientation, political affiliations,
            real-time location data — to anyone willing to pay. In 2023, a Durham, North Carolina
            company called Near Intelligence was caught selling the location data of visitors to
            Planned Parenthood clinics, domestic violence shelters, and places of worship. There was
            no federal law that clearly prohibited it.
            <a href="#source-12" className="footnote-ref">[12]</a>
          </p>

          <p>
            In Brazil, that sale would violate the LGPD&apos;s prohibition on processing sensitive
            data without explicit consent. In Argentina, the data subject could invoke <em>habeas
            data</em> and demand judicial relief. In the United States, the most powerful response
            available was an FTC enforcement action under Section 5 of the Federal Trade Commission
            Act — a statute written in 1914 to address unfair business practices, not data privacy.
          </p>

          <p>
            The standard American excuse — that privacy regulation would stifle innovation — rings
            hollow when Brazil&apos;s tech sector is booming, Argentina&apos;s startup ecosystem
            is thriving, and the EU, operating under the world&apos;s strictest data protection regime,
            has not collapsed into economic irrelevance. Privacy law does not kill innovation. The
            absence of privacy law kills trust.
          </p>

          <p>
            The right to control your own data is not a luxury. In most of Latin America, it is the
            law. In the United States, it is a wish. That gap is not closing. It is widening. And
            every year Congress fails to act, the comparison gets harder to explain away.
          </p>

          <div className="sources">
            <h3>Sources</h3>
            <ol>
              <li id="source-1">
                Angelica Mari, <em>Facebook Fined in Brazil Over Data Privacy Violations</em>, ZDNet (2020).{" "}
                <a href="https://www.zdnet.com/article/facebook-fined-in-brazil-over-data-privacy-violations/" target="_blank" rel="noopener noreferrer">zdnet.com</a>
              </li>
              <li id="source-2">
                Cameron F. Kerry, <em>Why Congress Can&apos;t Pass a Privacy Law</em>, Brookings Institution (2023).{" "}
                <a href="https://www.brookings.edu/articles/the-american-data-privacy-and-protection-act/" target="_blank" rel="noopener noreferrer">brookings.edu</a>
              </li>
              <li id="source-3">
                UNCTAD, <em>Data Protection and Privacy Legislation Worldwide</em>, United Nations (2024).{" "}
                <a href="https://unctad.org/page/data-protection-and-privacy-legislation-worldwide" target="_blank" rel="noopener noreferrer">unctad.org</a>
              </li>
              <li id="source-4">
                IAPP, <em>Brazil&apos;s General Data Protection Law (LGPD)</em>, International Association of Privacy Professionals (2021).{" "}
                <a href="https://iapp.org/resources/article/brazilian-data-protection-law-lgpd-english-translation/" target="_blank" rel="noopener noreferrer">iapp.org</a>
              </li>
              <li id="source-5">
                ANPD, <em>ANPD Applies First Administrative Sanction Under LGPD</em>, Autoridade Nacional de Prote&ccedil;&atilde;o de Dados (2023).{" "}
                <a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noopener noreferrer">gov.br/anpd</a>
              </li>
              <li id="source-6">
                Constituci&oacute;n Nacional Argentina, Art. 43, <em>Habeas Data</em> (1994).{" "}
                <a href="https://www.congreso.gob.ar/constitucionNacional.php" target="_blank" rel="noopener noreferrer">congreso.gob.ar</a>
              </li>
              <li id="source-7">
                European Commission, <em>Adequacy Decisions — Argentina</em>, Data Protection (2003).{" "}
                <a href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en" target="_blank" rel="noopener noreferrer">commission.europa.eu</a>
              </li>
              <li id="source-8">
                INAI, <em>Ley Federal de Protecci&oacute;n de Datos Personales en Posesi&oacute;n de los Particulares</em> (2010).{" "}
                <a href="https://home.inai.org.mx/" target="_blank" rel="noopener noreferrer">inai.org.mx</a>
              </li>
              <li id="source-9">
                Jan-Albert Hootsen, <em>Mexico Abolishes Key Transparency and Privacy Body</em>, Committee to Protect Journalists (2024).{" "}
                <a href="https://cpj.org/2024/12/mexico-senate-approves-elimination-of-inai-transparency-institute/" target="_blank" rel="noopener noreferrer">cpj.org</a>
              </li>
              <li id="source-10">
                Federal Trade Commission, <em>Privacy and Data Security Update: 2023</em>, FTC (2024).{" "}
                <a href="https://www.ftc.gov/reports/privacy-data-security-update-2023" target="_blank" rel="noopener noreferrer">ftc.gov</a>
              </li>
              <li id="source-11">
                IAPP, <em>US State Privacy Legislation Tracker</em>, International Association of Privacy Professionals (2024).{" "}
                <a href="https://iapp.org/resources/article/us-state-privacy-legislation-tracker/" target="_blank" rel="noopener noreferrer">iapp.org</a>
              </li>
              <li id="source-12">
                Joseph Cox, <em>Data Broker Sold Location Data of People Visiting Planned Parenthood</em>, VICE Motherboard (2023).{" "}
                <a href="https://www.vice.com/en/article/near-intelligence-location-data-planned-parenthood/" target="_blank" rel="noopener noreferrer">vice.com</a>
              </li>
            </ol>
          </div>

        </div>
      </article>
    </main>
  );
}
