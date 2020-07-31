import React from "react";
import NavBar from "./NavBar";
import {openShoppingCart} from "../../Redux/mainReducer";

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
export default NavBarContainer;