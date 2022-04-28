function FullArticle(props) {
  const handleButtonClick = obj => {
    let confirmDelete = window.confirm('Are you sure you want to delete this comment?');

    if (confirmDelete) {
      fetch('http://localhost:4000/api/comments/' + obj._id + '/delete',
        {
          method: 'DELETE',
          headers: {
            'Authorization': 'Bearer ' + props.token
          }
        }
      )
      .then(res => res.json())
      .then(data => {
        alert('Comment deleted!');
        props.refreshComments(props.article);
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <div className='full-article'>
      <h2>{props.article.title}</h2>
      <h3>{props.article.time.created}</h3>
      <p>{props.article.content}</p>
      <button onClick={props.toggleBool}>Return</button>
      <h3>Comments</h3>
      {
        props.comments.map(comment => {
          return (
            <div className='comment'>
              <h4>{ comment.content }</h4>
              <h4>{ comment.username }</h4>
              <p>{ comment.timeCreated }</p>
              <button onClick={() => handleButtonClick(comment)}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default FullArticle;