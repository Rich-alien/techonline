import React from "react";
import style from "./Cart.module.css"
import CartItem from "./CartItem/CartItem";

class Cart extends React.Component {
    styleDisplay = this.props.styleDisplay;
    ElementItem = this.props.Cart.map(e => <CartItem
        key={e.id}
        ObjName={e.ObjName}
        ObjImg={e.ObjImg}
        ObjTotalPrice={e.ObjTotalPrice}
    />);
    closeShoppingCartNow = () => {
        this.props.closeShoppingCartNow();
    }
    // componentDidUpdate для открытия корзины!

    render() {
        return (
            <div style={{display: this.styleDisplay}} className={style.container}>
                <button
                    onClick={this.closeShoppingCartNow}
                    className={style.buttonBack}>

                    <img src={require("../../assets/svg-icon/arrow-left.svg")} alt=""/>
                    <p className={style.btnText}> ПРОДОЛЖИТЬ ПОКУПКИ</p>
                </button>

                <div className={style.CartItemContainer}>
                    {
                        this.ElementItem
                    }
                </div>
            </div>


        )
    }
}

export default Cart