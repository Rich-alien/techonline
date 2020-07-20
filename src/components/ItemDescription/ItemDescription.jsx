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
                    <span className={style.textFotCount}>Колличество:</span>
                    <div className={style.countContainer}>
                        <div className={style.countMinus}>
                            <span>-</span>
                        </div>
                        <div className={style.countInt}>2</div>
                        <div className={style.countPlus}>+</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ItemDescription;