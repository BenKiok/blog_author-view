import { useState } from 'react';
import Login from './Login';

function App() {
  const [ jwtoken, setJWToken ] = useState(null);
  const passToken = token => {
    setJWToken(token);
  }

  if (jwtoken && typeof jwtoken === 'string') {
    return (
      <div className='App'>
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