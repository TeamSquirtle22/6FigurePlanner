import React, {useState} from 'react';
import ApplicationsContainer from './ApplicationsContainer.jsx';
import Login from './Login.jsx';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [id, setId] = useState(0);

  return (
    <div>
      {isLoggedIn ? (
        <ApplicationsContainer id={id} />
      ) : (
        <Login setLoggedIn={setLoggedIn} setId={setId} />
      )}
    </div>
  );
};
export default App;
