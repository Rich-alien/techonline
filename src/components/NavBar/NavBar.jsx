import React from "react";
import style from "./NavBar.module.css"
import CartContainer from "../Cart/CartContainer";
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
let openShoppingCartNow=()=>{
    props.openShoppingCartNow();
}
    return (
          <div className={style.container}>
              <nav className={style.nav}>
                  <NavLink className={style.linkLogo} to='/productView' >
                  <div className={style.logo}>
                      SLADA
                  </div>
                  </NavLink>
                  <form className={style.searchWidth}>
                      <input className={style.search} type="search" name="q" placeholder="Поиск по сайту"/>
                      <button className={style.btnSearch}>
                          <NavLink to='/search'>
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search"
                                   width="44" height="44" viewBox="0 0 30 30" strokeWidth="1.5" stroke="#2c3e50" fill="none"
                                   strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"/>
                                  <circle cx="10" cy="10" r="7"/>
                                  <line x1="21" y1="21" x2="15" y2="15"/>
                              </svg>
                          </NavLink>
                      </button>

                  </form>
                  {/*<button className={`${style.btnFavorite} ${style.btn}`}>*/}
                  {/*    Понравились*/}
                  {/*    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="44"*/}
                  {/*         height="44" viewBox="0 0 30 30" strokeWidth="1.5" stroke="#2c3e50" fill="none"*/}
                  {/*         strokeLinecap="round" strokeLinejoin="round">*/}
                  {/*        <path stroke="none" d="M0 0h24v24H0z"/>*/}
                  {/*        <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7"/>*/}
                  {/*    </svg>*/}
                  {/*</button>*/}
                  <NavLink className={style.linkLogo} to='/product' >
                      <div className={style.logo}>
                          ITEM
                      </div>
                  </NavLink>
                  {/*<CSSTransitionGroup></CSSTransitionGroup>*/}
                  <button onClick={openShoppingCartNow} className={`${style.btnCart} ${style.btn}`}>

                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart"
                           width="44" height="44" viewBox="0 0 30 30" strokeWidth="1.5" stroke="#2c3e50" fill="none"
                           strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z"/>
                          <circle cx="9" cy="19" r="2"/>
                          <circle cx="17" cy="19" r="2"/>
                          <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2"/>
                      </svg>
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