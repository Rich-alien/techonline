import React from 'react';
import style from './Main.module.css'
import ItemDescriptionContainer from "../ItemDescription/ItemDescriptionContainer";
import NavBarContainer from "./NavBar/NavBarContainer";
import Footer from "../Footer/Footer";
import SearchPage from "../SearchPage/SearchPage";
import {BrowserRouter, Route} from "react-router-dom";
import ProductView from "../ProductView/ProductView";


const Main = (props) => {
    // debugger;
    return (
      <BrowserRouter>
          <div className={style.main}>
              <NavBarContainer store={props.store}/>
              <Route path='/product' render={()=> <ItemDescriptionContainer store={props.store}/> }/>
              <Route path='/productView' render={()=> <ProductView store={props.store}/> }/>
              <Route path='/search' render={()=> <SearchPage/> } />

              <Footer/>
          </div>
      </BrowserRouter>)
}
/*<ChooseCarContainer store={props.store}/>*/
/*<ChooseCategoryContainer store={props.store}/>*/
/*<SubChooseCategoryContainer store={props.store}/>*/
/*<TotalItemContainer store={props.store}/>*/
export default Main;
