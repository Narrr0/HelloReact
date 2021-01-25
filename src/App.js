import React, { useState } from 'react';
import './App.css';
import Subject from './Components/Subject'; 
import Nav from './Components/Nav';
import Content from './Components/Content';

function App() {
  const [ title ] = useState('WHYRANO');
  const [ sub ] = useState('Amazing props!');
  const [ contents ] = useState([
    { id: 1, title: 'HTML', desc: 'HTML is HTML.'},
    { id: 2, title: 'CSS', desc: 'CSS is CSS.'},
    { id: 3, title: 'JS', desc: 'JS is JS.'}
  ]);
  

  return (
    <div className="App">
      <Subject title={ title } sub={ sub }/>
      <Nav data={ contents }/>
      <Content title={ contents[0].title } desc={ contents[0].desc }/>
    </div>
  );
}
export default App;
