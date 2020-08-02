import React from "react";
import style from "./CloseButton.module.css"
const buttonClose = () =>{
    return(
        <div className={style.container}>
            <img src={require("../../assets/svg-icon/close.svg")} alt="logo"/>
        </div>
    )
}
export default buttonClose;