import React from "react";
import Cart from "./Cart";
import {closeShoppingCart} from "../../Redux/mainReducer";

const CartContainer = (props) => {
    let closeShoppingCartNow = () => {
        props.store.dispatch(closeShoppingCart());
    };
    let state = props.store.getState().mainPage;
    return (
        <Cart
            Cart={state.Cart}
            store={props.store}
            styleDisplay={state.styleBlock.shoppingCart}
            closeShoppingCartNow={closeShoppingCartNow}
        />

    )
}
export default CartContainer