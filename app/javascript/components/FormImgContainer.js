import React from "react"
import PropTypes from "prop-types"
import LogoImage from "images/vxi-logo.png"
import VxiForm from "./VxiForm"

class FormImgContainer extends React.Component {
  
  state = {
     imgUrl: this.props.imgs[0],
     imgNumber: 0
  }

  componentWillMount() {
     this.timer = null;
  }

  componentDidMount() {
    this.timer = setTimeout( () => { this.onChangeImg( this.props.imgs ) }, 8000);
  }
  
  onChangeImg = ( imgs ) => {
    const nextImg = this.getNextImgNumber( imgs, this.state.imgNumber );
    const imgUrl = imgs[nextImg];    
    this.setState({ imgUrl: imgUrl, imgNumber: nextImg });
    this.timer = setTimeout(() => { this.onChangeImg( this.props.imgs ) }, 8000);
  }

  getNextImgNumber = ( imgs, imgNumber ) => {
    const nextNumber = imgNumber + 1;
    if ( imgs.length > ( nextNumber ) ) {
      return nextNumber;
    }
    else {
      return 0;
    }
  }

  onClickLogo = () => {
    alert('logo clicked');
  }

  facebookLogin = () => {
    alert('facebookLogin clicked');
  }

  render () {
    this.props;
    return (
      <div className={ this.state.imgUrl } id="main-div">
        <div className='vxi-logo-container' onClick={ this.onClickLogo } >
          <img src={ LogoImage } />
        </div>
        <div className="facebook-btn">
          <input
            type='button'
            value="test"
            onClick={ this.facebookLogin }
          />
        </div>
        <VxiForm 
          contact={ this.props.contact } 
          sites={ this.props.sites }
          edu_levels={ this.props.edu_levels } 
          job_experience={ this.props.experience }
          postitions={ this.props.positions }
        />
      </div>
    );
  }
}


export default FormImgContainer
