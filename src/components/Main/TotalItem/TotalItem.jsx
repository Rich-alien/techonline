import React from 'react';
import style from './TotalItem.module.css'
// заменить sortUp and SortDown на иконки
const TotalItem = () => {
    return (
        <div className={style.container}>
        <div className={style.SettingBar}>
            <button className={style.Standart}>
                а....я
            </button>
            <div className={style.sort}>
                <button className={style.sortUp}>
                    по цене, дорогие
                </button>
                <button className={style.sortDown}>
                    по цене, дешевые
                </button>
            </div>
        </div>

        </div>
    )
}

export default TotalItem;
