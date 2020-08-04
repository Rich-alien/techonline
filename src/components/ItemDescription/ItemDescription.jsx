import React from "react";
import style from "./ItemDescription.module.css"
import * as axios from "axios";

class ItemDescription extends React.Component {

    onUpCount = () => {
        this.props.upCountNow();
    }
    onDownCount = () => {
        this.props.downCountNow();
    }
    addOnCart = () => {
        this.props.addInCartNow();
    }

    componentDidMount() {
        while (this.props.product.length > 0) {
            this.props.product.pop();
        }
        if (this.props.product.length === 0) {
            axios.get("http://192.168.1.101:3000/Part").then(response => {
                let intID = this.props.ID;
                console.log(intID);
                this.props.setViewProduct([response.data[intID]]);
                console.log(this.props.ID);
            });
        }
    }

    // this.props.viewProduct.map(u =>
    render() {
        // debugger;
        return (
            <div className={style.container}>

                {
                    this.props.product.map(u =>
                        <div className={style.container}>
                            <div className={style.productImgContainer}>
                                <div className={style.productImg}>
                                    <img src={require("../../assets/images/productImg.png")} alt="Item"/>
                                </div>
                            </div>
                            <div className={style.containerProduct}>
                                <h1 className={style.productName}>
                                    {u.name}
                                </h1>
                                <div className={style.productDirection}>
                                    <p className={style.productDirectionText}>
                                        {u.description}
                                    </p>
                                </div>
                                <div className={style.priceBlock}>
                                    <div className={style.priceBlock_Price}>
                                        <p className={style.priceBlock_PriceText}>{u.price}₽</p>
                                        <p className={style.priceBlock_PriceSubText}>за 1 штуку</p>
                                    </div>
                                    <div className={style.priceBlock_AddCount}>
                                        <div className={style.countContainer}>
                                            <div onClick={this.onDownCount} className={style.countMinus}>
                                                <img src={require("../../assets/svg-icon/minus.svg")} alt=""/>
                                            </div>
                                            <div className={style.countInt}>{u.count}</div>
                                            <div onClick={this.onUpCount} className={style.countPlus}>
                                                <img src={require("../../assets/svg-icon/plus.svg")} alt=""/>
                                            </div>
                                        </div>
                                        <div className={style.priceBlock_CountTotal}>
                                            <p className={style.priceBlock_PriceSubTextAll}>На сумму</p>
                                            <p className={style.priceBlock_PriceTextAll}>{u.manufacturer}₽</p>
                                        </div>
                                    </div>
                                    <div className={style.addToCardBlock}>
                                        <button onClick={this.addOnCart} className={style.btn}>
                                            Добавить в корзину
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>)
                }
            </div>

        )
    }
}


export default ItemDescription;