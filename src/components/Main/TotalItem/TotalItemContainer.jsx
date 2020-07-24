import React from 'react';
import {closeTitle} from "../../../Redux/mainReducer";
import TotalItem from "./TotalItem";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
return{
    mainPage :state.mainPage
}
}
let mapDispatchToProps = (dispatch) => {
    return{
        goBack : () => {
            dispatch(closeTitle());
        }
    }
}
const TotalItemContainer = connect(mapStateToProps, mapDispatchToProps)(TotalItem)
export default TotalItemContainer;
