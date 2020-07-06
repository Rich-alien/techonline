import React from 'react';
import style from './CarItem.module.css'


const CarItem = (props) => {
    return (
        <div className={style.container}>
            <div className={style.CarName}>
                {props.CarName}
            </div>
            <div className={style.CarImg}>
                {props.CarImg}

            </div>
            <button className={style.btn}>
                Выбрать
            </button>
        </div>
    )
}

export default CarItem;
