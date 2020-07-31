import React from 'react';
import style from './ChooseCar.module.css'
import CarItem from "./CarItem/CarItem";

const ChooseCar = (props) => {

    let CarItems = props.data.map(e => <CarItem
        onOpenCategoryNow={props.openCategoryNow}
        key={e.id}
        id={e.id}
        CarName={e.CarName}
        CarImg={e.CarImg}
    />);
    let styleDisplay = props.styleDisplay;
    return (
        <div style={{display: styleDisplay}} className={style.container}>
            <div className={style.text}>
                <img src={require("../../../assets/svg-icon/bulb.svg")} alt="bulb"/>

                <p className={style.carText}>
                    {
                        props.titleUnderBlock
                    }
                </p>
            </div>

            <div className={style.carContainer}>
                {
                    CarItems
                }
            </div>

        </div>


    )
}

export default ChooseCar;
