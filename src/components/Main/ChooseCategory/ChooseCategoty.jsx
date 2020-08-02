import React from 'react';
import style from './ChooseCategory.module.css'
import CategoryItemContainer from "./CategoryItem/CategoryItemContainer";

class ChooseCategory extends React.Component {
    goBack = () => {
        this.props.goBack();
    }

    render() {
        return (
            <div style={{display: this.categoryDisplay}} className={style.container}>
                <div className={style.underText}>
                    <img src={require("../../../assets/svg-icon/bulb.svg")} alt="bulb"/>
                    <p className={style.carText}>
                        {
                            this.props.titleUnderBlock
                        }
                    </p>
                </div>

                <CategoryItemContainer/>
            </div>
        )
    }
}

export default ChooseCategory;
