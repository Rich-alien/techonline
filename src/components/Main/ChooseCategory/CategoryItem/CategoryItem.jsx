import React from 'react';
import style from './CategoryItem.module.css'
import {openSubCategory} from "../../../../Redux/mainReducer";


const CategoryItem = (props) => {
    let openSubCategoryNow=()=>{
        props.dispatch(openSubCategory())
    }
    return (
        <button onClick={openSubCategoryNow} className={style.container}>

                {props.Category}

        </button>
    )
}

export default CategoryItem;
