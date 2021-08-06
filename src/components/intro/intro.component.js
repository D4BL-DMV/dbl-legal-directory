import React from 'react'
import CountUp from 'react-countup'
import H2 from '../h2/h2.component'
import './intro.scss'

const Intro = () => (
  <div className="intro">
    <H2>
      D4BL
      <br />
      Legal Directory
    </H2>
    <p className="donation-value">
      <CountUp
        prefix=""
        delay={0.5}
        start={0}
        end={42}
        separator=","
        duration={2.5}
        useEasing
      />
    </p>
    <p className="donation-subhead">
      organizations providing
      <br />
      free legal services
    </p>
    <p className="introduction">
      Learn about organizations and programs offering services for those in need
      of legal assistance who cannot afford it.
    </p>
  </div>
)

export default Intro
