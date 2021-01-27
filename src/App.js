import React, { useState } from 'react';
import './App.css';
import Subject from './Components/Subject'; 
import Nav from './Components/Nav';
import ReadContent from './Components/ReadContent';
import CreateContent from './Components/CreateContent';
import UpdateContent from './Components/UpdateContent';
import Control from './Components/Control';

function App() {
  const [ mode, setMode ] = useState('create');
  const [ welcome ] = useState(
    { title: 'Welcome', desc: 'Hello, React!'}
  )
  const [ subject ] = useState(
    { title: 'WEB', sub: 'World Wide Web' }
  );
  const [ contents, setContents ] = useState([
    { id: 0, title: 'HTML', desc: 'HTML is HTML.'},
    { id: 1, title: 'CSS', desc: 'CSS is CSS.'},
    { id: 2, title: 'JS', desc: 'JS is JS.'}
  ]);
  const [ selectedId, setSelectedId ] = useState(1);

  function getContent(){
    var _title, _desc, _article = null;
    if(mode === 'welcome'){
      _title = welcome.title;
      _desc = welcome.desc;
      _article = <ReadContent title={ _title } desc={ _desc }/>;
    }
    else if(mode === 'read'){
      _title = contents[selectedId].title;
      _desc = contents[selectedId].desc;
      _article = <ReadContent title={ _title } desc={ _desc }/>
    }
    else if (mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        var max_content_id = contents.length - 1;
        const new_content = {id: max_content_id, title: _title, desc: _desc};
        setContents([...contents, new_content]);
      }}></CreateContent>
    }
    else if(mode === 'update'){
      const _content = contents[selectedId];
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
          var _contents = Array.from(contents);
          _contents[_id] = {id: _id, title: _title, desc: _desc};
          setContents(_contents);
          setMode('read');
        }
      }></UpdateContent>
    }
    return _article;
  }

  return(
    <div className="App">
      <Subject
        title={ subject.title } 
        sub={ subject.sub }
        onChangePage={function(){
          setMode('welcome');
        }}/>

      <Nav 
        onChangePage={function(id){
          setMode('read');
          setSelectedId(Number(id));
        }}
        data={ contents }
      />

      <Control 
        onChangeMode={function(_mode){
          setMode(_mode);
        }}
      />
    {getContent()}
    </div>
  );
}
export default App;