import React from 'react';
import style from './CarItem.module.css'
import carImg from '../../../../assets/images/ladaVesta2.png'
import * as axios from "axios";
import Swiper from 'react-id-swiper';
import "../../../../../node_modules/swiper/swiper-bundle.css"

class CarItem extends React.Component {
    componentDidMount() {
        axios.get("http://192.168.1.104:3000/Car").then(response => {
            this.props.setCar(response.data)
        });
    }

    onOpenCategory = () => {
        this.props.openCategoryNow();
    }
    params = {
        effect: 'coverflow',
        spaceBetween: 30,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        }
    }

    render() {
        return (

            <div className={style.container}>
                <Swiper  {...this.params} >
                    {this.props.products.map(u => <div key={u.id}>
                        <img className={style.imgCar} src={carImg} alt="love"/>
                        <img className={style.imgCar} src={carImg} alt="love"/>
                        <img className={style.imgCar} src={carImg} alt="love"/>
                        {/*<div className={style.CarName}>*/}
                        {/*    <h1 className={style.CarNameH}>*/}
                        {/*        {*/}
                        {/*            u.name*/}
                        {/*        }*/}
                        {/*    </h1>*/}
                        {/*</div>*/}
                    </div>)}
                </Swiper>
            </div>

        )
    }
}

// return (
//     <div onClick={this.onOpenCategory} className={style.container}>
//         {
//             this.props.products.map(u => <div key={u.id}>
//                 <div className={style.carContainer}>
//                     <div className={style.CarImg}>
//                         <img className={style.imgCar} src={carImg} alt="love"/>
//                     </div>

//                 </div>
//             </div>)
//         }
//     </div>
// )

export default CarItem;
