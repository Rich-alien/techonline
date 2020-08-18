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
import * as axios from "axios";
import CartContainer from "../Cart/CartContainer";


class Main extends React.Component {
    componentDidMount() {
        if (this.props.products.length === 0) {
            axios.get('http://' + this.props.IP + ':3000/Car').then(response => {
                this.props.setCar(response.data)
            });
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className={style.main}>
                    <NavBarContainer/>
                    <Route path='/search' render={() => <SearchPage/>}/>
                    <Route path={'/product/' + this.props.ID} render={() => <ItemDescriptionContainer/>}/>
                    <Route exact path='/' render={() => <ChooseCarContainer/>}/>
                    <Route path='/category' render={() => <ChooseCategoryContainer/>}/>
                    <Route path='/subCategory' render={() => <SubChooseCategoryContainer/>}/>
                    <Route exact path='/product' render={() => <TotalItemContainer/>}/>
                    <Route path='/cart' render={() => <CartContainer/>}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Main;
