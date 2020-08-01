import React from 'react';
import style from './CarItem.module.css'
import carImg from '../../../../assets/images/ladaVesta2.png'
import * as axios from "axios";

class CarItem extends React.Component {
    componentDidMount() {
        axios.get("http://192.168.1.104:3000/Car").then(response => {
            this.props.setCar(response.data)
        });
    }

    onOpenCategory = () => {
        this.props.openCategoryNow();
    }

    render() {
        return (
            <div onClick={this.onOpenCategory} className={style.container}>
                {
                    this.props.products.map(u => <div key={u.id}>
                        <div className={style.CarImg}>
                            <img className={style.imgCar} src={carImg} alt="love"/>
                        </div>
                        <div className={style.CarName}>
                            <h1 className={style.CarNameH}>
                                {
                                   u.name
                                }
                            </h1>
                        </div>
                    </div>)
                }





            </div>
        )
    }
}


export default CarItem;
