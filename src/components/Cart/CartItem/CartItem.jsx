import React from "react";
import style from "./CartItem.module.css"
// import NavNar from "../Main/NavBar/NavBar";

const CartItem = (props) =>{

    return(
        <div  className={style.container}>

            <div className={style.Name}>
                {
                    props.ObjName
                }
            </div>
            <div>
                {
                    props.ObjImg
                }
            </div>
            <div>
                {
                    props.ObjTotalPrice
                }
            </div>
        </div>


    )
}
export default CartItem