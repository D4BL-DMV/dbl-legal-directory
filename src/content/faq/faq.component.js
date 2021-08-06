import React, { Component } from 'react'
import { Collapse } from 'react-collapse'
import H2 from '../../components/h2/h2.component'
import './faq.scss'

class Section extends Component {
  state = {
    isOpened: false
  }

  toggleCollapse = () => {
    this.setState(({ isOpened }) => ({ isOpened: !isOpened }))
  }

  render() {
    const { title, children } = this.props
    const { isOpened } = this.state
    return (
      <div className="collapse-container">
        <h3
          className={isOpened ? 'opened' : 'closed'}
          onClick={this.toggleCollapse}
        >
          {title}
        </h3>
        <Collapse isOpened={isOpened}>{children}</Collapse>
      </div>
    )
  }
}

const FAQ = () => (
  <div className="faq-wrapper">
    <H2>FAQ</H2>
    <div className="content panel light faq">
      <div className="inner">
        <Section title="How do I get help through one of these organizations?">
          <p>
            Our politicians should work for us, represent us, and be accountable
            to us – the ordinary working people of Assembly District 15. Buffy
            benefits from over a million dollars spent on AD15 by the wealthiest
            0.1% of Americans, including Trump cronies and Republicans, pitching
            in to influence this race from all across the country. Some of these
            ultrawealthy donors contribute to PACs and independent expenditure
            committees that boost Buffy’s candidacy but aren’t supposed to
            coordinate with her campaign; others give direct donations to her
            campaign (and plenty do both). She says she’s not accountable to
            them, but rich people know that money talks, and politicians listen.
          </p>
          <p>
            As socialists, we believe society should be run democratically and
            for the benefit of people, not profit. No one should face
            oppression, state violence, or go without basic necessities like
            housing, healthcare, education, and a good job.
          </p>
          <p>
            But the mega-rich don’t agree. They are engaged in a long-running,
            well-funded, and ruthless campaign to take ever more for themselves
            and leave crumbs to the rest of us. They don’t want to pay taxes,
            pay the workers that made them rich, or pay for the damage their
            profit-obsessed companies do to the world.
          </p>
          <p>
            To increase their profits, corporations and the mega-rich must wage
            war on working people. That is why they:
          </p>
          <ul>
            <li>
              Buy elections at every level of the government through unlimited
              donations to PACs,
            </li>
            <li>
              Influence policy and media by funding think tanks and foundations
              to advance their agenda,
            </li>
            <li>
              Fight tooth-and-nail against anything that would transfer
              resources, power, and security to working people, like labor
              protections, the expansion of the social safety net, and big
              reforms like Medicare for All, universal rent control, and
              universal free college tuition.
            </li>
          </ul>
          <p>
            This is not just about Buffy. Big donors pool their money and offer
            it to thousands of candidates like her across the country, at every
            level of government. This is how they block legislation that favors
            working people, while passing policies that help the rich, like tax
            cuts, corporate giveaways, anti-union legislation, and harmful
            deregulation. This is enabled by the <em>Citizens United</em>{' '}
            decision that permits unlimited political spending under the bizarre
            logic that money is “free speech.”
          </p>
          <p>
            We have the resources to fix the many serious problems we face, but
            we won’t fix them by continuing to elect politicians who strike a
            progressive pose while benefitting from massive spending by the
            megarich.
          </p>
        </Section>
        <Section title="How do I get help for an issue not covered by any of these organizations?">
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.jovanka.org/"
            >
              Jovanka Beckles
            </a>{' '}
            is a corporate-free candidate and a democratic socialist with a long
            history of fighting and winning for working people in the East Bay.
            She’s served on the Richmond City Council and is a leader in the
            Richmond Progressive Alliance (RPA). On the Richmond City Council,
            Jovanka and her colleagues from the RPA took on Chevron and its
            millions and won victories like a $15 minimum wage, citywide rent
            control, and banning the box for fairness in employment.
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.jovanka.org/platform"
            >
              Jovanka’s platform
            </a>{' '}
            is a bold vision for a California that works for the many, not the
            few. She knows that in a state with a $2.7 trillion GDP, we have
            already created more than enough wealth and productive capacity to
            provide everyone with a stable, safe, and dignified life.
          </p>
          <p>
            Jovanka will{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.jovanka.org/healthcare"
            >
              fight for a single-payer Medicare for All system
            </a>{' '}
            that covers healthcare for everyone in California. She’ll work to
            end the anti-tenant Costa-Hawkins law and implement{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.jovanka.org/housing"
            >
              statewide rent control
            </a>
            . Jovanka has a{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.jovanka.org/education"
            >
              plan to provide high quality tuition free public education for all
              Californians from preschool to college
            </a>{' '}
            and a moratorium on charter schools. She{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.jovanka.org/labor"
            >
              supports labor
            </a>{' '}
            with a $20 minimum wage and stronger protections for workers.
          </p>
          <p>
            Because Jovanka doesn’t have Buffy’s millions, she depends on
            ordinary people like us to talk to our neighbors, friends, and
            coworkers about sending her to Sacramento. Come to one of East Bay
            DSA’s{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.eastbaydsa.org/events"
            >
              canvasses or phonebanks
            </a>{' '}
            between now and November! No experience necessary to join a canvass
            – we’ll train you and you’ll have a good time!
          </p>
        </Section>
        <Section title="How can I get a new organization added to this list?">
          <p>
            Buffy’s campaign is awash in corporate cash. That includes money
            from the bank accounts of:
          </p>
          <ul>
            <li>
              Corporate billionaires (like LinkedIn co-founder Reid Hoffman)
            </li>
            <li>
              Corporate employees who make concerted donations (like Ron Conway
              and other employees of{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://svangel.com/"
              >
                SV Angel
              </a>
              )
            </li>
            <li>
              Corporate trade associations (like the{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://votersedge.org/en/ca/ballot/election/area/69/contests/contest/16670/candidate/138256?id=statewide-69-ca"
              >
                California Association of Realtors
              </a>
              )
            </li>
            <li>
              IEs funded with corporate cash (like “Govern for California”)
            </li>
          </ul>
          <p>
            That’s why the audience at the October 2 League of Women Voters{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://m.youtube.com/watch?v=8x4khd0fWy8"
            >
              debate
            </a>{' '}
            broke out in{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ebcitizen.com/2018/10/08/berkeley-audience-laughed-when-buffy-wicks-declared-her-campaign-corporate-free/"
            >
              laughter
            </a>{' '}
            when Buffy said “Jovanka and I are, I think, two of very few
            candidates in the state of California who have chosen to take{' '}
            <strong>no corporate money</strong> in this race.”
          </p>
          <p>
            What Buffy actually means is that she hasn’t taken money{' '}
            <em>directly</em> from the bank accounts of corporations. Her
            website makes a far narrower claim: “I have not accepted
            contributions <strong>from corporations</strong> in our campaign.”
          </p>
          <p>
            That’s a dodge—as{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.theatlantic.com/politics/archive/2018/08/why-so-many-democratic-candidates-are-ditching-corporate-pacs/568267/"
            >
              The Atlantic
            </a>{' '}
            explains, “more of a political maneuver than anything else.” Like
            many corporate Democrats who have begun rejecting checks from
            corporations and their PACs, Buffy isn’t “actually rejecting
            corporations’ <em>resources</em>
            ”&mdash;as this website illustrates in detail.
          </p>

          <p>
            We don't think it matters much whether a donation comes from a
            corporation’s checking account or its CEO's personal bank account.
            We're concerned about the billionaires spending big to change the
            outcome of our elections, and about what policies&mdash;anti-worker,
            anti-tenant, anti-patient or anti-student&mdash;they hope Buffy will
            support in their interests.
          </p>
        </Section>
        <Section title="Who compiled all this information?">
          <p>
            It’s all public record. For individual contributions, we went to the
            California Secretary of State’s{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://powersearch.sos.ca.gov/"
            >
              Power Search
            </a>{' '}
            site. Then we clicked on “Campaign Finance” and typed “Buffy Wicks”
            into the search box. That pulled up a list of all of the donors from
            this election, which we then downloaded as a spreadsheet.
          </p>
          <p>
            For independent expenditures, we again went to Power Search, and
            clicked on (you guessed it) “Independent Expenditures.” That let us
            search for every PAC that’s spent to support the campaign and how
            much they’ve spent so far.
          </p>
          <p>
            To see who’s donated to Govern for California and other PACs in the
            race, we headed over to Cal-Access and looked for the PAC names
            under “Committees, Parties, Major Donors &amp; Slate Mailers.” That
            generated a big list of donors and dollar amounts.
          </p>
          <p>
            Finally, all the news stories and delicious details were revealed
            through humble Google searches. That’s it!
          </p>
        </Section>
        <Section title="I don't live in Washington D.C. How can I get help?">
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://findyourrep.legislature.ca.gov/"
            >
              Click here
            </a>{' '}
            to find out! Assembly District 15 covers parts of Alameda (Albany,
            Berkeley, Emeryville, Piedmont, parts of Oakland) and Contra Costa
            (El Cerrito, Hercules, Pinole, Richmond, San Pablo, El Sobrante, and
            Kensington) counties.
          </p>
        </Section>
      </div>
    </div>
  </div>
)

export default FAQ
