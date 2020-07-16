import React from 'react';
import style from './SubChooseCategory.module.css'
import SubCategoryItem from "./SubCategoryItem/SubCategoryItem";
import {closeSubCategory} from "../../../Redux/state";
import closeBtnSvg from "../../../close.svg";


const SubChooseCategory = (props) => {
    let item = props.SubCategory.map(e => <SubCategoryItem
        key={e.id}
        SubCategoryName={e.SubCategoryName}
        dispatch={props.dispatch}
    />)
    let styleDisplay = props.subCategoryDisplay;
    let goBack =()=>{
        props.dispatch(closeSubCategory())
    }
    return (
        <div style={{display: styleDisplay}} className={style.container}>
            <div className={style.underBlock}>

                <div className={style.text}>
                    {
                        props.titleUnderBlock.titleChooseSubCategory
                    }
                </div>
                <img onClick={goBack} className={style.btn_svg} src={closeBtnSvg} alt="btn-back"/>
            </div>
            <div className={style.categoryContainer}>

                {
                    item
                }
            </div>
        </div>

    )
}

export default SubChooseCategory;
