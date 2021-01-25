import React from 'react';

function Nav(props){
  const data = props.data;
  var lists = [];

  var i = 0;
  while( i < data.length ){
    lists.push(<li key={ i }><a href={ "/content/" + data[i].id }>{ data[i].title }</a></li>)
    i = i + 1;
  }

  return(
    <nav>
      <ul>
        { lists }
      </ul>
    </nav>
  )
}

export default Nav;