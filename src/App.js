import { useState } from 'react';
import NewArticleForm from './NewArticleForm';
import Login from './Login';
import List from './List';
import Nav from './Nav';

function App() {
  const [ showPublished, setPublishBool ] = useState(true);
  const [ articles, setArticles ] = useState([]);
  const [ jwtoken, setJWToken ] = useState(null);
  const [ formBool, setFormBool ] = useState(false);
  const handlePublishBool = bool => {
    setPublishBool(bool);
  }
  const fetchArticles = () => {
    fetch('http://localhost:4000/api/posts')
      .then(res => res.json())
      .then(data => {
        let arr = [];
        data.forEach(obj => arr.unshift(obj));
        setArticles(arr);
      })
      .catch(err => console.log(err));
  }
  const passToken = token => {
    setJWToken(token);
    fetchArticles();
  }
  const toggleFormBool = () => {
    setFormBool(!formBool);
  }

  if (jwtoken && typeof jwtoken === 'string') {
    return (
      <div className='App'>
        <Nav handleBool={handlePublishBool} toggleForm={toggleFormBool}/>
        {formBool ? <NewArticleForm refreshList={fetchArticles} token={jwtoken} toggleForm={toggleFormBool}/> : null}
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