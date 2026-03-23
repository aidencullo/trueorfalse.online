import { getArticle } from "@/data/articles";
import Link from "next/link";

export default function TheNonprofitThatAteTheWorldArticle() {
  const article = getArticle("the-nonprofit-that-ate-the-world")!;

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
            On the evening of November 17, 2023, Sam Altman sat in a conference room at OpenAI&apos;s
            San Francisco headquarters and learned he was fired. The board of the nonprofit that
            governed the most valuable AI company on Earth had voted to remove him — no press release,
            no transition plan, no warning. Within 72 hours, 95 percent of OpenAI&apos;s 770 employees
            had signed a letter threatening to follow him out the door. Five days later, he was back
            as CEO. The board that fired him was gone.
            <a href="#source-1" className="footnote-ref">[1]</a>
          </p>

          <p>
            It was the most dramatic corporate power struggle in Silicon Valley since Steve Jobs got
            bounced from Apple. But underneath the palace intrigue was a question nobody in the
            industry wanted to answer: what happens when the company building the most powerful
            technology in human history is accountable to no one?
          </p>

          <h2>The Charter</h2>

          <p>
            OpenAI was founded in December 2015 as a nonprofit research laboratory. The founding
            donors — Elon Musk, Sam Altman, Peter Thiel, Reid Hoffman, and others — pledged
            over <strong>$1 billion</strong> to build artificial general intelligence
            &ldquo;in a way that is most likely to benefit humanity as a whole, unconstrained
            by a need to generate financial return.&rdquo;
            <a href="#source-2" className="footnote-ref">[2]</a>{" "}
            The charter was explicit: if another organization got close to AGI first, OpenAI
            would help them rather than compete. The mission was safety, not market share.
          </p>

          <p>
            That idealism lasted about three years. By 2019, the economics of large-scale AI
            research had made the nonprofit model untenable. Training GPT-2 cost an estimated
            $50,000. GPT-3, released the following year, cost around <strong>$4.6 million</strong>.
            GPT-4, by most credible estimates, ran north of <strong>$100 million</strong>.
            <a href="#source-3" className="footnote-ref">[3]</a>{" "}
            Nonprofits don&apos;t raise that kind of capital. So OpenAI created a &ldquo;capped
            profit&rdquo; subsidiary — a for-profit shell that could attract investors while the
            nonprofit board retained ultimate control. The cap was set at 100x returns for early
            investors, a number that sounded modest until you did the math.
          </p>

          <h2>Microsoft Writes the Check</h2>

          <p>
            In 2019, Microsoft invested <strong>$1 billion</strong> in OpenAI&apos;s new
            for-profit arm. In January 2023, it came back with <strong>$10 billion more</strong>,
            in what Bloomberg called &ldquo;the largest investment in AI history.&rdquo;
            <a href="#source-4" className="footnote-ref">[4]</a>{" "}
            The deal gave Microsoft exclusive cloud-computing rights, a 49 percent profit share,
            and deep integration of OpenAI&apos;s models into every Microsoft product from
            Office to Azure to Bing. In exchange, OpenAI got the computing power it needed —
            and a partner whose commercial interests would become inseparable from its own.
          </p>

          <blockquote>
            <p>
              &ldquo;The mission of OpenAI is to ensure that artificial general intelligence
              benefits all of humanity.&rdquo;
              <br />— OpenAI Charter, 2018
            </p>
          </blockquote>

          <p>
            By the time ChatGPT launched in November 2022, the tension between that charter
            and the commercial reality was already grotesque. OpenAI was racing to ship products,
            signing enterprise deals, and building a consumer subscription business — all while
            nominally governed by a nonprofit board whose job was to slow things down if safety
            demanded it. The board had one real power: it could fire the CEO. In November 2023,
            it tried.
          </p>

          <h2>The Coup and the Counter-Coup</h2>

          <p>
            The board&apos;s stated reason for removing Altman was that he had not been
            &ldquo;consistently candid in his communications.&rdquo; The real dynamics were
            murkier. Board member Helen Toner had co-authored an academic paper that appeared
            to praise a competitor&apos;s safety practices over OpenAI&apos;s — and Altman
            had tried to get her removed for it. Chief Scientist Ilya Sutskever, who initially
            sided with the board, reversed himself within days and signed the employee letter
            demanding Altman&apos;s return.
            <a href="#source-5" className="footnote-ref">[5]</a>
          </p>

          <p>
            Microsoft CEO Satya Nadella made the stakes clear in a television interview the
            same weekend: if Altman didn&apos;t come back, Microsoft was prepared to hire him
            and anyone who wanted to follow.
            <a href="#source-6" className="footnote-ref">[6]</a>{" "}
            The nonprofit board, in theory the guardian of humanity&apos;s interests, had no
            leverage against a trillion-dollar company that had already written a $13 billion
            check. Altman returned. The board was reconstituted with members more aligned with
            the company&apos;s commercial direction — including Bret Taylor, the former
            Salesforce co-CEO, and Larry Summers, the former Treasury Secretary.
          </p>

          <h2>The Safety Exodus</h2>

          <p>
            The firing and rehiring of Altman accelerated a departure of safety-focused
            researchers that had been building for months. Ilya Sutskever, OpenAI&apos;s
            co-founder and chief scientist, left in May 2024 to start a new company focused
            on &ldquo;safe superintelligence.&rdquo;
            <a href="#source-7" className="footnote-ref">[7]</a>{" "}
            Jan Leike, co-lead of OpenAI&apos;s Superalignment team — the group tasked with
            ensuring future AI systems remain under human control — resigned the same month.
            His parting statement on X was blunt: &ldquo;Over the past years, safety culture
            and processes have taken a backseat to shiny products.&rdquo;
            <a href="#source-8" className="footnote-ref">[8]</a>
          </p>

          <p>
            The Superalignment team had been promised 20 percent of OpenAI&apos;s compute
            resources. According to Leike, it never received them. He and Sutskever had been
            the internal voices arguing that the company needed to slow down, that alignment
            research should precede capability research. With both of them gone, OpenAI&apos;s
            internal brake system effectively ceased to exist.
          </p>

          <h2>Musk v. Altman</h2>

          <p>
            In February 2024, Elon Musk filed a lawsuit against OpenAI and Sam Altman, alleging
            that the company had abandoned its founding nonprofit mission and become a
            &ldquo;closed-source de facto subsidiary of the largest technology company in
            the world.&rdquo;
            <a href="#source-9" className="footnote-ref">[9]</a>{" "}
            The complaint cited internal emails in which Altman and other founders discussed
            keeping OpenAI&apos;s research open and independent from corporate influence.
            Musk withdrew the suit in June, then refiled an expanded version in August,
            adding claims of fraud and racketeering.
          </p>

          <p>
            OpenAI responded by publishing its own batch of Musk&apos;s emails, which showed
            him proposing in 2018 that OpenAI merge with Tesla — with himself as CEO.
            <a href="#source-10" className="footnote-ref">[10]</a>{" "}
            The sideshow of two billionaires litigating their egos in federal court obscured
            the substance of Musk&apos;s complaint, which was genuine: OpenAI had promised
            to be an open, nonprofit research lab, and it had become a closed, for-profit
            company valued at over $150 billion.
          </p>

          <h2>The For-Profit Conversion</h2>

          <p>
            In late 2024, OpenAI announced plans to convert fully to a for-profit benefit
            corporation, eliminating the nonprofit&apos;s control over the company entirely.
            <a href="#source-11" className="footnote-ref">[11]</a>{" "}
            The nonprofit would remain as a separate entity, retaining a minority stake,
            but would lose its veto power over the company&apos;s direction. The capped-profit
            structure — the original compromise that was supposed to prevent investor interests
            from overriding safety — would be scrapped. Investors could now expect uncapped
            returns.
          </p>

          <p>
            The California Attorney General opened an inquiry into whether the conversion
            violated charitable trust law. Legal scholars questioned whether billions in
            donated computing resources and tax-advantaged research could simply be folded
            into a private company.
            <a href="#source-12" className="footnote-ref">[12]</a>{" "}
            OpenAI argued that the new structure was necessary to compete with Google,
            Anthropic, and xAI — the same argument it had made in 2019 when it created
            the capped-profit subsidiary, and would presumably make again whenever the
            next structural concession became convenient.
          </p>

          <h2>The Question Nobody Wants to Answer</h2>

          <p>
            Here is the trajectory: a nonprofit research lab, founded to ensure AGI benefits
            all of humanity, has become a company that answers to Microsoft, sovereign wealth
            funds, and venture capitalists expecting generational returns. Its safety team
            has been gutted. Its co-founders have scattered. Its charter is a historical
            document, not an operating principle.
          </p>

          <p>
            OpenAI is now building systems that it claims are on the path to artificial
            general intelligence — technology that, by its own admission, could pose
            existential risks. And the entity making the deployment decisions is no longer
            a nonprofit with a mandate to be cautious. It&apos;s a company with a fiduciary
            duty to be profitable.
          </p>

          <p>
            The nonprofit didn&apos;t fail because its mission was wrong. It failed because
            it was standing between enormously powerful technology and enormously powerful
            money, and no charter on Earth is strong enough to hold that line. OpenAI is
            proof of concept — not for artificial intelligence, but for the idea that safety
and profit cannot coexist in the same corporate structure when the stakes are
            high enough. The nonprofit ate the world. Then the world ate the nonprofit.
          </p>

          <div className="sources">
            <h3>Sources</h3>
            <ol>
              <li id="source-1">
                Cade Metz and Mike Isaac, <em>OpenAI&apos;s Board Fired Sam Altman. Then Came the Chaos.</em>, The New York Times (Nov. 2023).{" "}
                <a href="https://www.nytimes.com/2023/11/21/technology/openai-altman-board-fight.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-2">
                OpenAI, <em>Introducing OpenAI</em> (Dec. 2015).{" "}
                <a href="https://openai.com/blog/introducing-openai" target="_blank" rel="noopener noreferrer">openai.com</a>
              </li>
              <li id="source-3">
                Ars Technica, <em>GPT-4 Details Revealed: Training Cost Exceeds $100 Million</em> (Jul. 2023).{" "}
                <a href="https://arstechnica.com/information-technology/2023/07/gpt-4-details-revealed/" target="_blank" rel="noopener noreferrer">arstechnica.com</a>
              </li>
              <li id="source-4">
                Dina Bass, <em>Microsoft Invests $10 Billion in ChatGPT Maker OpenAI</em>, Bloomberg (Jan. 2023).{" "}
                <a href="https://www.bloomberg.com/news/articles/2023-01-23/microsoft-makes-multibillion-dollar-investment-in-openai" target="_blank" rel="noopener noreferrer">bloomberg.com</a>
              </li>
              <li id="source-5">
                Cade Metz et al., <em>Inside the Crisis at OpenAI</em>, The New York Times (Nov. 2023).{" "}
                <a href="https://www.nytimes.com/2023/11/22/technology/openai-sam-altman-crisis.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-6">
                CNBC, <em>Satya Nadella Says Microsoft Is Committed to OpenAI Partnership</em> (Nov. 2023).{" "}
                <a href="https://www.cnbc.com/2023/11/20/microsoft-ceo-nadella-says-committed-to-openai-partnership.html" target="_blank" rel="noopener noreferrer">cnbc.com</a>
              </li>
              <li id="source-7">
                Cade Metz, <em>Ilya Sutskever, OpenAI&apos;s Co-Founder, Leaves to Start New A.I. Company</em>, The New York Times (Jun. 2024).{" "}
                <a href="https://www.nytimes.com/2024/06/19/technology/ilya-sutskever-openai-new-company.html" target="_blank" rel="noopener noreferrer">nytimes.com</a>
              </li>
              <li id="source-8">
                Jan Leike, <em>Post on X (formerly Twitter)</em> (May 2024).{" "}
                <a href="https://x.com/janleike/status/1791498173226078376" target="_blank" rel="noopener noreferrer">x.com</a>
              </li>
              <li id="source-9">
                Elon Musk v. Sam Altman et al., <em>Complaint</em>, Superior Court of California, San Francisco (Feb. 2024).{" "}
                <a href="https://www.courthousenews.com/wp-content/uploads/2024/03/musk-openai-complaint-sf-superior.pdf" target="_blank" rel="noopener noreferrer">courthousenews.com</a>
              </li>
              <li id="source-10">
                OpenAI, <em>OpenAI and Elon Musk</em> (Mar. 2024).{" "}
                <a href="https://openai.com/blog/openai-elon-musk" target="_blank" rel="noopener noreferrer">openai.com</a>
              </li>
              <li id="source-11">
                Erin Woo and Katie Roof, <em>OpenAI Plans to Convert to For-Profit Company</em>, The Information (Sep. 2024).{" "}
                <a href="https://www.theinformation.com/articles/openai-plans-to-convert-to-for-profit-company" target="_blank" rel="noopener noreferrer">theinformation.com</a>
              </li>
              <li id="source-12">
                Brian Fung, <em>California AG Reviews OpenAI&apos;s Transition From Nonprofit</em>, CNN (Oct. 2024).{" "}
                <a href="https://www.cnn.com/2024/10/01/tech/california-ag-openai-nonprofit-review/index.html" target="_blank" rel="noopener noreferrer">cnn.com</a>
              </li>
            </ol>
          </div>

        </div>
      </article>
    </main>
  );
}
