import React, { Component } from 'react'
import arrow from '../../images/down-arrow.svg'

import './arrow.scss'

class Arrow extends Component {
  render() {
    return (
      <div className="arrow">
        <img src={arrow} alt="downward pointing arrow" />
      </div>
    )
  }
}

export default Arrow
