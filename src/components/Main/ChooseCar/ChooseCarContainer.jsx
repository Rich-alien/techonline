import {connect} from "react-redux";
import ChooseCar from "./ChooseCar";
import {openCategory} from "../../../Redux/mainReducer";

let mapStateToProps = (state) => {
    return {
        data: state.mainPage.data,
        styleDisplay: state.mainPage.styleBlock.chooseCar,
        titleUnderBlock: state.mainPage.titleUnderBlock.titleChooseCar,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        openCategoryNow: () => {
            dispatch(openCategory());
        },
    }
}

const ChooseCarContainer = connect(mapStateToProps, mapDispatchToProps)(ChooseCar);

export default ChooseCarContainer;
