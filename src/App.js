import { useState } from 'react';
import Login from './Login';
import List from './List';
import Nav from './Nav';

function App() {
  const [ showPublished, setPublishBool ] = useState(true);
  const [ articles, setArticles ] = useState([]);
  const [ jwtoken, setJWToken ] = useState(null);
  const handlePublishBool = bool => {
    setPublishBool(bool);
  }
  const fetchArticles = () => {
    fetch('http://localhost:4000/api/posts')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.log(err));
  }
  const passToken = token => {
    setJWToken(token);
    fetchArticles();
  }

  if (jwtoken && typeof jwtoken === 'string') {
    return (
      <div className='App'>
        <Nav handleBool={handlePublishBool}/>
        <List data={articles} isPublished={showPublished}/>
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