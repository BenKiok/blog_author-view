import DeleteButton from './DeleteButton';
import PublishButton from './PublishButton';
import UnpublishButton from './UnpublishButton';

function List(props) {
  return (
    <div className='article-list'>
      {props.data.filter(obj => obj.published === props.isPublished).map(obj => {
        return (
          <div className='article'>
            <h2>{obj.title}</h2>
            <h3>{obj.time.created}</h3>
            <p>{obj.content}</p>
            <DeleteButton url={obj._id + '/delete'} token={props.token} refreshList={props.refreshList}/>
            {
             obj.published ?
             <UnpublishButton url={obj._id + '/unpublish'} token={props.token} refreshList={props.refreshList}/> :
             <PublishButton url={obj._id + '/publish'} token={props.token} refreshList={props.refreshList}/>
            }
          </div>
        )
      })}
    </div>
  )
}

export default List;