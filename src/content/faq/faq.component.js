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
            At the top of the page, use the first drop down menu to search for a
            topic of interest. The menu is called “Search by services…” Examples:
            arrests, health care, housing, policing cases, worker’s rights.
          </p>
          <p>
            To get help from one of these organizations, call the phone number
            or send an email.
          </p>
          <p>
            You can say something like, “Hi there. I saw your information on the
            Law for Black Lives DC Legal Directory. I need free legal assistance
            for [name your topic]. How can I get help?”
          </p>
        </Section>
        <Section title="Is this completely free? What will it cost?">
          <p>
            If you cannot afford to pay, that’s okay! All organizations listed
            here offer free legal assistance.
          </p>
          <p>
            Down the road, some things may have a cost, but they will NOT charge
            you without your consent. It is completely free to contact them and
            ask for help. They can, will, and want to support you for free.
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
            </a>
            {'. '}
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
            has free resources. You can also call the Legal Information Help
            Line at 202-626-3499.
          </p>
        </Section>
        <Section title="I don’t live in Washington D.C. or the DMV area. How do I get help?">
          <p>
            We are glad you asked. You can still get help. You can reach out to
            the{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.nlg.org/"
            >
              National Lawyers Guild
            </a>
            {', '}
            or the{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aclu.org/"
            >
              American Civil Liberties Union (ACLU)
            </a>
            {'.'}
            They have a wide network of connections and can help you find the
            support you need in your area for no cost.
          </p>
        </Section>
        <Section title="Who built this and can I trust them?">
          <p>
            A team of volunteers from{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.law4blacklivesdc.com/"
            >
              Law For Black Lives DC (L4BL DC)
            </a>{' '}
            and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://d4bl.org/"
            >
              Data For Black Lives DMV (D4BL)
            </a>{' '}
            built this directory. Each organization in this directory is vetted
            by Law For Black Lives before it is published here. Learn more about
            L4BL DC and D4BL below.
          </p>
        </Section>
        <Section title="Can I download a list of all the organizations listed here?">
          <p>
            Yes! You can access, download, or copy a list of the entire
            directory from this{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/spreadsheets/d/17XOrH-jEkFx9AJyksXgM61GVSAUv-qYvAR1sjz_JcKE/edit?usp=sharing"
            >
              Google spreadsheet
            </a>
            {'. '}
            It is a living copy of this directory.
          </p>
        </Section>
        <Section title="How can I add a new organization to this directory?">
          <p>
            Anyone can suggest changes to this public directory. This is the
            direct link to the{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/spreadsheets/d/17XOrH-jEkFx9AJyksXgM61GVSAUv-qYvAR1sjz_JcKE/edit?usp=sharing"
            >
              Google spreadsheet
            </a>
            {', '}a living copy of the directory. Feel free to suggest changes
            by leaving a comment directly in the sheet. Our team can then review
            and publish them.
          </p>
        </Section>
        <Section title="I want to help. How can I get involved?">
          <p>
            This legal directory was created and is maintained by a small team
            of volunteers from Law For Black Lives DC And Data For Black Lives
            DMV. Join us! Come to one of our general body meetings or email us
            at <b>info@law4blacklivesdc.com</b> or <b>dmv.hub@d4bl.org</b> to
            connect!
          </p>
        </Section>
        <Section title="What improvements to this directory will I see?">
          <p>Our current priorities are:</p>
          <ul>
            <li>
              Confirm all information in this directory with each organization
            </li>
            <li>
              Partner with organizations to share this resource with those in
              need
            </li>
            <li>
              Make this website more accessible, starting with language access
              (Spanish) and screen reader compatibility
            </li>
          </ul>
        </Section>
        <Section title="Contact Us">
          <p>
            Do you have a question that isn’t answered yet? Email us at at <b>info@law4blacklivesdc.com</b> or <b>dmv.hub@d4bl.org</b>!
          </p>
          <p>
            Have ideas or comments? Please feel free to email us with your suggestions!
          </p>
        </Section>
      </div>
    </div>
  </div>
)

export default FAQ
