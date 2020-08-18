import React from "react";
import style from "./NavBar.module.css"
import {NavLink} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/svg-icon/clipboard.svg";
import {ReactComponent as Logo2} from "../../assets/svg-icon/shopping-cart.svg";


class NavBar extends React.Component {
    openShoppingCartNow = () => {
        this.props.openShoppingCartNow();
    }
    onDarkSearch =()=>{
        this.props.darkSearch();
    }
    render() {
        return (
            <div className={style.container} style={{backgroundColor: this.props.DarkTheme.bgc}}>
                <nav className={style.nav}>
                    <NavLink className={style.linkLogo} to='/'>
                        <div style={{color: this.props.DarkTheme.color}} className={style.logo}>
                            SLADA
                        </div>
                    </NavLink>

                    <form className={style.searchWidth}>
                        <input onClick={this.onDarkSearch} className={style.search} type="search" name="q" placeholder="Поиск по сайту"/>
                    </form>
                    <button className={`${style.btnSearch} ${style.btn}`}>
                        <img src={require("../../assets/svg-icon/search.svg")} alt=""/>
                    </button>
                    {/*добавить всплювающие подсказки*/}
                    <button className={`${style.btnClipboard} ${style.btn} ${style.btnHover}`}>
                        {/*style={{stroke:"#ffffff"}}*/}
                        <Logo style={{stroke: this.props.DarkTheme.svgColor}}/>
                    </button>

                    <NavLink to ='/cart' onClick={this.openShoppingCartNow}
                            className={`${style.btnCart} ${style.btnHover} ${style.btn}`}>
                        <Logo2 style={{stroke: this.props.DarkTheme.svgColor}}/>
                        {/*<div className={style.containerCount}>*/}
                        {/*    <p className={style.price}>{*/}
                        {/*        this.props.CartMoney*/}
                        {/*    }</p>*/}
                        {/*    <p className={style.currency}>₽</p>*/}
                        {/*</div>*/}
                        {/*    fix уменьшение корзины */}

                    </NavLink>
                    {/*<CartContainer store={this.props.store}/>*/}
                    {/*    заменить картинки для btnFavorite and btnCart*/}
                </nav>
            </div>
        )
    }
}

export default NavBar;