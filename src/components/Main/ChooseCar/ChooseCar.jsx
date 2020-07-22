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

              <div className={style.carContainer}>
                  {
                     CarItems
                 }
              </div>

        </div>


    )
}

export default ChooseCar;
