import React from 'react';
import style from './ChooseCar.module.css'
import CarItemContainer from "./CarItem/CarItemContainer";
import ShareProductsContainer from "../../ShareProducts/ShareProductsContainer";

class ChooseCar extends React.Component {
    render() {
        return (
            <div style={{display: this.props.styleDisplay}} className={style.container}>
                <div className={style.underText}>
                    <img src={require("../../../assets/svg-icon/bulb.svg")} alt="bulb"/>
                    <p className={style.carText}>
                        {
                            this.props.titleUnderBlock
                        }
                    </p>
                </div>
                <div className={style.containerSlider}>
                    <CarItemContainer/>
                </div>
                <ShareProductsContainer/>
            </div>
        )
    }
}

export default ChooseCar;
