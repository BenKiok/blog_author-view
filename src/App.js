import { useState } from 'react';
import Login from './Login';
import Nav from './Nav';

function App() {
  const [ jwtoken, setJWToken ] = useState(null);
  const passToken = token => {
    setJWToken(token);
  }

  if (jwtoken && typeof jwtoken === 'string') {
    return (
      <div className='App'>
        <Nav/>
        <h1>You are logged in!</h1>
      </div>
    )
  } else {
    return (
      <div className='App'>
        <Login handleLogin={passToken}/>
      </div>
    );
  }
}

export default App;