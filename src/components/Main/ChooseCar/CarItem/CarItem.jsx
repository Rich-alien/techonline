import React from 'react';
import style from './CarItem.module.css'


const CarItem = (props) => {
    let reRenderCar=() =>{
        props.openCategory();
    }
    return (
        <div onClick={reRenderCar} className={style.container}>

            <div className={style.CarImg}>
                {props.CarImg}

            </div>
            <div className={style.CarName}>
                {props.CarName}
            </div>
        </div>
    )
}

export default CarItem;
