import React from 'react';
import style from './SubChooseCategory.module.css'
import SubCategoryItem from "./SubCategoryItem/SubCategoryItem";


const SubChooseCategory = (props) => {
    let item = props.SubCategory.map(e=><SubCategoryItem SubCategoryName={e.SubCategoryName} />)
    return (
        <div className={style.container}>
            {
                item
            }
        </div>
    )
}

export default SubChooseCategory;
