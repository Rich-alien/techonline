import React from "react";
import style from "./CloseButton.module.css"
import closeBtnSvg from "../.././close.svg"
const buttonClose = () =>{
    return(
        <div className={style.container}>
            <img src={closeBtnSvg} alt="logo"/>
        </div>
    )
}
export default buttonClose;