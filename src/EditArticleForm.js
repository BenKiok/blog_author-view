function EditArticleForm(props) {
  const handleFormSubmit = event => {
    event.preventDefault();

    const articleData = {
      title: event.target[0].value,
      content: event.target[1].value,
      timeEdited: Date()
    }
    
    fetch('http://localhost:4000/api/posts/' + props.article._id + '/edit',
      {
        method: 'PUT',
        headers: {
          'Authorization': 'Bearer ' + props.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(articleData)
      }
    )
    .then(res => res.json())
    .then(data => {
      event.target[0].value = '';
      event.target[1].value = '';
      props.toggleForm();
      props.refreshList();
      alert('Article edited!');
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='form'>
      <form onSubmit={e => handleFormSubmit(e)}>
        <h1>Edit Article</h1>
        <input type='text' name='title' placeholder='Title' defaultValue={props.article.title} required/>
        <input type='text' name='content' placeholder='Write here...' defaultValue={props.article.content} required/>
        <button>Edit Article</button>
      </form>
    </div>
  );
}

export default EditArticleForm;