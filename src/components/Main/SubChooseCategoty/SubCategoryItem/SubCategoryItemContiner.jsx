import {openTitleAC, setSubCategoryAC} from "../../../../Redux/mainReducer";
import SubCategoryItem from "./SubCategoryItem";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        products: state.mainPage.SubCategory,
        IDsc:state.mainPage.SubCategoryID,
        clearObj: state.mainPage.Part,
        IP:state.mainPage.IP
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        openTitle: (subCategoryID) => {
            dispatch(openTitleAC(subCategoryID));
        },
        setSubCategory: (items) => {
            dispatch(setSubCategoryAC(items));
        }

    }
}
const SubCategoryItemContainer = connect(mapStateToProps, mapDispatchToProps)(SubCategoryItem);

export default SubCategoryItemContainer