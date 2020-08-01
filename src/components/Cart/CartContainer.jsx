import Cart from "./Cart";
import {closeShoppingCart} from "../../Redux/mainReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        Cart: state.mainPage.Cart,
        styleDisplay: state.mainPage.styleBlock,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        closeShoppingCartNow: () => {
            dispatch(closeShoppingCart());
        },
    }
}
const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default CartContainer