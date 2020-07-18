import React from 'react';
import style from './ChooseCar.module.css'
// import CarItem from "./CarItem/CarItem";
import CarItemContainer from "./CarItem/CarItemContainer";

const ChooseCar = (props) => {

    let CarItems = props.data.map(e => <CarItemContainer
        store={props.store}
        key={e.id}
        id={e.id}
        CarName={e.CarName}
        CarImg={e.CarImg}
    />);
    let styleDisplay=props.styleDisplay;
    return (
        <div style={{display:styleDisplay}} className={style.container}>
          <div className={style.text}>
              {
                  props.titleUnderBlock
              }
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
