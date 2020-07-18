import React from 'react';
import './App.css';
import Main from './components/Main/Main'
// import store from "./Redux/state";

function App(props) {
    return (
        <div className="App">
            <Main
                store={props.store}
            />
            {/*   router!*/}
        </div>
    );
}

export default App;
