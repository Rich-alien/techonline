import React from "react";
import style from "./FooterInstagram.module.css"


const FooterInstagram = () => {
    return (
        <div className={style.instagram}>
            <div className={style.header}>
                Инстаграм
            </div>
                    <div className={style.instagramGrid}>
                        <img src={require(".././imgFooter/1.jpg")} alt="img" className={style.img}/>
                        <img src={require(".././imgFooter/2.jpg")} alt="img" className={style.img}/>
                        <img src={require(".././imgFooter/3.jpg")} alt="img" className={style.img}/>
                        <img src={require(".././imgFooter/4.jpg")} alt="img" className={style.img}/>
                        <img src={require(".././imgFooter/5.jpg")} alt="img" className={style.img}/>
                        <img src={require(".././imgFooter/6.jpg")} alt="img" className={style.img}/>
                    </div>
        </div>

    )
}
export default FooterInstagram;