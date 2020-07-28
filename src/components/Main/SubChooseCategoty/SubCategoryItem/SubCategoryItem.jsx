import React from "react";
import style from './SubCategoryItem.module.css'

const SubCategoryItem = (props) => {
    let openTitleNow = () => {
        props.openTotalItem();
    }
    return (
        <div onClick={openTitleNow} className={style.container}>
            {
                props.SubCategoryName
            }
        </div>
    )
}
export default SubCategoryItem