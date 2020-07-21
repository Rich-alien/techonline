import React from "react";
import style from "./ItemDescription.module.css"

const ItemDescription = (props) => {
    return (
        <div className={style.container}>
            <h1 className={style.name}>
                Имя товара
                {/*{*/}
                {/*    props.store.getState().mainPage.ObjItem.ObjName*/}
                {/*}*/}
            </h1>
            <div className={style.containerDescription}>
                <div className={style.img}>

                </div>
                <div className={style.Description}>
                    <div className={style.price}>
                        <span className={style.textPrice}>1477p</span>
                    </div>
                    <div className={style.informationLine}>

                    </div>
                    <div className={style.mainDescription}>
                        Тонкая. Легкая. Белая.
                        Футболка линейки B.O.M.J - первая единица контрбрендовой линии одежды. Потрясающие качество
                        в совместительстве с уточненным подходом к деталям, которым не могут похвастаться
                        именитые раздутые фирмы.
                        Ткань сорта пенье
                        Состав: 95% cotton, 5% spandex. Плотность 170 г/м²
                    </div>
                    <div className={style.countryContainer}>
                        <div className={style.NameCountry}>
                            Производитель:
                        </div>
                        <div className={style.country}>
                            Япония
                        </div>
                    </div>
                    <div className={style.yearContainer}>
                        <div className={style.NameYear}>
                            Год:
                        </div>
                        <div className={style.year}>
                            2018
                        </div>
                    </div>
                    <span className={style.textFotCount}>Колличество:</span>
                    <div className={style.containerAddCard}>
                        <div className={style.countContainer}>
                            <div className={style.countMinus}>
                                <span>-</span>
                            </div>
                            <div className={style.countInt}>2</div>
                            <div className={style.countPlus}>+</div>
                        </div>
                        <div className={style.addToCard}>
                            <span className={style.addToCard_text}>Добавить в корзину</span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="icon icon-tabler icon-tabler-arrow-narrow-right" width="44" height="44"
                                 viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round"
                                 stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <line x1="15" y1="16" x2="19" y2="12"/>
                                <line x1="15" y1="8" x2="19" y2="12"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ItemDescription;