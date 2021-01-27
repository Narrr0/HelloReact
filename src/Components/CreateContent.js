import React from 'react';

function CreateContent(props){
  return(
    <div>
      <h2>Create</h2>
      <form action="/create_process" method="post"
        onSubmit={function(e){
          e.preventDefault();
          props.onSubmit(
            e.target.title.value,
            e.target.desc.value
          );
        }}
      >
        <p><input type="text" name="title" 
        placeholder="제목을 입력하세요"></input></p>
        <p>
          <textarea name="desc"
          placeholder="내용을 입력하세요"></textarea>
        </p>
        <p>
          <input type="submit"></input>
        </p>
      </form>
    </div>
  )
}

export default CreateContent;