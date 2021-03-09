import React from 'react';
import './button.css';

const navStyle={
  display: "flex",
}

function Nav(props){
  const data = props.data;
  var lists = [];
  var i = 0;
  while( i < data.length ){
    lists.push(
      <button 
        href={ "/content/" + data[i].id }
        data-id={data[i].id}
        onClick = {function(e){
        e.preventDefault()
        props.onChangePage(e.target.dataset.id);
      }}>
        { data[i].title }
      </button>
      )
    i = i + 1;
  }

  return(
    <nav style = {navStyle}>
      { lists }
      <button id="addBtn"
        href="/create" 
        onClick={function(e){
        e.preventDefault();
        props.onChangeMode('create');
      }}> + </button>
    </nav>
  )
}

export default Nav;