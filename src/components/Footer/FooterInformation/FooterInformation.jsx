import React from "react";
import style from "./FooterInformation.module.css"
class FooterInformation extends React.Component{
    render() {
        return(
            <div className={style.information}>
                <div className={style.header}>
                    Информация о нас
                </div>
            </div>
        )
    }
}

export default FooterInformation