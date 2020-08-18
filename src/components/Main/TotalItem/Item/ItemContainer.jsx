import {openProductAC, setItemsAC} from "../../../../Redux/mainReducer";
import {connect} from "react-redux";
import Item from "./Item";

let mapStateToProps = (state) => {
    return {
        products: state.mainPage.Part,
        clearObj: state.mainPage.Part,
        IP:state.mainPage.IP
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setItems: (items) => {
            dispatch(setItemsAC(items));
        },
        openProduct: (ID) => {
            dispatch(openProductAC(ID))

        }
    }
}
const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item)
export default ItemContainer;
