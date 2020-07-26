
import ItemDescription from "./ItemDescription";
import {downCount, upCount, addInCart,} from "../../Redux/mainReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        viewProduct :state.mainPage.viewProduct,
        blur:state.mainPage.styleBlock.blur,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
         upCountNow : () => {
            dispatch(upCount());
        },
         downCountNow : () => {
            dispatch(downCount());
        },
         addInCartNow : () => {
            dispatch(addInCart())
        },
    }
}
const ItemDescriptionContainer =  connect(mapStateToProps,mapDispatchToProps)(ItemDescription);

export default ItemDescriptionContainer;