import React from 'react';
import style from '../Main/Main.module.css'
import ChooseCarContainer from "../Main/ChooseCar/ChooseCarContainer";
import ChooseCategoryContainer from "../Main/ChooseCategory/ChooseCategotyContainer";
import SubChooseCategoryContainer from "../Main/SubChooseCategoty/SubChooseCategoryContainer";
import TotalItemContainer from "../Main/TotalItem/TotalItemContainer";


const ProductView = (props) => {
    return (
            <div className={style.main}>
                <ChooseCarContainer store={props.store}/>
                <ChooseCategoryContainer store={props.store}/>
                <SubChooseCategoryContainer store={props.store}/>
                <TotalItemContainer store={props.store}/>
            </div>
    )
}

export default ProductView;
