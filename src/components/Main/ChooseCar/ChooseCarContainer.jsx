import {connect} from "react-redux";
import ChooseCar from "./ChooseCar";

let mapStateToProps = (state) => {
    return {
        styleDisplay: state.mainPage.styleBlock.chooseCar,
        titleUnderBlock: state.mainPage.titleUnderBlock.titleChooseCar,
    }
}
let mapDispatchToProps = () => {
    return {

    }
}

const ChooseCarContainer = connect(mapStateToProps, mapDispatchToProps)(ChooseCar);

export default ChooseCarContainer;
