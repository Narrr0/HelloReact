import React from 'react';
import './ReadContent.css';

function ReadContent(props){
  return(
    <article>
      <div id="subject">{ props.title }</div>
      <div id="desc">{ props.desc }</div>
    </article>
  )
}

export default ReadContent;