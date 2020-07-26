import React from 'react';
import style from './Main.module.css'
// import NavBar from "./NavBar/NavBar";
// import ChooseCategoryContainer from "./ChooseCategory/ChooseCategotyContainer";
// import SubChooseCategoryContainer from "./SubChooseCategoty/SubChooseCategoryContainer";
// import TotalItemContainer from "./TotalItem/TotalItemContainer";
// import ChooseCarContainer from "./ChooseCar/ChooseCarContainer";
// import ItemDescription from "../ItemDescription/ItemDescription";
import ItemDescriptionContainer from "../ItemDescription/ItemDescriptionContainer";
import NavBarContainer from "./NavBar/NavBarContainer";
import Footer from "../Footer/Footer";


const Main = (props) => {
    // debugger;
    return (
        <div className={style.main}>
            <NavBarContainer store={props.store}/>
            <ItemDescriptionContainer store={props.store}/>
            {/*<ChooseCarContainer store={props.store}/>*/}
            {/*<ChooseCategoryContainer store={props.store}/>*/}
            {/*<SubChooseCategoryContainer store={props.store}/>*/}
            {/*<TotalItemContainer store={props.store}/>*/}
            <Footer/>
        </div>
    )
}

export default Main;
