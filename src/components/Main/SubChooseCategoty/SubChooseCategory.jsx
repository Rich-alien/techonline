import React from 'react';
import style from './SubChooseCategory.module.css'
import CategoryItem from "./CategoryItem/CategoryItem";


const SubChooseCategory = (props) => {
    let item = props.Category.map(e=><CategoryItem SubCategory={e.SubCategory} />)
    return (
        <div className={style.container}>
            {
                item
            }
        </div>
    )
}

export default SubChooseCategory;
