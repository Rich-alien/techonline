import React from "react";
import style from "./Cart.module.css"
// import Item from "../Main/TotalItem/Item/Item";
import CartItem from "./CartItem/CartItem";
// import NavNar from "../Main/NavBar/NavBar";

const Cart = (props) => {
    let styleDisplay = props.styleDisplay;
    let ElementItem = props.Cart.map(e => <CartItem
        key={e.id}
        ObjName={e.ObjName}
        ObjImg={e.ObjImg}
        ObjTotalPrice={e.ObjTotalPrice}
    />);
    let closeShoppingCartNow = () => {
        props.closeShoppingCartNow();
    }

    return (
        <div style={{display: styleDisplay}} className={style.container}>
            <button
                onClick={closeShoppingCartNow}
                className={style.buttonBack}>

                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left-circle"
                     width="44" height="44" viewBox="0 0 30 30" strokeWidth="1.5" stroke="#2c3e50" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="9"/>
                    <line x1="8" y1="12" x2="16" y2="12"/>
                    <line x1="8" y1="12" x2="12" y2="16"/>
                    <line x1="8" y1="12" x2="12" y2="8"/>
                </svg>
                <p className={style.btnText}> ПРОДОЛЖИТЬ ПОКУПКИ</p>
            </button>

            <div className={style.CartItemContainer}>
                {
                    ElementItem
                }
            </div>
        </div>


    )
}
export default Cart