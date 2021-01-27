import React from 'react';

function Subject(props){
  return(
    <div>
      <h1><a href="/" onClick={function(e){
        e.preventDefault();
        props.onChangePage();
      }}>{ props.title }</a></h1>
      { props.sub }
    </div>
  );
}

export default Subject;