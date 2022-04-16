function EditButton(props) {
  return (
    <button onClick={() => props.toggleForm(props.article)}>Edit</button>
  )
}

export default EditButton;