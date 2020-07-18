import React from 'react';
import {openSubCategory} from "../../../../Redux/mainReducer";
import CategoryItem from "./CategoryItem";


const CategoryItemContainer = (props) => {

    let openSubCategoryNow = () => {
        props.store.dispatch(openSubCategory())
    }

    return (
        <CategoryItem
            openSubCategoryNow={openSubCategoryNow}
            Category={props.Category}
        />
    )
}

export default CategoryItemContainer;
