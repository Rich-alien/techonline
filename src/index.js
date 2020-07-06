import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let data = [
    {CarName: 'Lada Granta', CarImg: 'IMG'},
    {CarName: 'Lada Granta', CarImg: 'IMG'},
    {CarName: 'Lada Granta', CarImg: 'IMG'},
    {CarName: 'Lada Granta', CarImg: 'IMG'},
    {CarName: 'Другое', CarImg: 'обводка машины'},

];
let category =[
    {Category:'Lin1'},
    {Category:'Lin2'},
    {Category:'Lin3'},
    {Category:'Lin4'},
    {Category:'Lin5'},
    {Category:'Lin6'},
    {Category:'Lin7'},
    {Category:'Lin8'},
    {Category:'Lin9'},
    {Category:'Lin10'},
    {Category:'Lin11'},
    {Category:'Lin12'},
    {Category:'Lin13'},
    {Category:'Lin14'},
    {Category:'Lin15'},
    {Category:'Lin16'},

];
ReactDOM.render(
    <React.StrictMode>
        <App data={data} category={category}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
