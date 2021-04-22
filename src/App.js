import React, {useState} from 'react'
import Form from './components/Form'
import PopUp from './components/PopUp';

const App = function() {
	const [firstName, setfirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [popUpVisible, setPopUpVisible] = useState(false);

	return (
    	<div className="app">
      		<Form 
			  firstName={firstName}
			  setfirstName={setfirstName}  
			  lastName={lastName} 
			  setLastName={setLastName}
			  setPopUpVisible={setPopUpVisible}
			/>
			<PopUp  
			  firstName={firstName}
			  lastName={lastName}
			  popUpVisible={popUpVisible}
			  setPopUpVisible={setPopUpVisible}
			/>
    	</div>
  	);
}

export default App;