import React, {useState} from 'react';

function UpdateContent(props){
  const [id] = useState(props.data.id);
  const [title, setTitle] = useState(props.data.title);
  const [desc, setDesc] = useState(props.data.desc);

  function inputFormHandler(e){
    if(e.target.name === 'title'){
      setTitle(e.target.value);
    }
    else if(e.target.name === 'desc'){
      setDesc(e.target.value);
    }
  }
  return(
    <div>
      <h2>Update</h2>
      <form action="/update_process" method="post"
        onSubmit={function(e){
          e.preventDefault();
          props.onSubmit(
            id,
            title,
            desc
          );
        }}
      >
      <input type="hidden" name="id" value={id}></input>
        <p>
          <input type="text" name="title" 
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e)=>inputFormHandler(e)}></input>
        </p>
        <p>
          <textarea name="desc"
          placeholder="내용을 입력하세요"
          value={desc}
          onChange={(e)=>inputFormHandler(e)}></textarea>
        </p>
        <p>
          <input type="submit"></input>
        </p>
      </form>
    </div>
  )
}

export default UpdateContent;