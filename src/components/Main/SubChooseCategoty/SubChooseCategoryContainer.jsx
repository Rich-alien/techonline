import React from 'react';
import { closeSubCategory,  openTitle} from "../../../Redux/mainReducer";
import SubChooseCategory from "./SubChooseCategory";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        SubCategory:state.mainPage.SubCategory,
        styleDisplay:state.mainPage.styleBlock.subCategoryDisplay,
        titleUnderBlock:state.mainPage.titleUnderBlock.titleChooseSubCategory

    }
}
let mapDispatchToProps = (dispatch) => {
    return{
      goBack:()=>{
          dispatch(closeSubCategory())
      },
      openTotalItemNow:()=>{
          dispatch(openTitle())
      }
    }
}
const SubChooseCategoryContainer =  connect(mapStateToProps,mapDispatchToProps)(SubChooseCategory);

export default SubChooseCategoryContainer;
