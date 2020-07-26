import React from "react";
import style from "./FooterSocialLinkWithPayment.module.css"

const FooterSocialLinkWithPayment =()=>{
    return(
     <div className={style.container}>
         <div className={style.socialLink}>
             <p className={style.header}>Мы в социальных сетях</p>
             <a className={style.link} href="https://www.instagram.com/niva_urban_63">
                 <img className={style.svg} src={require("../../../img/SvgIcon/instagram.svg")} alt=""/>
             </a>
             <a className={style.link} href="https://www.instagram.com/lada_vesta_63">
                 <img className={style.svg} src={require("../../../img/SvgIcon/instagramTwo.svg")} alt=""/>
             </a>
             <a className={style.link} href="https://vk.com/lada_63">
                 <img className={style.svg} src={require("../../../img/SvgIcon/vk.svg")} alt=""/>
             </a>
         </div>
         <div className={style.payment}>
             <p className={style.header}>Способы оплаты</p>
         </div>
     </div>
    )
}
export default FooterSocialLinkWithPayment