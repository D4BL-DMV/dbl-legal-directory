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
            To get help from one of these organizations, call the  
            phone number or send an email.
          </p>
          <p>
            You can say something like, “Hi there. I saw your information on 
            the Law for black Lives DC Legal Directory. I need free legal 
            assistance for [name your topic]. How can I get help?”
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
          You can still get help. You can contact{' '} 
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.dcbar.org/pro-bono/free-legal-help"
            >
              DC Pro Bono Center
            </a>{'.'}
            They offer general legal services and can also help you find someone 
            who specializes in your needs, for no cost.
          </p>
          <p>
            This page,{' '}   
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.dcbar.org/pro-bono/free-legal-help/help-for-individuals"
            >
              Help for individuals
            </a>{' '} 
            has free resources. You can also call the Legal Information Help Line at 202-626-3499. 
          </p>         
        </Section>
        <Section title="I don’t live in Washington D.C. or the DMV area. How do I get help?">
          <p>
            We are glad you asked. You can still get help. You can reach out to 
            (links to organizations). They have a wide network of connections and 
            can help you find the support you need in your area for no cost. 
          </p>
        </Section>
        <Section title="Who built this and can I trust them??">
          <p>
            A team of volunteers from 
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.law4blacklives.org/"
            >
              Law For Black Lives
            </a>{' '}
            and
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://d4bl.org/"
            >
              Data For Black Lives (D4BL)
            </a>{' '}
            built this directory. Each organization in this directory is vetted by 
            Law For Black Lives before it is published here. Learn more about D4BL below. 
          </p>
        </Section>
        <Section title="Can I download a list of all the organizations listed here?">
          <p>
            Yes! You can access, download, or copy a list of the entire 
            directory at this Google spreadsheet: (Link to Legal Directory spreadsheet). 
            It is a living copy of this directory.
          </p>
        </Section>
        <Section title="How can I add a new organization to this directory?">
          <p>
            Anyone can suggest changes to this public directory. This is the
            direct link to the Google spreadsheet (link), a living copy of the 
            directory. Feel free to suggest changes. Our team can then 
            review and publish them.
          </p>
        </Section>
        <Section title="I want to help. How can I get involved?">
          <p>
            This legal directory was created and is maintained by a small team 
            of volunteers from Law For Black Lives And Data For Black Lives. Join 
            us! Come to one of our general body meetings or email us at (email) to connect!
          </p>
        </Section>
        <Section title="What improvements to this directory will I see?">
          <p>
            Our current priorities are:
          </p>
          <ul>
            <li>
              Confirm all information in this directory with each organization
            </li>
            <li>
              Partner with organizations to share this resource with those in need
            </li>
            <li>
              Make this website more accessible, starting with language access (Spanish) 
              and screen reader compatibility.
            </li>
          </ul>
        </Section>
        <Section title="Contact Us">
          <p>
            Do you have a question that isn’t answered yet? Ask us on this 
            Google Form: (need link) If it is a personal question, please leave 
            your contact info so we can get back to you privately.
          </p>
          <p>
              Have ideas or comments? Please feel free to leave a suggestion here: (need link)
          </p>
        </Section>
      </div>
    </div>
  </div>
)

export default FAQ
