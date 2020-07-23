import React from "react";
import ItemDescription from "./ItemDescription";
import {downCount, upCount, addInCart} from "../../Redux/mainReducer";

const ItemDescriptionContainer = (props) => {
    let state = props.store.getState().mainPage;
    let upCountNow = () => {
        props.store.dispatch(upCount());
    }
    let downCountNow = () => {
        props.store.dispatch(downCount());
    }
    let addInCartNow = () => {
        props.store.dispatch(addInCart())
    }
    return (
        <ItemDescription
            addInCartNow={addInCartNow}
            upCountNow={upCountNow}
            downCountNow={downCountNow}
            ObjName={state.viewProduct.ObjName}
            ObjDescription={state.viewProduct.ObjDescription}
            ObjPrice={state.viewProduct.ObjPrice}
            ObjTotalPrice={state.viewProduct.ObjTotalPrice}
            ObjCountView={state.viewProduct.ObjCountView}

        />
    )
}

export default ItemDescriptionContainer;