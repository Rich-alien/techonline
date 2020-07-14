import React from 'react';
import style from './CategoryItem.module.css'


const CategoryItem = (props) => {
    return (
        <button  className={style.container}>

                {props.Category}

        </button>
    )
}

export default CategoryItem;
