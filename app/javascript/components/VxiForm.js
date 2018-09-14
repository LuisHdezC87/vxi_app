import React from "react"
import PropTypes from "prop-types"
import Combobox from "./Combobox"

class VxiForm extends React.Component {

  state = {
    fields: {
      first_name: '',
      last_name: '',
      email: '',
      contact_number: ''
    },
    errors: {
      first_name: '',
      last_name: '',
      email: '',
      contact_number: ''
    }
  }

  onChangeText = ( evt ) => {
    const fields = this.state.fields;
    fields[ evt.target.name ] = evt.target.value;
    this.setState( { fields: fields } );
  }

  isDataOk = () => {
    let ok = true;
    let errors = {};
    const keys = Object.keys( this.state.fields );
    for (const key of keys) {
      if ( this.state.fields[key] === '' ) {
        errors[key] = 'The field is required.';
        ok = false;
      }
      else {
        if ( key === 'contact_number' && this.state.fields[key].length < 8 ){
          errors[key] = 'The telephone number is invalid.';
          ok = false;
        } else {
          errors[key] = '';
        }
      }
    }
    if ( !ok ) {
      this.setState({ errors: errors });
    }
    return ok;
  }

  onSubmitForm = () => {
    if ( this.isDataOk() ) {
      const token = document.getElementsByName('csrf-token')[0].content;
      $.ajax({
        url: '/contacts',
        headers: {
          'Content-Type': 'application/json',
          'X_CSRF_TOKEN': token
        },
        dataType: 'json',
        type: 'POST',
        data: this.getContactInfo(),
        success: (data) => {
          this.clearData();
        } 
      });
      alert('data has been sent');
    }
  }

  clearData = () => {
    const fields = {
      first_name: '',
      last_name: '',
      email: '',
      contact_number: null
    }
    this.setState({ fields: fields });
  }

  getContactInfo = () => {
    return JSON.stringify({
      contact: {
        first_name: this.state.fields.first_name,
        last_name: this.state.fields.last_name,
        email: this.state.fields.email,
        contact_number: this.state.fields.contact_number
      }
    });
  }

  facebookLogin = () => {
    alert('gem devise and onmiauth installed propertly, only missing javascript call to the onmiauth helper method');
  }

  render () {
    const firstName = this.state.errors.first_name.length == 0 ? 'first-error-hidden' : 'first-error-show';
    const lastName = this.state.errors.last_name.length == 0 ? 'last-error-hidden' : 'last-error-show';
    const email = this.state.errors.email.length == 0 ? 'email-error-hidden' : 'email-error-show';
    const contactNum = this.state.errors.contact_number.length == 0 ? 'contact-error-hidden' : 'contact-error-show';

    return (
      <div className="vxi-form-container">
        <div className="facebook-btn" onClick={ this.facebookLogin }>
          Sign Up with Facebook
        </div>
        <div className="fill-up-form">
          Or fill up this form
        </div>
        <div className="two-column-form-container">
          <div className="single-column">
            <div className="label-form-container">
              First Name*
            </div>  
            <input
              type="text"
              name="first_name"
              value={ this.state.fields.first_name }
              onChange={ this.onChangeText }
            />
          <div className={ firstName }>
            { this.state.errors.first_name }
          </div>  
          </div>
          <div className="single-column">
            <div className="label-form-container">
              Last Name*
            </div>  
            <input
              type="text"
              name="last_name"
              value={ this.state.fields.last_name }
              onChange={ this.onChangeText }
            />
          <div className={ lastName }>
            { this.state.errors.last_name }
          </div>
          </div>
        </div>
        <div className="two-column-form-container">
          <div className="single-column">
            <div className="label-form-container">
              Contact Number*
            </div>  
            <input
              type="number"
              name="contact_number"
              value={ this.state.fields.contact_number }
              onChange={ this.onChangeText }
            />
          <div className={ contactNum }>
            { this.state.errors.contact_number }
          </div>  
          </div>
          <div className="single-column">
            <div className="label-form-container">
              Email Address*
            </div>  
            <input
              type="text"
              name="email"
              value={ this.state.fields.email }
              onChange={ this.onChangeText }
            />
            <div className={ email }>
              { this.state.errors.email }
            </div>
          </div>
        </div>
        <div className="two-column-form-container">
          <Combobox 
            options={ this.props.sites }
            label="Which VXI site do you want to apply for?*"
            value="site_name"
          />
        </div>
        <div className="two-column-form-container">
          <Combobox 
            options={ this.props.positions }
            label="Which position are you applying for?*"
            value="position_name"
          />
        </div>
        <div className="two-column-form-container">
          <Combobox 
            options={ this.props.edu_levels }
            label="What is your highest educational attainment?*"
            value="name"
          />
        </div>
        <div className="two-column-form-container">
          <Combobox 
            options={ this.props.job_experience }
            label="Do you have call center experience?*"
            value="position"
          />
        </div>
        <div className="submit-btn" onClick={ this.onSubmitForm }>
          Submit
        </div>
      </div>
    );
  }
}

export default VxiForm
