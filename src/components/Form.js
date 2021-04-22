import React, {useRef} from 'react'
import '../styles/style.css'

const Form = function({ firstName, setfirstName, lastName, setLastName, setPopUpVisible }) {
    let inputFirstName = useRef();
    let inputLastName = useRef();

    const showPopUp = function(e) {
        e.preventDefault();

        console.log('popup is ready to go!')

        setfirstName(inputFirstName.current.value);
        setLastName(inputLastName.current.value);

        if(!inputFirstName.current.value || !inputLastName.current.value) {
            alert('Please, fill the form in!');
            return;
        }

        setPopUpVisible(prev => !prev)

        inputFirstName.current.value = '';
        inputLastName.current.value = '';
    }

    return (
          <form className="form_wrapper">
              <input ref={inputFirstName} type="text" name="first_name" placeholder="Name"></input>
              <input ref={inputLastName} type="text" name="last_name" placeholder="Surname"></input>
              <button className="btn_show" onClick={showPopUp}>Done</button>
          </form>
    );
  }
  
  export default Form;
  