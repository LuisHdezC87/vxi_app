import React from "react"
import PropTypes from "prop-types"

class ImputField extends React.Component {

  render () {
    return (
      <div className='imput-field'>
        {this.props.label}*
      </div>
    );
  }
}

ImputField.propTypes = {
  label: PropTypes.string
};
export default ImputField
