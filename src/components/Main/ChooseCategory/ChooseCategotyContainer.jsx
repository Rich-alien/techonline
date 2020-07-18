import React from 'react';
import {closeCategory} from "../../../Redux/mainReducer";
import ChooseCategory from "./ChooseCategoty";

const ChooseCategoryContainer = (props) => {

    let goBack = () => {
        props.store.dispatch(closeCategory())
    }
    let state = props.store.getState().mainPage;
    return (
        <ChooseCategory
            store={props.store}
            goBack={goBack}
            category={state.category}
            styleDisplay={state.styleBlock.categoryDisplay}
            titleUnderBlock={state.titleUnderBlock.titleChooseCategory}
        />
    )
}

export default ChooseCategoryContainer;
