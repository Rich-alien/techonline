import React from 'react';
import {closeSubCategory} from "../../../Redux/mainReducer";
import SubChooseCategory from "./SubChooseCategory";


const SubChooseCategoryContainer = (props) => {
    let goBack = () => {
        props.store.dispatch(closeSubCategory())
    }
    let state = props.store.getState().mainPage;
    return (
        <SubChooseCategory
            store={props.store}
            goBack={goBack}
            SubCategory={state.SubCategory}
            styleDisplay={state.styleBlock.subCategoryDisplay}
            titleUnderBlock={state.titleUnderBlock.titleChooseSubCategory}
        />
    )
}

export default SubChooseCategoryContainer;
