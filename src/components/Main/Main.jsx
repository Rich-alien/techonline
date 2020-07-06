import React from 'react';
import style from './Main.module.css'
import ChooseCar from "./ChooseCar/ChooseCar";
import ChooseCategory from "./ChooseCategory/ChooseCategoty";
import TotalItem from "./TotalItem/TotalItem";


const Main = (props) => {
    return (
        <div className={style.main}>
        <ChooseCar data={props.data}/>
        <ChooseCategory category={props.category} />
        <TotalItem/>
        </div>
    )
}

export default Main;
