import React from 'react';
import './App.css';
import Main from './components/Main/Main'
// import store from "./Redux/state";

function App(props) {
    return (
        <div className="App">
            <Main
                DescriptionPage={props.appState.DescriptionPage}
                mainPage={props.appState.mainPage}
                openCategory={props.updateStyle}
                categoryDisplay={props.categoryDisplay}
                addReviews={props.addReviews}
                updateNewReviewsText={props.updateNewReviewsText}
            />
            {/*   router!*/}
        </div>
    );
}

export default App;
