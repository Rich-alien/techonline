import React from "react";
import style from "./ShareProducts.module.css"
import ButtonProduct from "../Button/ButtonProduct";
class ShareProducts extends React.Component {
    render() {
        return (
            <div className={style.container}>
                <ButtonProduct  nameBtn="топ 10"/>
                <ButtonProduct  nameBtn="топ 100"/>
                <ButtonProduct  nameBtn="Акции"/>
                <ButtonProduct  nameBtn="Актуальное"/>
                <ButtonProduct  nameBtn="Спец предложение"/>

            </div>
        )
    }

}

export default ShareProducts;
// {/*className={style.first}*/}
// {/*className={style.second}*/}
// {/*className={style.third}*/}
// {/*className={style.fourth}*/}
// {/*className={style.fifth}*/}