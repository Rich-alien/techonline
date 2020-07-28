import React from "react";
import style from "./Item.module.css"

const Item = (props) => {
    return (
        <div className={style.container}>

            <div className={style.ObjImg}>
                {
                    props.ObjImg
                }
            </div>
            <div className={style.ObjName}>
                {
                    props.ObjName
                }
            </div>
            <div className={style.ObjPrice}>
                {
                    props.ObjPrice
                }
            </div>
            {/*<button className={style.btn}>*/}
            {/*    <p className={style.btnText}>Подробнее</p>*/}
            {/*</button>*/}
            {/*    нужна или нет, вот в чем вопрос*/}
        </div>
    )
}
export default Item