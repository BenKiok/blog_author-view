function UnpublishButton(props) {
  const handleUnpublish = () => {
    fetch('http://localhost:4000/api/posts/' + props.url,
      {
        method: 'PUT',
        headers: {
          'Authorization': 'Bearer ' + props.token
        }
      }
    )
    .then(res => res.json())
    .then(data => {
      props.refreshList();
      alert('Article unpublished!');
    })
    .catch(err => console.log(err))
  }

  return (
    <button className='unpublish' onClick={handleUnpublish}>Unpublish</button>
  )
}

export default UnpublishButton;