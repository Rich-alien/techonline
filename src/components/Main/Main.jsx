import React from 'react';
import style from './Main.module.css'
import NavNar from "./NavBar/NavBar";
// import ChooseCategoryContainer from "./ChooseCategory/ChooseCategotyContainer";
// import SubChooseCategoryContainer from "./SubChooseCategoty/SubChooseCategoryContainer";
// import TotalItemContainer from "./TotalItem/TotalItemContainer";
// import ChooseCarContainer from "./ChooseCar/ChooseCarContainer";
import ItemDescription from "../ItemDescription/ItemDescription";


const Main = (props) => {
    // debugger;
    return (
        <div className={style.main}>
            <NavNar/>
            <ItemDescription store={props.store}/>
            {/*<ChooseCarContainer store={props.store}/>*/}
            {/*<ChooseCategoryContainer store={props.store}/>*/}
            {/*<SubChooseCategoryContainer store={props.store}/>*/}
            {/*<TotalItemContainer store={props.store}/>*/}
        </div>
    )
}

export default Main;
