import React from 'react';
import './Subject.css';

function Subject(props){
  return(
    <div id="head">
      <h1><a id="title" href="/" onClick={function(e){
        e.preventDefault();
        props.onChangePage();
      }}>{ props.title }</a></h1>
      { props.sub }
    </div>
  );
}

export default Subject;