import ItemDescription from "./ItemDescription";
import {downCount, upCount, addInCart, setViewProductAC,} from "../../Redux/mainReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        product: state.mainPage.Product,
        ID: state.mainPage.IDZ,
        IP:state.mainPage.IP

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        upCountNow: () => {
            dispatch(upCount());
        },
        setViewProduct: (viewProduct) => {
            dispatch(setViewProductAC(viewProduct));
        },
        downCountNow: () => {
            dispatch(downCount());
        },
        addInCartNow: () => {
            dispatch(addInCart())
        },
    }
}
const ItemDescriptionContainer = connect(mapStateToProps, mapDispatchToProps)(ItemDescription);

export default ItemDescriptionContainer;