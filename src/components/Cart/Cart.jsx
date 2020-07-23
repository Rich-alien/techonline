import React from "react";
import style from "./Cart.module.css"
// import Item from "../Main/TotalItem/Item/Item";
import CartItem from "./CartItem/CartItem";
// import NavNar from "../Main/NavBar/NavBar";

const Cart = (props) => {
    let styleDisplay = props.styleDisplay;
    let ElementItem = props.Cart.map(e =>  <CartItem
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
            <button onClick={closeShoppingCartNow} className={style.buttonBack}>Вернуться назад</button>
            <div className={style.CartItemContainer}>
                {
                    ElementItem
                }
            </div>
        </div>


    )
}
export default Cart