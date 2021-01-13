import React from 'react';
import AddApplicationForm from './AddApplicationForm.jsx';
import ApplicationsContainer from './ApplicationsContainer.jsx';

function App() {
	return (
		<div>
			<h1> This is App.jsx</h1>
			<h2> This is another h2 on App.jsx</h2>
			<ApplicationsContainer />
		</div>
    <div>
      <AddApplicationForm />
    </div>
	);
}
export default App;
