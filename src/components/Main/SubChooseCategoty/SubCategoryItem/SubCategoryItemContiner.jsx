import React from "react";
import {openTitle} from "../../../../Redux/mainReducer";
import SubCategoryItem from "./SubCategoryItem";

const SubCategoryItemContainer = (props) => {
    let openTitleNow=()=>{
        props.store.dispatch(openTitle())
    }
    return(
       <SubCategoryItem
           openTitleNow={openTitleNow}
           SubCategoryName={props.SubCategoryName}
       />
    )
}
export default SubCategoryItemContainer