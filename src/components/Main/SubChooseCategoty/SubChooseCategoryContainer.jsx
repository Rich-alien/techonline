import { closeSubCategory} from "../../../Redux/mainReducer";
import SubChooseCategory from "./SubChooseCategory";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        subCategoryDisplay:state.mainPage.styleBlock.subCategoryDisplay,
        titleUnderBlock:state.mainPage.titleUnderBlock.titleChooseSubCategory

    }
}
let mapDispatchToProps = (dispatch) => {
    return{
      goBack:()=>{
          dispatch(closeSubCategory())
      }
    }
}
const SubChooseCategoryContainer =  connect(mapStateToProps,mapDispatchToProps)(SubChooseCategory);

export default SubChooseCategoryContainer;
