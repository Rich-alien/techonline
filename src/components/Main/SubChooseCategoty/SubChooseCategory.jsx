import React from 'react';
import style from './SubChooseCategory.module.css'
import SubCategoryItemContainer from "./SubCategoryItem/SubCategoryItemContiner";

class SubChooseCategory extends React.Component {
    goBack = () => {
        this.props.goBack();
    }

    render() {
        return (
            <div style={{display:this.props.subCategoryDisplay}} className={style.container}>
                <div className={style.underText}>
                    <img src={require("../../../assets/svg-icon/bulb.svg")} alt="bulb"/>
                    <p className={style.carText}>
                        {
                            this.props.titleUnderBlock
                        }
                    </p>
                </div>
                    <div className={style.top}>
                        <SubCategoryItemContainer/>
                    </div>
            </div>
        )
    }
}


export default SubChooseCategory;
