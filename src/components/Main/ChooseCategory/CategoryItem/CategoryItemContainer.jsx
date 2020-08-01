import {openSubCategory, setCategoryAC} from "../../../../Redux/mainReducer";
import CategoryItem from "./CategoryItem";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        products: state.mainPage.Category,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        openSubCategoryNow: () => {
            dispatch(openSubCategory());
        },
        setCategory: (items) => {
            dispatch(setCategoryAC(items));
        }

    }
}
const CategoryItemContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
export default CategoryItemContainer;
