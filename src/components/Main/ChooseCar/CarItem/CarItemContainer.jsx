import React from 'react';
import {openCategory, upCount} from "../../../../Redux/mainReducer";
import {connect} from "react-redux";
import CarItem from "./CarItem";


let mapStateToProps = (state) => {
    return{
        CarImg:state.mainPage.data.CarImg,
        CarName:state.mainPage.data.CarName,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        openCategoryNow : () => {
            dispatch(openCategory());
        },

    }
}
const CarItemContainer =  connect(mapStateToProps,mapDispatchToProps)(CarItem);

export default CarItemContainer;
