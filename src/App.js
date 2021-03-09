import React, { useState } from 'react';
import './App.css';
import Subject from './Components/Subject'; 
import Nav from './Components/Nav';
import ReadContent from './Components/ReadContent';
import CreateContent from './Components/CreateContent';
import UpdateContent from './Components/UpdateContent';
import Control from './Components/Control';

function App() {
  const [ mode, setMode ] = useState('welcome');
  const [ welcome ] = useState(
    { title: 'Welcome', desc: 'World wide web with React'}
  )
  const [ subject ] = useState(
    { title: 'WEB'}
  );
  const [ contents, setContents ] = useState([
    { id: 0, title: 'HTML', desc: 'HTML is HTML.'},
    { id: 1, title: 'CSS', desc: 'CSS is CSS.'},
    { id: 2, title: 'JS', desc: 'JS is JS.'}
  ]);
  const [ selectedId, setSelectedId ] = useState(1);
  const [ lastId, setlastId ] = useState(2);

  function getContent(){
    var _title, _desc, _article = null;
    if(mode === 'welcome'){
      _title = welcome.title;
      _desc = welcome.desc;
      _article = <ReadContent title={ _title } desc={ _desc } />;
    }
    else if(mode === 'read'){
      _title = contents[selectedId].title;
      _desc = contents[selectedId].desc;
      _article = <div>
          <ReadContent title={ _title } desc={ _desc } />
          <Control 
            onChangeMode={function(_mode){
              if(_mode === 'delete'){
                console.log(_mode);
                if(window.confirm('삭제하시겠습니까?')){
                  var _contents = Array.from(contents);
                  _contents.splice(selectedId, 1);
                  setContents(_contents);
                  setMode('welcome');
                }
              }
              else{
                setMode(_mode);
          }}}/>
        </div>
    }
    else if (mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        const new_content = {id: lastId + 1, title: _title, desc: _desc};
        setlastId(id => id = id + 1);
        setContents([...contents, new_content]);
        setSelectedId(new_content.id);
        setMode('read');
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
        onChangePage={function(){
          setMode('welcome');
        }}/>

      <Nav 
        onChangePage={function(id){
          setMode('read');  
          setSelectedId(Number(id));
        }}
        onChangeMode={function(_mode){
          setMode(_mode);
        }}
        data={ contents }
      />

      <div> {getContent()} </div>
    </div>
  );
}
export default App;