import React from 'react';
import style from './ChooseCategory.module.css'
import CategoryItem from "./CategoryItem/CategoryItem";


const ChooseCategory = (props) => {
    let item = props.category.map(e=><CategoryItem Category={e.Category} />)
    return (
        <div className={style.container}>
            {
                item
            }
        </div>
    )
}

export default ChooseCategory;
