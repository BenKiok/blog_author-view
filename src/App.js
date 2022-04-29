import { useState } from 'react';
import NewArticleForm from './NewArticleForm';
import EditArticleForm from './EditArticleForm';
import FullArticle from './FullArticle';
import Login from './Login';
import List from './List';
import Nav from './Nav';

function App() {
  const [ showPublished, setPublishBool ] = useState(true);
  const [ articles, setArticles ] = useState([]);
  const [ jwtoken, setJWToken ] = useState((window.sessionStorage.getItem('token') || null));
  const [ formBool, setFormBool ] = useState(false);
  const [ editBool, setEditBool ] = useState(false);
  const [ articleBool, setArticleBool ] = useState(false);
  const [ article, setArticle ] = useState({});
  const [ comments, setComments ] = useState([]);
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
  const fetchArticleComments = obj => {
    fetch('http://localhost:4000/api/posts/' + obj._id + '/comments')
      .then(res => res.json())
      .then(data => {
        let arr = [];
        data.forEach(obj => arr.unshift(obj));
        setComments(arr);
      })
      .catch(err => console.log(err));
  }
  const passToken = token => {
    window.sessionStorage.setItem('token', token);
    setJWToken(token);
  }
  const toggleFormBool = () => {
    setFormBool(!formBool);
  }
  const toggleEditStates = (obj={}) => {
    setEditBool(!editBool);
    setArticle(obj);
  }
  const toggleArticleBool = () => {
    setArticleBool(!articleBool);
  }
  const toggleFullArticle = (obj={}) => {
    setArticle(obj);
    fetchArticleComments(obj);
    toggleArticleBool();
  }

  if (jwtoken && typeof jwtoken === 'string') {
    fetchArticles();
    
    return (
      <div className='App'>
        <Nav handleBool={handlePublishBool} toggleForm={toggleFormBool}/>
        {articleBool ? <FullArticle article={article} comments={comments} refreshComments={fetchArticleComments} toggleBool={toggleArticleBool} token={jwtoken}/> : null}
        {formBool ? <NewArticleForm refreshList={fetchArticles} token={jwtoken} toggleForm={toggleFormBool}/> : null}
        {editBool ? <EditArticleForm article={article} refreshList={fetchArticles} token={jwtoken} toggleForm={toggleEditStates}/> : null}
        <List data={articles} isPublished={showPublished} token={jwtoken} refreshList={fetchArticles} toggleForm={toggleEditStates} toggleArticle={toggleFullArticle}/>
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