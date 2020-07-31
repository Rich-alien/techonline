import React from "react";
import style from "./NavBar.module.css"
import CartContainer from "../Cart/CartContainer";
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    let openShoppingCartNow = () => {
        props.openShoppingCartNow();
    }
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
                    <NavLink to='/search'>
                        <button className={style.btnSearch}>
                            <img src={require("../../assets/svg-icon/search.svg")} alt=""/>
                        </button>
                    </NavLink>
                </form>
                <NavLink className={style.linkLogo} to='/product'>
                    <div className={style.logo}>
                        ITEM
                    </div>
                </NavLink>
                {/*<CSSTransitionGroup></CSSTransitionGroup>*/}
                <button onClick={openShoppingCartNow} className={`${style.btnCart} ${style.btn}`}>
                    <img src={require("../../assets/svg-icon/shopping-cart.svg")} alt=""/>
                    <p className={style.price}>{
                        props.CartMoney
                    }</p>
                    <p className={style.currency}>P</p>
                </button>
                <CartContainer store={props.store}/>
                {/*    заменить картинки для btnFavorite and btnCart*/}
            </nav>
        </div>
    )
}
export default NavBar;