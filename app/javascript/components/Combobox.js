import React from "react"
import PropTypes from "prop-types"

class Combobox extends React.Component {
  

  onClickOption = () => {
  
  }

  render () {
    let options = this.props.options;
    let optionItems = options.map((option) =>
      <option key={option.id}>{option[this.props.value]}</option>
    );

    return (
      <div className="combobox-form">
        <div className="combobox-form-label">
          { this.props.label }
        </div>  
        <select>
          { optionItems }
        </select>
      </div>  
    );
  }
}

Combobox.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string
};
export default Combobox
