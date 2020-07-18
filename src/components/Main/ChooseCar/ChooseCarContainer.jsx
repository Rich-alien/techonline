import React from 'react';
import ChooseCar from "./ChooseCar";

const ChooseCarContainer = (props) => {
    let state = props.store.getState().mainPage;
    return (
        <ChooseCar
            store={props.store}
            data={state.data}
            styleDisplay={state.styleBlock.chooseCar}
            titleUnderBlock={state.titleUnderBlock.titleChooseCar}
        />
    )
}

export default ChooseCarContainer;
