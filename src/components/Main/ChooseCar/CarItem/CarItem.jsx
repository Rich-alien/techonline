import React from 'react';
import style from './CarItem.module.css'
import carImg from '../../../../assets/images/ladaVesta2.png'
// import * as axios from "axios";
import Carousel from "react-elastic-carousel";
import {NavLink} from "react-router-dom";

class CarItem extends React.Component {
    breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 850, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
    ]

    render() {
        return (
            <div className={style.container}>
                <Carousel breakPoints={this.breakPoints}>
                    {
                        this.props.products.map((u, index) =>
                                <NavLink to='/category' className={style.containerItem} onClick={() => {
                                    this.props.openCategory(u.id)
                                }} key={index}>
                                    <div className={style.carContainer}>
                                        <img className={style.imgCar} src={carImg} alt="love"/>
                                        <div className={style.CarNameBlock}>
                                            <h1 className={style.CarName}>{
                                                u.name
                                            }</h1>
                                        </div>
                                    </div>

                                </NavLink>
                            //реализовать круглый карусельку для прокрутки машин, боковые уменьшены
                            //добавить промокоды !
                        )}
                </Carousel>
            </div>

        )
    }
}

export default CarItem;
