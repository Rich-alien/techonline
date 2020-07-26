import React from "react";
import style from "./FooterContactUs.module.css"

const FooterContactUs = () =>{
    return(
        <div className={style.contactUs}>
            <div className={style.header}>
                Связаться с нами
            </div>
            <div className={style.contactUsData}>
                <div className={style.contactUsAddress}>
                    <div className={style.contactUsSvg}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home"
                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff"
                             fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <polyline points="5 12 3 12 12 3 21 12 19 12"/>
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>
                        </svg>
                    </div>
                    Офицерская 35, Тольятти
                </div>
                <div className={style.contactUsPhone}>
                    <div className={style.contactUsSvg}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone"
                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff"
                             fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path
                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                        </svg>
                    </div>
                    <a className={style.link} href="tel:+79879672168"> +7 (987) 967-21-68</a>
                </div>
                <div className={style.contactUsPhone}>
                    <div className={style.contactUsSvgBlock}>
                        <img className={style.contactUsSvg} src={require("../../../img/SvgIcon/viber.svg")}
                             alt="viber"/>
                    </div>
                    <a className={style.link} href="tel:+79277767533"> +7 (927) 776-75-33</a>
                </div>
                <div className={style.contactUsPhone}>
                    <div className={style.contactUsSvgBlock}>
                        <img className={style.contactUsSvg} src={require("../../../img/SvgIcon/whatsApp.svg")}
                             alt="whats app"/>
                    </div>
                    <a className={style.link} href="tel:+79879672168"> +7 (987) 967-21-68</a>
                </div>

            </div>
        </div>
    )
}
export default FooterContactUs;