import {closeCategory, openSubCategory} from "../../../Redux/mainReducer";
import ChooseCategory from "./ChooseCategoty";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        category: state.mainPage.category,
        styleDisplay: state.mainPage.styleBlock.categoryDisplay,
        titleUnderBlock: state.mainPage.titleUnderBlock.titleChooseCategory,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        goBack: () => {
            dispatch(closeCategory());
        },
        openSubCategoryNow: () => {
            dispatch(openSubCategory());
        }
    }
}
const ChooseCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(ChooseCategory);

export default ChooseCategoryContainer;
