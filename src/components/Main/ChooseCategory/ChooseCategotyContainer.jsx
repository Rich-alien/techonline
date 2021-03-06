import {closeCategory} from "../../../Redux/mainReducer";
import ChooseCategory from "./ChooseCategoty";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        categoryDisplay: state.mainPage.styleBlock.categoryDisplay,
        titleUnderBlock: state.mainPage.titleUnderBlock.titleChooseCategory,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        goBack: () => {
            dispatch(closeCategory());
        },
    }
}
const ChooseCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(ChooseCategory);

export default ChooseCategoryContainer;
