import React from 'react';
import {closeTitle} from "../../../Redux/mainReducer";
import TotalItem from "./TotalItem";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        ObjItem: state.mainPage.ObjItem,
        styleDisplay:state.mainPage.styleBlock.totalItem,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        goBack: () => {
            dispatch(closeTitle());
        }
    }
}
const TotalItemContainer = connect(mapStateToProps, mapDispatchToProps)(TotalItem)
export default TotalItemContainer;
