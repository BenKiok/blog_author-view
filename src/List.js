function List(props) {
  return (
    <div className='article-list'>
      {props.data.filter(obj => obj.published === props.isPublished).map(obj => {
        return (
          <div className='article'>
            <h2>{obj.title}</h2>
            <h3>{obj.time.created}</h3>
            <p>{obj.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default List;