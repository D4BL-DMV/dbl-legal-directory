import React from 'react'
import Button from '../../components/button/button.component'
import H2 from '../../components/h2/h2.component'

export default function(props) {
  return (
    <div>
      <H2>Want to Learn More?</H2>
      <div className="content panel light">
        <div className="inner">
          <p>
            Data for Black Lives is a movement of activists, organizers, and
            mathematicians committed to the mission of using data science to
            create concrete and measurable change in the lives of Black people.
            Since the advent of computing, big data and algorithms have
            penetrated virtually every aspect of our social and economic lives.
            These new data systems have tremendous potential to empower
            communities of color. Tools like statistical modeling, data
            visualization, and crowd-sourcing, in the right hands, are powerful
            instruments for fighting bias, building progressive movements, and
            promoting civic engagement.
          </p>
          <p>
            But history tells a different story, one in which data is too often
            wielded as an instrument of oppression, reinforcing inequality and
            perpetuating injustice. Redlining was a data-driven enterprise that
            resulted in the systematic exclusion of Black communities from key
            financial services. More recent trends like predictive policing,
            risk-based sentencing, and predatory lending are troubling
            variations on the same theme. Today, discrimination is a high-tech
            enterprise.
          </p>
          <Button href="https://d4bl.org/events.html"> JOIN US </Button>
        </div>
      </div>
    </div>
  )
}
