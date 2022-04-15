function PublishButton(props) {
  const handlePublish = () => {
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
      alert('Article published!');
    })
    .catch(err => console.log(err))
  }

  return (
    <button className='publish' onClick={handlePublish}>Publish</button>
  )
}

export default PublishButton;