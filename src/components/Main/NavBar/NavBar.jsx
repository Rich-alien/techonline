import React from "react";
import style from "./NavBar.module.css"

const NavNar = () => {
    return (
        <div className={style.container}>
            <nav className={style.nav}>
                <div className={style.logo}>
                    SLADA
                </div>
                <form className={style.searchWidth}>
                    <input className={style.search} type="search" name="q" placeholder="Поиск по сайту"/>
                    {/*<input type="submit" value="Найти"/>*/}
                    <button className={style.btnSearch}>
                        <img src="https://img.icons8.com/android/24/000000/search.png" alt={'btn search'}/>
                    </button>
                </form>
                <button className={`${style.btnFavorite} ${style.btn}`}>
                    {/*<img className={style.imgBtn} src="https://img.icons8.com/color/48/000000/filled-like.png"*/}
                    {/*     alt={'btn Favorite'}/>*/}

                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="44"
                         height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7"/>
                    </svg>
                </button>
                <button className={`${style.btnCart} ${style.btn}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-basket" width="44"
                         height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <polyline points="7 10 12 4 17 10"/>
                        <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8Z"/>
                        <circle cx="12" cy="15" r="2"/>
                    </svg>
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