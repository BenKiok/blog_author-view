function DeleteButton(props) {
  const handleDelete = () => {
    fetch('http://localhost:4000/api/posts/' + props.url,
      {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + props.token
        }
      }
    )
    .then(res => res.json())
    .then(data => {
      props.refreshList();
      alert('Article deleted!');
    })
    .catch(err => console.log(err))
  }

  return (
    <button className='delete' onClick={handleDelete}>Delete</button>
  )
}

export default DeleteButton;