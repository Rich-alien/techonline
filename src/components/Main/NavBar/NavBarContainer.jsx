import React from "react";
import NavBar from "./NavBar";
import {openShoppingCart} from "../../../Redux/mainReducer";

const NavBarContainer = (props) => {
    let state = props.store.getState().mainPage;
    let openShoppingCartNow =()=>{
        props.store.dispatch(openShoppingCart())
    }
    return (

       <NavBar
           openShoppingCartNow={openShoppingCartNow}
           store={props.store}
           CartMoney={state.CartMoney}
       />
    )
}
//<img src="https://img.icons8.com/officel/40/000000/mine-cart.png"/>
//<img src="https://img.icons8.com/color/48/000000/filled-like.png"/>
//<img src="https://img.icons8.com/android/24/000000/search.png"/> ICON SEARCH ADD LATER
//<img src="https://img.icons8.com/material-rounded/24/000000/shopping-basket-2.png"/> ICON BASKET ADD LATER
//<img src="https://img.icons8.com/metro/26/000000/filled-like.png"/> ICON FAVORITE ADD LATER
//<img src="https://img.icons8.com/material-outlined/26/000000/filled-like.png"/> ICON FAVORITE(EMPTY) ADD LATER
export default NavBarContainer;