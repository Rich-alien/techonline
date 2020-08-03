import React from "react";
import style from "./Item.module.css"
import * as axios from "axios";


class Item extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:3000/Part").then(response => {
            this.props.setItems(response.data)
        });
    }
    render() {
        return (
            <div className={style.container}>
                {
                    this.props.products.map(u =>
                        <div key={u.id} className={style.blockContainer}>
                            <div className={style.ObjImg}>
                                {/*<img src={u.images[0].url} alt="запчасть"/>*/}
                                <img className={style.img} src={require("../../../../assets/images/productImg.png")} alt="запчасть"/>
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
                        </div>
                    )
                }
            </div>
        )
    }

}

export default Item