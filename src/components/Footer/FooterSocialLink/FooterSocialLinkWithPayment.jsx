import React from "react";
import style from "./FooterSocialLinkWithPayment.module.css"
class FooterSocialLinkWithPayment extends React.Component{
    render() {
        return (
            <div className={style.container}>
                <div className={style.social}>
                    <p className={style.header}>Мы в социальных сетях</p>
                    <a className={style.link} href="https://www.instagram.com/niva_urban_63">
                        <img className={style.svg} src={require("../../../assets/svg-icon/instagram.svg")} alt="inst"/>
                    </a>
                    <a className={style.link} href="https://www.instagram.com/lada_vesta_63">
                        <img className={style.svg} src={require("../../../assets/svg-icon/instagramTwo.svg")} alt="inst"/>
                    </a>
                    <a className={style.link} href="https://vk.com/lada_63">
                        <img className={style.svg} src={require("../../../assets/svg-icon/vk.svg")} alt="vk"/>
                    </a>
                </div>
                <div className={style.payment}>
                    <p className={style.header}>Способы оплаты</p>
                </div>
            </div>
        )
    }
}

export default FooterSocialLinkWithPayment