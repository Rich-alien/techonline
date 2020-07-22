import React from 'react';
import {openCategory} from "../../../../Redux/mainReducer";
import CarItem from "./CarItem";


const CarItemContainer = (props) => {
    let openCategoryNow = () => {
        props.store.dispatch(openCategory());
    }
    // let state = props.store.getState().mainPage;
    return (
        <CarItem
            CarImg={props.CarImg}
            CarName={props.CarName}
            openCategoryNow={openCategoryNow}
        />
    )
}

export default CarItemContainer;
