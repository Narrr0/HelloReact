import React from 'react';

function Control(props){

  return(
    <ul>
      <li><a href="/create" onClick={function(e){
        e.preventDefault();
        props.onChangeMode('create');
      }}>CREATE</a></li>
      <li><a href="/update" onClick={function(e){
        e.preventDefault();
        props.onChangeMode('update')
      }}>UPDATE</a></li>
      <li><input onClick={function(e){
        e.preventDefault();
        props.onChangMode('delete')
      }} type="button" value="DELETE"></input></li>
    </ul>
  );
}

export default Control;