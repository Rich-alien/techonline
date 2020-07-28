import React from 'react';
import style from './SubChooseCategory.module.css'
import closeBtnSvg from "../../../close.svg";
import SubCategoryItem from "./SubCategoryItem/SubCategoryItem";


const SubChooseCategory = (props) => {
    let item = props.SubCategory.map(e => <SubCategoryItem
        openTotalItem={props.openTotalItemNow}
        key={e.id}
        SubCategoryName={e.SubCategoryName}
        dispatch={props.dispatch}
    />)
    let styleDisplay = props.styleDisplay;
    let goBack =()=>{
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
            <div className={style.categoryContainer}>

                {
                    item
                }
            </div>
        </div>

    )
}

export default SubChooseCategory;
