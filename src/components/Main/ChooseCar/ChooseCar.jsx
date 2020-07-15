import React from 'react';
import style from './ChooseCar.module.css'
import CarItem from "./CarItem/CarItem";

const ChooseCar = (props) => {

    let CarItems = props.data.map((e, id) => <CarItem
        dispatch={props.dispatch}
        key={id}
        id={e.id}
        CarName={e.CarName}
        CarImg={e.CarImg}
    />);
    return (
        <div className={style.container}>
            {
                CarItems
            }

        </div>


    )
}

export default ChooseCar;
