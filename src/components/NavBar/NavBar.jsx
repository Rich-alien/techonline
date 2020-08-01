import React from "react";
import style from "./NavBar.module.css"
import CartContainer from "../Cart/CartContainer";
import {NavLink} from "react-router-dom";

class NavBar extends React.Component {
    openShoppingCartNow = () => {
        this.props.openShoppingCartNow();
    }

    render() {
        return (
            <div className={style.container}>
                <nav className={style.nav}>
                    <NavLink className={style.linkLogo} to='/productView'>
                        <div className={style.logo}>
                            SLADA
                        </div>
                    </NavLink>

                    <form className={style.searchWidth}>
                        <input className={style.search} type="search" name="q" placeholder="Поиск по сайту"/>
                    </form>
                    <button className={`${style.btnSearch} ${style.btn}`}>
                        <img src={require("../../assets/svg-icon/search.svg")} alt=""/>
                    </button>
                    {/*добавить всплювающие подсказки*/}
                    <button className={`${style.btnClipboard} ${style.btn} ${style.btnHover}`}>
                        <img src={require("../../assets/svg-icon/clipboard.svg")} alt=""/>
                    </button>

                    <button onClick={this.openShoppingCartNow} className={`${style.btnCart} ${style.btnHover} ${style.btn}`}>
                        <img src={require("../../assets/svg-icon/shopping-cart.svg")} alt=""/>
                        {/*<div className={style.containerCount}>*/}
                        {/*    <p className={style.price}>{*/}
                        {/*        this.props.CartMoney*/}
                        {/*    }</p>*/}
                        {/*    <p className={style.currency}>₽</p>*/}
                        {/*</div>*/}
                    </button>
                    <CartContainer store={this.props.store}/>
                    {/*    заменить картинки для btnFavorite and btnCart*/}
                </nav>
            </div>
        )
    }
}

export default NavBar;