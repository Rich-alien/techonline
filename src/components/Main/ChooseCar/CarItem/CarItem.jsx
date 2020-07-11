import React from 'react';
import style from './CarItem.module.css'


const CarItem = (props) => {
    let chooseCar=() =>{
        // alert(`${props.id}`)

    }
    return (
        <div onClick={chooseCar} className={style.container}>

            <div className={style.CarImg}>
                {props.CarImg}

            </div>
            <div className={style.CarName}>
                {props.CarName}
            </div>
            {/*<button className={style.btn}>*/}
            {/*    Выбрать*/}
            {/*</button>*/}
        </div>
    )
}

export default CarItem;
