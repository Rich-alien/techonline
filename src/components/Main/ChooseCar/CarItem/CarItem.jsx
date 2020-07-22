import React from 'react';
import style from './CarItem.module.css'
import carImg from '../../../../img/ladaVesta2.png'

const CarItem = (props) => {
    let onOpenCategoryNow=() =>{
        props.openCategoryNow();
    }
    return (
        <div onClick={onOpenCategoryNow} className={style.container}>

            <div className={style.CarImg}>
                <img className={style.imgCar} src={carImg} alt="love"/>

            </div>
            <div className={style.CarName}>
                <h1 className={style.CarNameH}>{props.CarName}</h1>
            </div>
        </div>
    )
}

export default CarItem;
