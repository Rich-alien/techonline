import {openCategory, setCarAC} from "../../../../Redux/mainReducer";
import {connect} from "react-redux";
import CarItem from "./CarItem";
let mapStateToProps = (state) => {
    return {
        products: state.mainPage.CarItems,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        openCategoryNow: () => {
            dispatch(openCategory());
        },
        setCar: (items) => {
            dispatch(setCarAC(items));
        }

    }
}
const CarItemContainer = connect(mapStateToProps, mapDispatchToProps)(CarItem);
export default CarItemContainer;
