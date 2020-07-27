import React from 'react';
import style from './Main.module.css'
import ItemDescriptionContainer from "../ItemDescription/ItemDescriptionContainer";
import NavBarContainer from "./NavBar/NavBarContainer";
import Footer from "../Footer/Footer";
import SearchPage from "../SearchPage/SearchPage";
import {BrowserRouter, Route} from "react-router-dom";
import ProductView from "../ProductView/ProductView";


const Main = (props) => {
    return (
        <BrowserRouter>
            <div className={style.main}>
                <NavBarContainer store={props.store}/>
                <Route path='/product' render={() => <ItemDescriptionContainer store={props.store}/>}/>
                <Route path='/productView' render={() => <ProductView store={props.store}/>}/>
                <Route path='/search' render={() => <SearchPage store={props.store}/>}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
export default Main;
