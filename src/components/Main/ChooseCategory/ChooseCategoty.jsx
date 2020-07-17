import React from 'react';
import style from './ChooseCategory.module.css'
import CategoryItem from "./CategoryItem/CategoryItem";
import {closeCategory} from "../../../Redux/mainReducer";
// import ButtonClose from "../../CloseButton/ButtonClose";
import closeBtnSvg from "../../.././close.svg"

const ChooseCategory = (props) => {
    let item = props.category.map(e=><CategoryItem
        dispatch={props.dispatch}
        key={e.id}
        Category={e.Category}
    />);
    let styleDisplay = props.categoryDisplay;
    let goBack=()=>{
        props.dispatch(closeCategory())
    }
    return (
        <div style={{display: styleDisplay}} className={style.container}>
            <div className={style.underBlock}>

                <div className={style.text}>
                    {
                        props.titleUnderBlock.titleChooseCategory
                    }
                </div>

                    <img onClick={goBack} className={style.btn_svg} src={closeBtnSvg} alt="btn-back"/>

            </div>
            <div  className={style.categoryContainer}>
                {
                    item
                }
            </div>

        </div>
    )
}

export default ChooseCategory;
