function NewArticleForm(props) {
  const handleFormSubmit = event => {
    event.preventDefault();

    const articleData = {
      title: event.target[0].value,
      content: event.target[1].value,
      timeCreated: Date()
    }
    
    fetch('http://localhost:4000/api/posts/new',
      {
        method: 'POST',
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
      alert('Article created!');
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='form'>
      <form onSubmit={e => handleFormSubmit(e)}>
        <h1>New Article</h1>
        <input type='text' name='title' placeholder='Title' required/>
        <input type='text' name='content' placeholder='Write here...' required/>
        <button>Create Article</button>
      </form>
    </div>
  );
}

export default NewArticleForm;