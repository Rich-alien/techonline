import React from "react";
import style from "./ItemDescription.module.css"

class ItemDescription extends React.Component{
    onUpCount = () => {
        this.props.upCountNow();
    }
     onDownCount = () => {
        this.props.downCountNow();
    }
     addOnCart = () => {
        this.props.addInCartNow();
    }
    blurN = this.props.blur;

    render() {
    return (
        <div style={{filter:this.blurN}} className={style.container }>
            <div className={style.productImgContainer}>
                <div className={style.productImg}>
                    <img src={require("../../assets/images/productImg.png")} alt="Item"/>
                </div>
            </div>
            <div className={style.containerProduct}>
                <h1 className={style.productName}>
                    {this.props.viewProduct.ObjName}
                </h1>
                <div className={style.productDirection}>
                    <p className={style.productDirectionText}>
                        {this.props.viewProduct.ObjDescription}
                    </p>
                </div>
                <div className={style.priceBlock}>
                    <div className={style.priceBlock_Price}>
                        <p className={style.priceBlock_PriceText}>{this.props.viewProduct.ObjPrice}₽</p>
                        <p className={style.priceBlock_PriceSubText}>за 1 штуку</p>
                    </div>
                    <div className={style.priceBlock_AddCount}>
                        <div className={style.countContainer}>
                            <div onClick={this.onDownCount} className={style.countMinus}>
                                <img src={require("../../assets/svg-icon/minus.svg")} alt=""/>
                            </div>
                            <div className={style.countInt}>{this.props.viewProduct.ObjCountView}</div>
                            <div onClick={this.onUpCount} className={style.countPlus}>
                                <img src={require("../../assets/svg-icon/plus.svg")} alt=""/>
                            </div>
                        </div>
                        <div className={style.priceBlock_CountTotal}>
                            <p className={style.priceBlock_PriceSubTextAll}>На сумму</p>
                            <p className={style.priceBlock_PriceTextAll}>{this.props.viewProduct.ObjTotalPrice}₽</p>
                        </div>
                    </div>
                    <div className={style.addToCardBlock}>
                        <button onClick={this.addOnCart} className={style.btn}>
                            Добавить в корзину
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
    }
}



export default ItemDescription;