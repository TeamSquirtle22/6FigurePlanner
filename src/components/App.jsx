import React, { useState } from 'react';
import ApplicationsContainer from './ApplicationsContainer.jsx';
import Login from './Login.jsx';

const App =()=> {
  const [isLoggedIn, setLoggedIn] = useState(false);

	return (
		<div> {
      isLoggedIn
      ? <ApplicationsContainer />
      : <Login setLoggedIn={setLoggedIn}/>
    }
		</div>
	);
}
export default App;
