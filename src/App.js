import React from 'react';
import './App.css';
import Main from './components/Main/Main'

function App(props) {
  return (
    <div className="App">
      <Main data={props.data} category={props.category}/>
    {/*   router!*/}
    </div>
  );
}

export default App;
