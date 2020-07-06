import React from "react";
import style from './SubCategoryItem.module.css'

const SubCategoryItem = (props) => {
    return(
        <div className={style.container}>
            {
                props.SubCategoryName
            }
        </div>
    )
}
export default SubCategoryItem