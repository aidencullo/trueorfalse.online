import { getArticle } from "@/data/articles";
import Link from "next/link";


export default function TheAlgorithmAtTheBorderArticle() {
  const article = getArticle("the-algorithm-at-the-border")!;

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
            Somewhere in a windowless office in Burlington, Virginia, a Palantir analyst
            clicks through a dashboard that maps the daily movements of a 34-year-old
            Guatemalan woman living in Denver. She drives to work at 6:40 a.m. She drops
            her daughter at school at 7:55. She buys groceries at King Soopers on Thursdays.
            The analyst knows all of this not because anyone followed her, but because her
            cell phone did — and because a data broker sold the coordinates to Immigration
            and Customs Enforcement for a price that wouldn&apos;t cover her monthly rent.
            <a href="#source-1" className="footnote-ref">[1]</a>
          </p>

          <p>
            This is what immigration enforcement looks like now. Not agents kicking in doors.
            Not checkpoints on highways. An algorithm, fed by commercial data pipelines that
            treat every person in America — citizen or not — as a product to be tracked,
            scored, and sold.
          </p>

          <h2>Palantir&apos;s Golden Contract</h2>

          <p>
            Peter Thiel&apos;s Palantir Technologies has been ICE&apos;s most important
            technology partner for the better part of a decade. The company&apos;s Investigative
            Case Management (ICM) system — built under contracts now worth over{" "}
            <strong>$200 million</strong> — serves as the central nervous system of ICE&apos;s
            enforcement operations. ICM pulls data from more than a dozen federal agencies,
            including the FBI, the Drug Enforcement Administration, and the State Department,
            and fuses it with commercial records into a single searchable interface.
            <a href="#source-2" className="footnote-ref">[2]</a>
          </p>

          <p>
            What makes ICM dangerous isn&apos;t just its scope — it&apos;s its granularity.
            Agents can map connections between people, addresses, phone numbers, vehicles,
            and financial accounts in seconds. A 2019 investigation by The Intercept revealed
            that ICM was being used to track the <strong>sponsors</strong> of unaccompanied
            migrant children — the relatives who volunteer to house kids released from
            government custody. After ICE started running sponsors through Palantir&apos;s
            system, referrals collapsed. Families stopped coming forward. Children stayed
            locked up longer.
            <a href="#source-3" className="footnote-ref">[3]</a>
          </p>

          <blockquote>
            <p>
              &ldquo;Palantir didn&apos;t just give ICE a tool. They gave ICE an
              architecture — one that turns every interaction with the government into
              a potential deportation trigger.&rdquo;
              <br />— Julie Mao, Just Futures Law
            </p>
          </blockquote>

          <p>
            In 2019, when internal pressure mounted at Palantir over the ICE contracts,
            CEO Alex Karp responded with a letter to shareholders: the company would not
            walk away from government work. &ldquo;We have chosen sides,&rdquo; he wrote.
            <a href="#source-4" className="footnote-ref">[4]</a>{" "}
            Palantir renewed its ICE contract in 2022. Its stock price has tripled since then.
          </p>

          <h2>Your Phone Is an Informant</h2>

          <p>
            The Fourth Amendment says the government needs a warrant to track your movements.
            But there&apos;s a workaround: buy the data instead. ICE has spent millions
            purchasing cell phone location data from commercial brokers like Venntel (now
            Gravy Analytics) and Babel Street, which harvest GPS coordinates from ordinary
            smartphone apps — weather apps, games, prayer apps, coupon clippers — and sell
            them in bulk to federal agencies.
            <a href="#source-5" className="footnote-ref">[5]</a>
          </p>

          <p>
            A 2020 Wall Street Journal investigation found that Venntel&apos;s data could
            track individual phones from Mexican border towns into the U.S. interior, providing
            ICE with a de facto surveillance network that no court had authorized.
            <a href="#source-6" className="footnote-ref">[6]</a>{" "}
            The data isn&apos;t technically &ldquo;identified&rdquo; — it&apos;s tied to
            advertising IDs rather than names — but researchers have shown repeatedly that
            re-identification is trivial. A phone that sleeps at the same address every night
            and commutes to the same workplace every morning is not anonymous. It is a file.
          </p>

          <p>
            In 2023, a federal court ruled that the Department of Homeland Security&apos;s
            warrantless purchase of location data likely violated the Fourth Amendment. DHS
            appealed. The purchases continued.
            <a href="#source-7" className="footnote-ref">[7]</a>
          </p>

          <h2>The Social Media Dragnet</h2>

          <p>
            Since 2017, the State Department has required most visa applicants to hand over
            five years of social media handles.
            <a href="#source-8" className="footnote-ref">[8]</a>{" "}
            But ICE goes further. The agency contracts with firms like Giant Oak and Babel
            Street to monitor the social media activity of immigrants already inside the country —
            scanning posts, connections, and sentiment for signals of &ldquo;derogatory&rdquo;
            information.
          </p>

          <p>
            Giant Oak&apos;s GOST platform, used by ICE since at least 2020, applies machine
            learning to social media profiles and public records to generate risk assessments.
            The Brennan Center for Justice obtained documents showing that these assessments
            influenced decisions about who to detain, who to release, and who to prioritize
            for removal — with no transparency about how the algorithm weighted its inputs.
            <a href="#source-9" className="footnote-ref">[9]</a>
          </p>

          <p>
            A post in Arabic. A connection to someone who attended a protest. A check-in near
            a mosque. In the world of algorithmic immigration enforcement, any data point can
            become a deportation risk factor — and the person flagged will never know which one
            tipped the scale.
          </p>

          <h2>The Sanctuary Illusion</h2>

          <p>
            More than 200 cities and counties in the United States have adopted sanctuary
            policies — refusing to honor ICE detainers, limiting cooperation with federal
            immigration agents, or restricting local police from asking about immigration
            status. The policies were designed to build trust between immigrant communities
            and local government. But the data broker economy has made them largely symbolic.
            <a href="#source-10" className="footnote-ref">[10]</a>
          </p>

          <p>
            When an undocumented resident in a sanctuary city signs a lease, opens a utility
            account, registers a car, or enrolls a child in school, those records flow into
            commercial databases that ICE can query without ever contacting the city. A Georgetown
            Law Center on Privacy &amp; Technology report found that ICE had accessed driver&apos;s
            license databases in states that specifically granted licenses to undocumented
            immigrants — using the very ID programs designed to bring people out of the shadows
            to push them back in.
            <a href="#source-11" className="footnote-ref">[11]</a>
          </p>

          <blockquote>
            <p>
              &ldquo;Sanctuary policies protect against one kind of data sharing — the direct
              kind, where a police officer calls ICE. They do nothing about the indirect kind,
              where a data broker sells your utility records to a federal contractor who feeds
              them into a deportation algorithm. That&apos;s the gap the entire system runs
              through.&rdquo;
              <br />— Nina Wang, Georgetown Law Center on Privacy &amp; Technology
            </p>
          </blockquote>

          <h2>The Machine Has No Off Switch</h2>

          <p>
            What makes this system so durable is that it doesn&apos;t depend on any single
            policy or administration. The data broker contracts survive changes in the White
            House. The Palantir infrastructure is embedded too deeply to rip out. The commercial
            surveillance economy that feeds it all operates beyond the reach of immigration
            reform because it wasn&apos;t built for immigration — it was built to sell ads,
            and immigration enforcement just happens to be a paying customer.
          </p>

          <p>
            Congress has introduced bills to regulate data brokers — the Fourth Amendment Is
            Not For Sale Act passed the House in 2024 but stalled in the Senate.
            <a href="#source-12" className="footnote-ref">[12]</a>{" "}
            Until something like it becomes law, ICE will keep buying what the Constitution
            says it can&apos;t collect. The algorithm doesn&apos;t need a warrant. It needs
            a purchase order.
          </p>

          <p>
            The woman in Denver is still driving to work at 6:40 a.m. Her phone is still
            broadcasting. Somewhere in Burlington, the dashboard is still updating.
          </p>

          <div className="sources">
            <h3>Sources</h3>
            <ol>
              <li id="source-1">
                Byron Tau and Michelle Hackman, <em>Federal Agencies Use Cellphone Location Data for Immigration Enforcement</em>, The Wall Street Journal (Feb. 2020).{" "}
                <a href="https://www.wsj.com/articles/federal-agencies-use-cellphone-location-data-for-immigration-enforcement-11581078600" target="_blank" rel="noopener noreferrer">wsj.com</a>
              </li>
              <li id="source-2">
                Sam Biddle, <em>Palantir Played Key Role in Arresting Families of Undocumented Children</em>, The Intercept (May 2019).{" "}
                <a href="https://theintercept.com/2019/05/02/peter-thiel-palantir-ice-contract/" target="_blank" rel="noopener noreferrer">theintercept.com</a>
              </li>
              <li id="source-3">
                Lomi Kriel, <em>ICE Used Sponsor Data to Arrest Immigrant Families</em>, Houston Chronicle (Dec. 2018).{" "}
                <a href="https://www.houstonchronicle.com/news/houston-texas/houston/article/ICE-detained-sponsors-unaccompanied-minors-13469916.php" target="_blank" rel="noopener noreferrer">houstonchronicle.com</a>
              </li>
              <li id="source-4">
                Alex Karp, <em>Letter to Shareholders</em>, Palantir Technologies S-1 Filing, SEC (Aug. 2020).{" "}
                <a href="https://www.sec.gov/Archives/edgar/data/1321655/000119312520230013/d904406ds1.htm" target="_blank" rel="noopener noreferrer">sec.gov</a>
              </li>
              <li id="source-5">
                Joseph Cox, <em>How the U.S. Military Buys Location Data from Ordinary Apps</em>, VICE Motherboard (Nov. 2020).{" "}
                <a href="https://www.vice.com/en/article/jgqm5x/us-military-location-data-xmode-locate-x" target="_blank" rel="noopener noreferrer">vice.com</a>
              </li>
              <li id="source-6">
                Byron Tau and Dustin Volz, <em>Government Tracking How People Move Around in Pandemic</em>, The Wall Street Journal (Mar. 2020).{" "}
                <a href="https://www.wsj.com/articles/government-tracking-how-people-move-around-in-coronavirus-pandemic-11585393202" target="_blank" rel="noopener noreferrer">wsj.com</a>
              </li>
              <li id="source-7">
                ACLU, <em>Federal Court Rules DHS Warrantless Searches of Phone Data Likely Unconstitutional</em> (Sept. 2023).{" "}
                <a href="https://www.aclu.org/press-releases/federal-court-rules-dhs-bulk-surveillance-likely-violates-constitution" target="_blank" rel="noopener noreferrer">aclu.org</a>
              </li>
              <li id="source-8">
                U.S. Department of State, <em>Social Media Collection</em>, Federal Register Notice (May 2019).{" "}
                <a href="https://www.federalregister.gov/documents/2019/05/31/2019-11367/agency-information-collection-activities-revision-of-a-currently-approved-collection" target="_blank" rel="noopener noreferrer">federalregister.gov</a>
              </li>
              <li id="source-9">
                Brennan Center for Justice, <em>Social Media Monitoring by DHS</em> (May 2022).{" "}
                <a href="https://www.brennancenter.org/our-work/research-reports/social-media-monitoring" target="_blank" rel="noopener noreferrer">brennancenter.org</a>
              </li>
              <li id="source-10">
                Tom K. Wong, <em>The Politics of Immigration: Partisanship, Demographic Change, and American National Identity</em>, Oxford University Press (2017).{" "}
                <a href="https://global.oup.com/academic/product/the-politics-of-immigration-9780190235307" target="_blank" rel="noopener noreferrer">oup.com</a>
              </li>
              <li id="source-11">
                Georgetown Law Center on Privacy &amp; Technology, <em>American Dragnet: Data-Driven Deportation in the 21st Century</em> (May 2022).{" "}
                <a href="https://americandragnet.org/" target="_blank" rel="noopener noreferrer">americandragnet.org</a>
              </li>
              <li id="source-12">
                U.S. House of Representatives, <em>H.R. 4639 — Fourth Amendment Is Not For Sale Act</em>, 118th Congress (2024).{" "}
                <a href="https://www.congress.gov/bill/118th-congress/house-bill/4639" target="_blank" rel="noopener noreferrer">congress.gov</a>
              </li>
            </ol>
          </div>

        </div>
      </article>
    </main>
  );
}
