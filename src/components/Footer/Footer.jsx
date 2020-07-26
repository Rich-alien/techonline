import React from "react";
import style from "./Footer.module.css"
import FooterAboutUs from "./FooterAboutUs/FooterAboutUs";
import FooterInstagram from "./FooterInstagram/FooterInstagram";
import FooterContactUs from "./FooterContactUs/FooterContactUs";
import FooterInformation from "./FooterInformation/FooterInformation";
import FooterSocialLinkWithPayment from "./FooterSocialLink/FooterSocialLinkWithPayment";


const Footer = () => {
    return (
        <footer className={style.container}>
            <div className={style.topFooter}>
                <FooterAboutUs/>
                <FooterInformation/>
                <FooterInstagram/>
                <FooterContactUs/>
            </div>
            <div className={style.bottomFooter}>
                <FooterSocialLinkWithPayment/>
            </div>
            <div className={style.copyright}>

            </div>
        </footer>
    )
}
export default Footer;