import React from "react"
import PropTypes from "prop-types"
class VxiForm extends React.Component {

  state = {
    fields: {
      first_name: '',
      last_name: '',
      email: '',
      contact_number: null
    }
  }

  onChangeText = ( evt ) => {
    const fields = this.state.fields;
    fields[ evt.target.name ] = evt.target.value;
    this.setState( { fields: fields } );
  }


  render () {
    return (
      <div className="vxi-form-container">
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
          </div>
        </div>
        <div className="two-column-form-container">
          <div className="single-column">
            <div className="label-form-container">
              Contact Number*
            </div>  
            <input
              type="text"
              name="contact_number"
              value={ this.state.fields.contact_number }
              onChange={ this.onChangeText }
            />
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
          </div>
        </div>
        <div className="submit-btn">
          Submit
        </div>
      </div>
    );
  }
}

export default VxiForm
