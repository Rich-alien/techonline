import React from "react";
import style from "./Footer.module.css"
import FooterAboutUs from "./FooterAboutUs/FooterAboutUs";
import FooterInstagram from "./FooterInstagram/FooterInstagram";
import FooterContactUs from "./FooterContactUs/FooterContactUs";
import FooterInformation from "./FooterInformation/FooterInformation";


const Footer = () => {
    return (
        <footer className={style.container}>
            <div className={style.topFooter}>
                <FooterAboutUs/>
                <FooterInformation/>
                <FooterInstagram/>
                <FooterContactUs/>
            </div>
            <div className={style.social}>
                <div className={style.socialLink}>

                </div>
                <div className={style.payment}>

                </div>
            </div>
            <div className={style.copyright}>

            </div>
        </footer>
    )
}
export default Footer;