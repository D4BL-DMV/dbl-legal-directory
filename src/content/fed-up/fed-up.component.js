import React from 'react'
import Button from '../../components/button/button.component'
import H2 from '../../components/h2/h2.component'

const FEDUP = function(props) {
  return (
    <div>
      <H2>Want to Learn More?</H2>
      <div className="content panel light">
        <div className="inner">
          <p>
            
            Law4BlackLives DC seeks to eradicate white supremacy and 
            anti-Blackness by leveraging our collective skills and experiences 
            as lawyers, legal professionals, and Black people to support 
            Black-led community efforts in the struggle for liberation and 
            justice in metropolitan Washington, DC.
    
            Data for Black Lives is a movement of activists, organizers, and
            mathematicians committed to the mission of using data science to
            create concrete and measurable change in the lives of Black people.
          </p>

          </p>
          <Button href="https://d4bl.org/"> Learn More about D4BL </Button>
          <Button href="http://www.law4blacklivesdc.com/"> Learn More about L4BL DC </Button>
        </div>
      </div>
    </div>
  )
}

export default FEDUP
