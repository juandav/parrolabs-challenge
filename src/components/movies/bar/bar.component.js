import React from 'react'
import { Link } from 'react-router-dom'
import ParrolabsLogo from 'assets/images/logo2.svg'

const Bar = _props => (
  <div className="bar">
    <figure className="bar__brand">
      <Link to="/">
        <img src={ParrolabsLogo} alt="parrolabs" className="bar__logo" />
      </Link>
    </figure>
  </div>
)

export default Bar