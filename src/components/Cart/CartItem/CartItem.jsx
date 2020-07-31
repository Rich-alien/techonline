import React from "react";
import style from "./CartItem.module.css"

class CartItem extends React.Component{
    render() {
        return (
            <div className={style.container}>

                <div className={style.Name}>{this.props.ObjName}</div>
                <div>{this.props.ObjImg}</div>
                <div>{this.props.ObjTotalPrice}</div>
                <button className={style.btnDelete}>
                    <img src={require("../../../assets/svg-icon/circle-x.svg")} alt="circle-x"/>
                </button>
            </div>


        )
    }
}

export default CartItem