import React from 'react';
import style from './Main.module.css'
import ChooseCar from "./ChooseCar/ChooseCar";
import ChooseCategory from "./ChooseCategory/ChooseCategoty";
import SubChooseCategory from "./SubChooseCategoty/SubChooseCategory";
import TotalItem from "./TotalItem/TotalItem";
import NavNar from "./NavBar/NavBar";


const Main = (props) => {
    return (
        <div className={style.main}>
            <NavNar/>
            <ChooseCar data={props.data}/>
            <ChooseCategory category={props.category}/>
            <SubChooseCategory SubCategory={props.SubCategory}/>

            <TotalItem ObjItem={props.ObjItem}/>
        </div>
    )
}

export default Main;
