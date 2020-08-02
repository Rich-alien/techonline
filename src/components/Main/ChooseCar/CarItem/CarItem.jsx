import React from 'react';
import style from './CarItem.module.css'
import carImg from '../../../../assets/images/ladaVesta2.png'
import * as axios from "axios";
import Carousel from "react-elastic-carousel";

class CarItem extends React.Component {
    componentDidMount() {
        axios.get("http://192.168.1.104:3000/Car").then(response => {
            this.props.setCar(response.data)
        });
    }

    onOpenCategory = () => {
        this.props.openCategoryNow();
    }
    breakPoints=[
        {width:1,itemsToShow:1},
        {width:850,itemsToShow:2},
        {width:1200,itemsToShow:3},
    ]
    render() {
        return (
            <div className={style.container}>
                <Carousel breakPoints={this.breakPoints}>
                    {
                        this.props.products.map(u =>
                            <div className={style.containerItem} key={u.id}>
                                <img className={style.imgCar} src={carImg} alt="love"/>
                                <div className={style.CarNameBlock}>
                                    <h1 className={style.CarName}>
                                        {
                                            u.name
                                        }
                                    </h1>
                                </div>
                            </div>
                        )}
                </Carousel>
            </div>

        )
    }
}

export default CarItem;
