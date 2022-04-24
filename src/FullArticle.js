function FullArticle(props) {
  return (
    <div className='full-article'>
      <h2>{props.article.title}</h2>
      <h3>{props.article.time.created}</h3>
      <p>{props.article.content}</p>
      <a onClick={props.toggleBool}>Return</a>
      <h3>Comments</h3>
      {
        props.comments.map(comment => {
          return (
            <div className='comment'>
              <h4>{ comment.content }</h4>
              <h4>{ comment.username }</h4>
              <p>{ comment.timeCreated }</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default FullArticle;