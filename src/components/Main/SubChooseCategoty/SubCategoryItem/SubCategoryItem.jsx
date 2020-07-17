import React from "react";
import style from './SubCategoryItem.module.css'
import {openTitle} from "../../../../Redux/mainReducer";

const SubCategoryItem = (props) => {
    let openTitleNow=()=>{
        props.dispatch(openTitle())
    }
    return(
        <div onClick={openTitleNow} className={style.container}>
            {
                props.SubCategoryName
            }
        </div>
    )
}
export default SubCategoryItem