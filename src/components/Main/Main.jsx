import React from 'react';
import style from './Main.module.css'
import ItemDescriptionContainer from "../ItemDescription/ItemDescriptionContainer";
import Footer from "../Footer/Footer";
import SearchPage from "../SearchPage/SearchPage";
import {BrowserRouter, Route} from "react-router-dom";
import NavBarContainer from "../NavBar/NavBarContainer";
import SubChooseCategoryContainer from "./SubChooseCategoty/SubChooseCategoryContainer";
import TotalItemContainer from "./TotalItem/TotalItemContainer";
import ChooseCarContainer from "./ChooseCar/ChooseCarContainer";
import ChooseCategoryContainer from "./ChooseCategory/ChooseCategotyContainer";


const Main = () => {
    return (
        <BrowserRouter>
            <div className={style.main}>
                <NavBarContainer/>
                <Route path='/search' render={() => <SearchPage/>}/>
                <Route path='/product' render={() => <ItemDescriptionContainer/>}/>
                <Route path='/car' render={() => <ChooseCarContainer/>}/>
                <Route path='/category' render={() => <ChooseCategoryContainer/>}/>
                <Route path='/subCategory' render={() => <SubChooseCategoryContainer/>}/>
                <Route path='/product' render={() => <TotalItemContainer/>}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
export default Main;
