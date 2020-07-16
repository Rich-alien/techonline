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
            <ChooseCar
                titleUnderBlock={props.mainPage.titleUnderBLock}
                data={props.mainPage.data}
                dispatch={props.dispatch}
                chooseCar={props.styleBlock.chooseCar}

            />
            <ChooseCategory
                titleUnderBlock={props.mainPage.titleUnderBLock}
                category={props.mainPage.category}
                dispatch={props.dispatch}
                categoryDisplay={props.styleBlock.categoryDisplay}
            />
            <SubChooseCategory
                titleUnderBlock={props.mainPage.titleUnderBLock}
                SubCategory={props.mainPage.SubCategory}
                dispatch={props.dispatch}
                subCategoryDisplay={props.styleBlock.subCategoryDisplay}
            />
            <TotalItem
                titleUnderBlock={props.mainPage.titleUnderBLock}
                ObjItem={props.mainPage.ObjItem}
                totalItem={props.styleBlock.totalItem}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Main;
