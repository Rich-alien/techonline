import React from "react";
import style from "./Item.module.css"
import * as axios from "axios";
import {NavLink} from "react-router-dom";


class Item extends React.Component {
    componentDidMount() {
        while (this.props.clearObj.length > 0) {
            this.props.clearObj.pop();
        }
        axios.get("http://192.168.1.101:3000/Part").then(response => {
            this.props.setItems(response.data)
        });
    }

    render() {
        return (
            <div className={style.container}>
                {

                    this.props.products.map(u =>
                        <NavLink to={'/product/' + u.id} key={u.id} onClick={() => {
                            this.props.openProduct(u.id)
                        }} className={style.blockContainer}>
                            <div className={style.ObjImg}>
                                {/*<img src={u.images[0].url} alt="запчасть"/>*/}
                                <img className={style.img} src={require("../../../../assets/images/productImg.png")}
                                     alt="запчасть"/>
                                {/*{*/}
                                {/*    console.log(u.images)*/}
                                {/*}*/}
                            </div>
                            <div className={style.ObjName}>
                                {

                                    u.name
                                }
                            </div>
                            <div className={style.ObjPrice}>
                                {
                                    u.price
                                }
                            </div>
                        </NavLink>
                    )
                }
            </div>
        )
    }

}

export default Item