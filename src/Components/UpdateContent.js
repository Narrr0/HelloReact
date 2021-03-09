import React, {useState} from 'react';
import './inputForm.css';

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
    <div id="inputForm">
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
          <input class="input" id="inputTitle" type="text" name="title" 
          placeholder="title"
          value={title}
          onChange={(e)=>inputFormHandler(e)}></input>
        </p>
        <p>
          <textarea class="input" id="inputContent" name="desc"
          placeholder="content"
          value={desc}
          onChange={(e)=>inputFormHandler(e)}></textarea>
        </p>
        <p>
          <input id="submitBtn" type="submit" value="udpate"></input>
        </p>
      </form>
    </div>
  )
}

export default UpdateContent;