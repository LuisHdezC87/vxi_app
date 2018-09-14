import React from "react"
import PropTypes from "prop-types"
class GetInTouch extends React.Component {

  onGetTouchClick = () => {
    const scrollPos = document.getElementById("passion-for-people-get-in-touch").offsetTop;
    this.moveUp( scrollPos );
  };

  moveUp = ( scrollPos ) => {
    let pos = ( scrollPos - 1 );
    if ( pos > 0 ) {
      setTimeout( () => {
        scroll(0, pos);
      }, 100);
      this.moveUp( pos );
    } else {
       setTimeout( () => {
        scroll(0, 0);
      }, 100);
    }
  };

  render () {
    return (
      <div className="passion-for-people-get-in-touch" id="passion-for-people-get-in-touch" onClick={ this.onGetTouchClick }>
        GET IN TOUCH <b>WITH US</b>
      </div>
    );
  }
}

export default GetInTouch
