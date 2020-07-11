import React from 'react';
import './App.css';
import Main from './components/Main/Main'

function App(props) {
  return (
    <div className="App">
      <Main data={props.appState.data} category={props.appState.category} SubCategory={props.appState.SubCategory} ObjItem={props.appState.ObjItem}/>
    {/*   router!*/}
    </div>
  );
}

export default App;
