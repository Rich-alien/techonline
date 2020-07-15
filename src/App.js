import React from 'react';
import './App.css';
import Main from './components/Main/Main'
// import store from "./Redux/state";

function App(props) {
    return (
        <div className="App">
            <Main
                dispatch={props.dispatch}
                categoryDisplay={props.appState.categoryDisplay}
                DescriptionPage={props.appState.DescriptionPage}
                mainPage={props.appState.mainPage}
            />
            {/*   router!*/}
        </div>
    );
}

export default App;
