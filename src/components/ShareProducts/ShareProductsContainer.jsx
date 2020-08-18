import {connect} from "react-redux";
import ShareProducts from "./ShareProducts";

let mapStateToProps = (state) => {
    return {
        IP:state.mainPage.IP
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {}
// }
const ShareProductsContainer = connect(mapStateToProps)(ShareProducts);

export default ShareProductsContainer