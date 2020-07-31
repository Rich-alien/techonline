import React from "react";
import style from "./FooterContactUs.module.css"
class FooterContactUs extends React.Component{
    render() {
        return(
            <div className={style.contactUs}>
                <div className={style.header}>
                    Связаться с нами
                </div>
                <div className={style.contactUsData}>
                    <div className={style.contactUsAddress}>
                        <div className={style.contactUsSvg}>
                            <img src={require("../../../assets/svg-icon/home.svg")} alt="home"/>
                        </div>
                        Офицерская 35, Тольятти
                    </div>
                    <div className={style.contactUsPhone}>
                        <div className={style.contactUsSvg}>
                            <img src={require("../../../assets/svg-icon/phone.svg")} alt="phone"/>
                        </div>
                        <a className={style.link} href="tel:+79879672168"> +7 (987) 967-21-68</a>
                    </div>
                    <div className={style.contactUsPhone}>
                        <div className={style.contactUsSvgBlock}>
                            <img className={style.contactUsSvg} src={require("../../../assets/svg-icon/viber.svg")}
                                 alt="viber"/>
                        </div>
                        <a className={style.link} href="tel:+79277767533"> +7 (927) 776-75-33</a>
                    </div>
                    <div className={style.contactUsPhone}>
                        <div className={style.contactUsSvgBlock}>
                            <img className={style.contactUsSvg} src={require("../../../assets/svg-icon/whatsApp.svg")}
                                 alt="whats app"/>
                        </div>
                        <a className={style.link} href="tel:+79879672168"> +7 (987) 967-21-68</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default FooterContactUs;