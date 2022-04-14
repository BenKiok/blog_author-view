function Nav(props) {
  return (
    <div className='nav'>
      <button className='published' onClick={() => props.handleBool(true)}>Published</button>
      <button className='unpublished' onClick={() => props.handleBool(false)}>Unpublished</button>
      <button className='new-article'>New Article</button>
    </div>
  )
}

export default Nav;