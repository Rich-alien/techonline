import {openSubCategoryAC, setCategoryAC} from "../../../../Redux/mainReducer";
import CategoryItem from "./CategoryItem";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        products: state.mainPage.Category,
        clearObj: state.mainPage.SubCategory,
        IP:state.mainPage.IP,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        openSubCategory: (categoryID) => {
            dispatch(openSubCategoryAC(categoryID));
        },
        setCategory: (items) => {
            dispatch(setCategoryAC(items));
        }

    }
}
const CategoryItemContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
export default CategoryItemContainer;
