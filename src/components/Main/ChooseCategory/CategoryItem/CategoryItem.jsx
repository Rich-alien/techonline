import React from 'react';
import style from './CategoryItem.module.css'


const CategoryItem = (props) => {
    let onOpenSubCategoryNow=()=>{
        props.openSubCategoryNow();
    }
    return (
        <button onClick={onOpenSubCategoryNow} className={style.container}>

                {props.Category}

        </button>
    )
}

export default CategoryItem;
