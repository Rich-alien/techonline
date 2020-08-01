import React from 'react';
import style from './ChooseCar.module.css'
import CarItemContainer from "./CarItem/CarItemContainer";


class ChooseCar extends React.Component{
    render() {
        return (
            <div style={{display: this.props.styleDisplay}} className={style.container}>


                <div className={style.carContainer}>
                    <div className={style.text}>
                        <img src={require("../../../assets/svg-icon/bulb.svg")} alt="bulb"/>

                        <p className={style.carText}>
                            {
                                this.props.titleUnderBlock
                            }
                        </p>
                    </div>
                   <CarItemContainer/>
                </div>

            </div>


        )
    }
}


export default ChooseCar;
