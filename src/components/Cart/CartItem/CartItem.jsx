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
            <button className={style.btnDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="32"
                     height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M10 10l4 4m0 -4l-4 4"/>
                </svg>
            </button>
        </div>


    )
}
export default CartItem