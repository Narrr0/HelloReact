import React from 'react';
import './button.css';

const ctrlStyle={
  textAlign: "center",
  position: "fixed",
  bottom: "20%",
  width: "100%",
}

function Control(props){
  return(
    <div style = {ctrlStyle}>
      <button id="updateBtn" href="/update" onClick={function(e){
        e.preventDefault();
        props.onChangeMode('update')
      }}>UPDATE</button>
      <button id="deleteBtn" onClick={function(e){
        e.preventDefault();
        props.onChangeMode('delete')
      }}>DELETE</button>
    </div>
  );
}
export default Control;