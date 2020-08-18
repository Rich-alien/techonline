import {setCarAC} from "../../Redux/mainReducer";
import {connect} from "react-redux";

import Main from "./Main";
let mapStateToProps = (state) => {
    return {
        products: state.mainPage.CarItems,
        ID:state.mainPage.IDZ,
        IP:state.mainPage.IP
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

        setCar: (items) => {
            dispatch(setCarAC(items));
        }

    }
}
const CarItemContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default CarItemContainer;
