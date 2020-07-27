import React from 'react';
import {connect} from "react-redux";
import ChooseCar from "./ChooseCar";


let mapStateToProps = (state) => {
    return{
        data:state.mainPage.data,
        styleDisplay:state.mainPage.styleBlock.chooseCar,
        titleUnderBlock:state.mainPage.titleUnderBlock.titleChooseCar,
    }
}

const ChooseCarContainer =  connect(mapStateToProps)(ChooseCar);

export default ChooseCarContainer;
