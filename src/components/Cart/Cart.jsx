import React from "react";
import style from "./Cart.module.css"
// import NavNar from "../Main/NavBar/NavBar";

const Cart = (props) =>{
    let styleDisplay = props.styleDisplay;
    let closeShoppingCartNow=()=>{
        props.closeShoppingCartNow();
    }
    return(
        <div style={{display:styleDisplay}} className={style.container}>
            <button onClick={closeShoppingCartNow} className={style.buttonBack}>Вернуться назад</button>
        </div>

    )
}
export default Cart