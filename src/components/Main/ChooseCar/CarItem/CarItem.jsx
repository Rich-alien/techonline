import React from 'react';
import style from './CarItem.module.css'
import carImg from '../../../../assets/images/ladaVesta2.png'

const CarItem = (props) => {
    let onOpenCategory = () => {
        props.onOpenCategoryNow();
    }
    return (
        <div onClick={onOpenCategory} className={style.container}>
            <div className={style.CarImg}>
                <img className={style.imgCar} src={carImg} alt="love"/>
            </div>
            <div className={style.CarName}>
                <h1 className={style.CarNameH}>
                    {
                        props.CarName
                    }
                </h1>
            </div>
        </div>
    )
}

export default CarItem;
