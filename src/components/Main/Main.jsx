import React from 'react';
import style from './Main.module.css'
import ChooseCarContainer from "./ChooseCar/ChooseCarContainer";
import NavNar from "./NavBar/NavBar";
import ChooseCategoryContainer from "./ChooseCategory/ChooseCategotyContainer";
import SubChooseCategoryContainer from "./SubChooseCategoty/SubChooseCategoryContainer";
import TotalItemContainer from "./TotalItem/TotalItemContainer";


const Main = (props) => {
    // debugger;
    return (
        <div className={style.main}>
            <NavNar/>
            <ChooseCarContainer store={props.store}/>
            <ChooseCategoryContainer store={props.store}/>
            <SubChooseCategoryContainer store={props.store}/>
            <TotalItemContainer store={props.store}/>
        </div>
    )
}

export default Main;
