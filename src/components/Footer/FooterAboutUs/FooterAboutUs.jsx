import React from "react";
import style from "./FooterAboutUs.module.css"

const FooterAboutUs = ()=>{
    return(
        <div className={style.aboutUs}>
            <div className={style.header}>
                О нас
            </div>

            <div className={style.aboutUsText}>
                ОнЛайн магазин Запчастей и Аксессуаров для автомобилей LADA.
                Доставка ТК в любой город России и ближнего зарубежья
            </div>
        </div>
    )
}
export default FooterAboutUs;