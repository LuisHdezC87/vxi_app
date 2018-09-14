import React from "react"
import PropTypes from "prop-types"
import EmailIcon from 'images/social/socials_envelope.png'
import PhoneIcon from 'images/social/socials_mobile.png'
import ViberIcon from 'images/social/socials_viber.png'
import FacebookIcon from 'images/social/socials_facebook.png'
import InstagramIcon from 'images/social/socials_instagram.png'
import TwitterIcon from 'images/social/socials_twitter.png'

class VxiSocialInfo extends React.Component {

  onClickEmail = () => {
    window.location.href = "mailto:" + this.props.email;
  }

  onClickPhone = () => {
    window.location.href = "tel:" + this.props.phone;
  }

  onClickFacebook = () => {
    window.location.href = "https://www.facebook.com/VXIPH";
  }

  onClickInstagram = () => {
    window.location.href = "https://www.instagram.com/vxiph";
  }

  onClickTwitter = () => {
    window.location.href = "https://www.twitter.com/vxiph";
  }


  render () {
    return (
      <div className="vxi-contact-info-social">
        <div className="vxi-contact-info-social-email" onClick={ this.onClickEmail } >
          <img src={ EmailIcon } />{ this.props.email }
        </div>
        <div className="vxi-contact-info-social-phone" onClick={ this.onClickPhone } >
          <img src={ PhoneIcon } />
          <img src={ ViberIcon } />
          { this.props.phone }
        </div>
        <div className="vxi-contact-info-social-networks">
          <div className="vxi-contact-info-social-networks-facebook" onClick={ this.onClickFacebook } >
            <img src={ FacebookIcon } />
          </div>
           <div className="vxi-contact-info-social-networks-instagram" onClick={ this.onClickInstagram } >
            <img src={ InstagramIcon } />
          </div>
          <div className="vxi-contact-info-social-networks-twitter" onClick={ this.onClickTwitter } >
            <img src={ TwitterIcon } />
          </div>
        </div>
      </div>
    );
  }
}

VxiSocialInfo.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string
};
export default VxiSocialInfo
