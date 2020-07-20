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
                </div>
            </div>

        </div>
    )
}
export default ItemDescription;