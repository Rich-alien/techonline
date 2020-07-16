import React from 'react';
import style from './ChooseCar.module.css'
import CarItem from "./CarItem/CarItem";

const ChooseCar = (props) => {

    let CarItems = props.data.map(e => <CarItem
        dispatch={props.dispatch}
        key={e.id}
        id={e.id}
        CarName={e.CarName}
        CarImg={e.CarImg}
    />);
    let styleDisplay=props.chooseCar;
    return (
        <div style={{display:styleDisplay}} className={style.container}>
          <div className={style.text}>
              {
                  props.titleUnderBlock.titleChooseCar
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
