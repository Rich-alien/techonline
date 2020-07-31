import NavBar from "./NavBar";
import {openShoppingCart} from "../../Redux/mainReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        store: state,
        CartMoney: state.mainPage.CartMoney
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        openShoppingCartNow: () => {
            dispatch(openShoppingCart());
        },
    }
}
const NavBarContainer = connect(mapStateToProps,mapDispatchToProps)(NavBar)
export default NavBarContainer;