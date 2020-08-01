import React from 'react';
import style from '../Main/Main.module.css'
import ChooseCarContainer from "../Main/ChooseCar/ChooseCarContainer";
import ChooseCategoryContainer from "../Main/ChooseCategory/ChooseCategotyContainer";
import SubChooseCategoryContainer from "../Main/SubChooseCategoty/SubChooseCategoryContainer";
import TotalItemContainer from "../Main/TotalItem/TotalItemContainer";


const ProductView = () => {
    return (
        <div className={style.main}>
            <ChooseCarContainer/>
            <ChooseCategoryContainer/>
            <SubChooseCategoryContainer/>
            <TotalItemContainer/>
        </div>
    )
}

export default ProductView;
