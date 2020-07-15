import React from 'react';
import style from './Main.module.css'
import ChooseCar from "./ChooseCar/ChooseCar";
import ChooseCategory from "./ChooseCategory/ChooseCategoty";
import SubChooseCategory from "./SubChooseCategoty/SubChooseCategory";
import TotalItem from "./TotalItem/TotalItem";
import NavNar from "./NavBar/NavBar";
// import Reviews from "../ItemDescription/Reviews/Reviews";


const Main = (props) => {
    return (
        <div className={style.main}>
            <NavNar/>
            {/*<Reviews*/}
            {/*    Reviews={props.DescriptionPage.Reviews}*/}
            {/*    dispatch={props.dispatch}*/}
            {/*/>*/}
            <ChooseCar
                data={props.mainPage.data}
                dispatch={props.dispatch}
            />
            <ChooseCategory
                category={props.mainPage.category}
                categoryDisplay={props.categoryDisplay}
            />
            <SubChooseCategory
                SubCategory={props.mainPage.SubCategory}
            />
            <TotalItem
                ObjItem={props.mainPage.ObjItem}
            />
        </div>
    )
}

export default Main;
