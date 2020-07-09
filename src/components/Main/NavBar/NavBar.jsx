import React from "react";
import style from "./NavBar.module.css"

const NavNar = () => {
    return (
        <div className={style.container}>
            <nav className={style.nav}>
                <div className={style.logo}>
                    SLADA
                </div>
                <form>
                    <input className={style.search} type="search" name="q" placeholder="Поиск по сайту"/>
                    {/*<input type="submit" value="Найти"/>*/}
                    <button className={style.btnSearch}>
                        <img src="https://img.icons8.com/android/24/000000/search.png" alt={'btn search'}/>
                    </button>
                </form>
                <button className={`${style.btnFavorite} ${style.btn}`}>
                    <img className={style.imgBtn} src="https://img.icons8.com/color/48/000000/filled-like.png"
                         alt={'btn Favorite'}/>
                </button>
                <button className={`${style.btnCart} ${style.btn}`}>
                    <img className={style.imgBtn} src="https://img.icons8.com/officel/40/000000/mine-cart.png"
                         alt={'btn Cart'}/>
                </button>
                {/*    заменить картинки для btnFavorite and btnCart*/}
            </nav>
        </div>
    )
}
//<img src="https://img.icons8.com/officel/40/000000/mine-cart.png"/>
//<img src="https://img.icons8.com/color/48/000000/filled-like.png"/>
//<img src="https://img.icons8.com/android/24/000000/search.png"/> ICON SEARCH ADD LATER
//<img src="https://img.icons8.com/material-rounded/24/000000/shopping-basket-2.png"/> ICON BASKET ADD LATER
//<img src="https://img.icons8.com/metro/26/000000/filled-like.png"/> ICON FAVORITE ADD LATER
//<img src="https://img.icons8.com/material-outlined/26/000000/filled-like.png"/> ICON FAVORITE(EMPTY) ADD LATER
export default NavNar;