import React from 'react';
import style from './TotalItem.module.css';
import Item from "./Item/Item";
import {closeTitle} from "../../../Redux/mainReducer";
// заменить sortUp and SortDown на иконки


const TotalItem = (props) => {
    let ElementItem = props.ObjItem.map(e => <Item
        key={e.id}
        ObjName={e.ObjName}
        ObjImg={e.ObjImg}
        ObjPrice={e.ObjPrice}/>)
    let styleDisplay=props.totalItem;
    let goBack = ()=>{
        props.dispatch(closeTitle());
    }
    return (
        <div style={{display:styleDisplay}} className={style.container}>
            <div className={style.SettingBar}>

                <div className={style.sort}>
                    <button className={`${style.btn} ${style.StanDart}`}>
                        {/*изменить className*/}
                        а....я
                    </button>
                    <div>
                        <div className={style.btn} onClick={goBack}>
                            Вернуться назад
                        </div>
                    </div>
                    <div>
                        <button className={`${style.btn} ${style.sortUp}`}>
                            по цене, дорогие
                        </button>
                        <button className={`${style.btn} ${style.sortDown}`}>
                            по цене, дешевые
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.catalog}>
                {
                    ElementItem
                }
            </div>
        </div>
    )
}

export default TotalItem;
