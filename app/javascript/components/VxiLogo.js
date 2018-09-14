import React from "react"
import PropTypes from "prop-types"
import LogoImage from "images/logo.png"

class VxiLogo extends React.Component {

  onClickLogo = () => {
    location.reload(true);
    scroll(0,0);
  }

  render () {
    return (
      <div className="vxi-contact-info-logo" onClick={ this.onClickLogo } >
        <img src={ LogoImage } />
      </div>
    );
  }
}

export default VxiLogo
