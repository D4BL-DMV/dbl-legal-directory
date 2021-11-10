import React from 'react'
import CountUp from 'react-countup'
import H2 from '../h2/h2.component'

import './intro.scss'
import listings from '../../data/listings.json'

const Intro = () => (
  <div className="intro">
    <H2>
      Law for Black Lives DC
      <br />
      Legal Directory
    </H2>
    <p className="donation-value">
      <CountUp
        prefix=""
        delay={0.5}
        start={0}
        end={listings.json.length}
        separator=","
        duration={2.0}
        useEasing
      />
    </p>
    <p className="donation-subhead">
      organizations providing
      <br />
      free legal services in Washington D.C.
    </p>
    <p className="introduction">
      Learn about organizations and programs offering services for those in need
      of legal assistance who cannot afford it.
    </p>
  </div>
)

export default Intro
