import NavBar from "./NavBar";
import {darkSearchAC, openShoppingCart} from "../../Redux/mainReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        DarkTheme: state.mainPage.darkTheme,
        CartMoney: state.mainPage.CartMoney
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        openShoppingCartNow: () => {
            dispatch(openShoppingCart());
        },
        darkSearch: () => {
            dispatch(darkSearchAC());
        }
    }
}
const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default NavBarContainer;