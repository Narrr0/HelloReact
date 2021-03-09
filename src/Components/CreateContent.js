import React from 'react';
import './inputForm.css';

function CreateContent(props){
  return(
    <div id="inputForm">
      <form action="/create_process" method="post"
        onSubmit={function(e){
          e.preventDefault();
          props.onSubmit(
            e.target.title.value,
            e.target.desc.value
          );
        }}
      >
        <p><input class="input" id="inputTitle" type="text" name="title" 
        placeholder="title"></input></p>
        <p>
          <textarea class="input" id="inputContent" name="desc"
          placeholder="content"></textarea>
        </p>
        <p>
          <input id="submitBtn" type="submit" value="create"></input>
        </p>
      </form>
    </div>
  )
}

export default CreateContent;