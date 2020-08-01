import React from 'react';
import style from './Main.module.css'
import ItemDescriptionContainer from "../ItemDescription/ItemDescriptionContainer";
import Footer from "../Footer/Footer";
import SearchPage from "../SearchPage/SearchPage";
import {BrowserRouter, Route} from "react-router-dom";
import ProductView from "../ProductView/ProductView";
import NavBarContainer from "../NavBar/NavBarContainer";


const Main = (props) => {
    return (
        <BrowserRouter>
            <div className={style.main}>
                <NavBarContainer store={props.store}/>
                <Route path='/product' render={() => <ItemDescriptionContainer />}/>
                <Route path='/productView' render={() => <ProductView />}/>
                <Route path='/search' render={() => <SearchPage />}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
export default Main;
