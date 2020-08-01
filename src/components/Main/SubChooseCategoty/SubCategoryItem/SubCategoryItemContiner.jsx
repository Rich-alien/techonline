import {openTitleAC, setSubCategoryAC} from "../../../../Redux/mainReducer";
import SubCategoryItem from "./SubCategoryItem";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        products: state.mainPage.SubCategory,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        openTitle: () => {
            dispatch(openTitleAC());
        },
        setSubCategory: (items) => {
            dispatch(setSubCategoryAC(items));
        }

    }
}
const SubCategoryItemContainer = connect(mapStateToProps, mapDispatchToProps)(SubCategoryItem);

export default SubCategoryItemContainer