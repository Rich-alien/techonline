import React from "react";
import style from "./ItemDescription.module.css"
import img from "../../img/iLoveIt.png"

const ItemDescription = (props) => {
    let onUpCount = () => {
        props.upCountNow();
    }
    let onDownCount = () => {
        props.downCountNow();
    }
    let addOnCart = () => {
        props.addInCartNow();
    }
    let blur = props.blur;
    return (
        <div style={{filter:blur}} className={style.container }>
            <div className={style.productImgContainer}>
                <div className={style.productImg}>
                    <img src={img} alt="Item"/>
                </div>
            </div>
            <div className={style.containerProduct}>
                <h1 className={style.productName}>
                    {props.viewProduct.ObjName}
                </h1>
                <div className={style.productDirection}>
                    <p className={style.productDirectionText}>
                        {props.viewProduct.ObjDescription}
                    </p>
                </div>
                <div className={style.priceBlock}>
                    <div className={style.priceBlock_Price}>
                        <p className={style.priceBlock_PriceText}>{props.viewProduct.ObjPrice}₽</p>
                        <p className={style.priceBlock_PriceSubText}>за 1 штуку</p>
                    </div>
                    <div className={style.priceBlock_AddCount}>
                        <div className={style.countContainer}>
                            <div onClick={onDownCount} className={style.countMinus}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus"
                                     width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                            </div>
                            <div className={style.countInt}>{props.viewProduct.ObjCountView}</div>
                            <div onClick={onUpCount} className={style.countPlus}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus"
                                     width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <line x1="12" y1="5" x2="12" y2="19"/>
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                            </div>
                        </div>
                        <div className={style.priceBlock_CountTotal}>
                            <p className={style.priceBlock_PriceSubTextAll}>На сумму</p>
                            <p className={style.priceBlock_PriceTextAll}>{props.viewProduct.ObjTotalPrice}₽</p>
                        </div>
                    </div>
                    <div className={style.addToCardBlock}>
                        <button onClick={addOnCart} className={style.btn}>
                            Добавить в корзину
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ItemDescription;