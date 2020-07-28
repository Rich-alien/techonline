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
    let styleDisplaySub = props.styleDisplay;
    let goBack = () => {
        props.goBack();
    }
    return (
        <div style={{display: styleDisplaySub}} className={style.container}>
            <div className={style.underBlock}>
                <div className={style.text}>
                    <div className={style.normal}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bulb" width="44"
                             height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path d="M3 12h1M12 3v1M20 12h1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7"/>
                            <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/>
                            <line x1="9.7" y1="17" x2="14.3" y2="17"/>
                        </svg>

                        <p className={style.carText}>
                            {
                                props.titleUnderBlock
                            }
                        </p>
                    </div>
                    <img onClick={goBack} className={style.btn_svg} src={closeBtnSvg} alt="btn-back"/>
                </div>
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
