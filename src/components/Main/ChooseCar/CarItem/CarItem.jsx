import React from 'react';
import style from './CarItem.module.css'


const CarItem = (props) => {
    let onOpenCategoryNow=() =>{
        props.openCategoryNow();
    }
    return (
        <div onClick={onOpenCategoryNow} className={style.container}>

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
