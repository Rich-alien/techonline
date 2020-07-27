import React from "react";
import style from "./FooterInstagram.module.css"


const FooterInstagram = () => {
    return (
        <div className={style.instagram}>
            <div className={style.header}>
                Инстаграм
            </div>
                    <div className={style.instagramGrid}>
                        <img src={require("../ImgFooter/1.jpg")} alt="img" className={style.img}/>
                        <img src={require("../ImgFooter/2.jpg")} alt="img" className={style.img}/>
                        <img src={require("../ImgFooter/3.jpg")} alt="img" className={style.img}/>
                        <img src={require("../ImgFooter/4.jpg")} alt="img" className={style.img}/>
                        <img src={require("../ImgFooter/5.jpg")} alt="img" className={style.img}/>
                        <img src={require("../ImgFooter/6.jpg")} alt="img" className={style.img}/>
                    </div>
        </div>

    )
}
export default FooterInstagram;