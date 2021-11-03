import React, { Component } from 'react'

import SocialLinks from '../social-links/social-links.component'
import logo from '../../images/logo.png'

import './header.scss'

class Header extends Component {
  render() {
    return (
      <div className="header__wrapper">
        <div className="header">
          <header>
            <div className="header__social-links">
              <SocialLinks links={this.props.socialLinks} />
            </div>
            <a href="/">
              <img
                className="header__logo"
                src={logo}
                alt="d4bl legal directory"
              />
            </a>
          </header>
        </div>
      </div>
    )
  }
}

export default Header
