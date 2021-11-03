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
        <Section title="How do I use this? Who do I contact?">
           <p>
            At the top of the page, use the first drop down menu to search 
            for a topic of interest. The menu is called “Filter organization types…” 
            Examples: arrests, health care, housing, policing cases, worker’s rights.
          </p>
          <p>
            To get help from one of these organizations, call the listed 
            phone number or send an email.
          </p>
          <p>
            You can say something like, “Hi there. I saw your information on 
            the Law for black Lives DC Legal Directory. I need free legal 
            assistance for[name your topic]. How can I get help?”
          </p>
        </Section>
        <Section title="Is this completely free? What will it cost?">
          <p>
            All organizations offer free legal assistance. If you cannot afford to pay, 
            that’s okay! Every organization listed here provides free services.
          </p>
          <p>
            Down the road, some things may have a cost (example), but they will 
            NOT charge you without your consent. It is completely free to contact 
            them and ask for help. They can, will, and want to support you for free.
          </p>
        </Section>
        <Section title="My issue is not in this directory. What should I do?">
          <p>
          You can still get help. Try reaching out to  
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.dcbar.org/pro-bono/free-legal-help"
            >
              DC Pro Bono Center
            </a>{' '}
            . They offer general legal services and can also help you find someone 
            who specializes in your needs, for no cost.
          </p>
          <p>
            This page,  <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.dcbar.org/pro-bono/free-legal-help/help-for-individuals"
            >
              Help for individuals
            </a>{' '} 
            has free resources. You can also call the Legal Information Help Line at 202-626-3499. 
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
