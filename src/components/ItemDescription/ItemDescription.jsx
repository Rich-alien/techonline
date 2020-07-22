import React from "react";
import style from "./ItemDescription.module.css"
import img from "../../img/iLoveIt.png"

const ItemDescription = (props) => {
    return (
        <div className={style.container}>
            <div className={style.productImgContainer}>
                <div className={style.productImg}>
                    <img src={img} alt="Item"/>
                </div>
            </div>
            <div className={style.containerProduct}>
                <h1 className={style.productName}>
                    Квадрат Малевича
                </h1>
                <div className={style.countryBlock}>
                    <h2 className={style.productQuestion}>Страна производителя: </h2>
                    <h2 className={style.productAsk}> Япония</h2>
                </div>
                <div className={style.yearBlock}>
                    <h2 className={style.productQuestion}>Год выпуска: </h2>
                    <h2 className={style.productAsk}> 2020</h2>
                </div>
                <div className={style.productDirection}>
                    <p className={style.productDirectionText}>
                        Ультракомпактная мультимедийная беспроводная клавиатура с USB-интерфейсом,
                        выполненная из высококачественных материалов с прочным металлическим
                        основанием. Комфортные клавиши с мягким ноутбучным ходом обеспечивают
                        великолепные тактильные ощущения во время работы, а также низкий уровень шума.
                    </p>
                </div>
                <div className={style.priceBlock}>
                    <div className={style.priceBlock_Price}>
                        <p className={style.priceBlock_PriceText}>1488P</p>
                        <p className={style.priceBlock_PriceSubText}>за 1 штуку</p>
                    </div>
                    <div className={style.priceBlock_AddCount}>
                        <div className={style.countContainer}>
                            <div className={style.countMinus}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus"
                                     width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                            </div>
                            <div className={style.countInt}>2</div>
                            <div className={style.countPlus}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus"
                                     width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <line x1="12" y1="5" x2="12" y2="19"/>
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                            </div>
                        </div>
                        <div className={style.priceBlock_CountTotal}>
                            <p className={style.priceBlock_PriceSubTextAll}>На сумму</p>
                            <p className={style.priceBlock_PriceTextAll}>1488P</p>
                        </div>
                    </div>
                    <div className={style.addToCardBlock}>
                        <button className={style.btn}>
                            Добавить в корзину
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ItemDescription;