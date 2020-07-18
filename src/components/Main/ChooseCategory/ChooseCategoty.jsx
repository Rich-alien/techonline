import React from 'react';
import style from './ChooseCategory.module.css'
import closeBtnSvg from "../../.././close.svg"
import CategoryItemContainer from "./CategoryItem/CategoryItemContainer";

const ChooseCategory = (props) => {
    let item = props.category.map(e=><CategoryItemContainer
        store={props.store}
        key={e.id}
        Category={e.Category}
    />);
    let styleDisplay = props.styleDisplay;
    let goBack=()=>{
        props.goBack();
    }
    return (
        <div style={{display: styleDisplay}} className={style.container}>
            <div className={style.underBlock}>

                <div className={style.text}>
                    {
                        props.titleUnderBlock
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
