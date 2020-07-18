import React from 'react';
import {closeTitle} from "../../../Redux/mainReducer";
import TotalItem from "./TotalItem";


const TotalItemContainer = (props) => {
    let goBack = ()=>{
        props.store.dispatch(closeTitle());
    }
    let state = props.store.getState().mainPage;
    return (
        <TotalItem
            store={props.store}
            goBack={goBack}
            ObjItem={state.ObjItem}
            styleDisplay={state.styleBlock.totalItem}
            titleUnderBlock={state.titleUnderBlock.titleTotalItem}
        />
    )
}

export default TotalItemContainer;
