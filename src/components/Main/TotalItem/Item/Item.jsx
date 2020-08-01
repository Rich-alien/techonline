import React from "react";
import style from "./Item.module.css"
import * as axios from "axios";


class Item extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:3000/ObjItem").then(response => {
            this.props.setItems(response.data)
        });
    }

    render() {
        return (
            <div className={style.container}>
                {
                    this.props.products.map(u => <div key={u.id}>
                            <div className={style.ObjImg}>
                                {
                                    u.ObjImg
                                }
                            </div>
                            <div className={style.ObjName}>
                                {
                                    u.ObjName
                                }
                            </div>
                            <div className={style.ObjPrice}>
                                {
                                    u.ObjPrice
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