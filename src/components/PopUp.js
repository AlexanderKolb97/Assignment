import React from 'react'
import '../styles/style.css'

const PopUp = function({ firstName, lastName, popUpVisible, setPopUpVisible }) {

    const closePopUp = function() {
        setPopUpVisible(prev => !prev);
    }

    return (
        <div className={`pop_up ${popUpVisible ? 'show' : 'hide'}`}>
            <span className="content_text">Hello <br /> {firstName} {lastName}</span>
            <button onClick={closePopUp} className="btn_close">x</button>
        </div>
    );
  }
  
  export default PopUp;