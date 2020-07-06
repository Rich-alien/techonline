import React from 'react';
import style from './ChooseCar.module.css'
import CarItem from "./CarItem/CarItem";

const ChooseCar = (props) => {

    let CarItems = props.data.map(e => <CarItem CarName={e.CarName} CarImg={e.CarImg}/>);
    return (
        <div className={style.container}>
            {CarItems}
        </div>
    )
}

export default ChooseCar;
