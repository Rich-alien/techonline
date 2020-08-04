import React from "react";
import style from './SubCategoryItem.module.css'
import * as axios from "axios";
import {NavLink} from "react-router-dom";


class SubCategoryItem extends React.Component {
    componentDidMount() {
        while (this.props.clearObj.length > 0) {
            this.props.clearObj.pop();
        }
        let ID = this.props.IDsc
        if (this.props.products.length === 0) {
            axios.get("http://192.168.1.101:3000/Category").then(response => {
                this.props.setSubCategory(response.data[ID].subcategory)
            });
        }
    }



    render() {
        return (
            <NavLink to='/cart' className={style.Subcontainer}>
                {
                    this.props.products.map(u =>
                        <button key={parseInt(u.id, 10)} onClick={()=>{this.props.openTitle(u.id)}} className={style.SubcontainerItem}>
                        <p className={style.text}>
                            {
                                u.name
                            }
                        </p>
                        </button>)
                }
            </NavLink>
        )
    }
}

export default SubCategoryItem