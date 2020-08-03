import React from "react";
import style from './SubCategoryItem.module.css'
import * as axios from "axios";
import {NavLink} from "react-router-dom";


class SubCategoryItem extends React.Component {
    componentDidMount() {
        let ID = this.props.IDsc
        if (this.props.products.length === 0) {
            axios.get("http://localhost:3000/Category").then(response => {
                this.props.setSubCategory(response.data[ID].subcategory)
            });
        }
    }

    openTitleNow = () => {
        this.props.openTitle();
    }

    render() {
        return (
            <NavLink to='/cart' className={style.Subcontainer}>
                {
                    this.props.products.map(u =>
                        <button key={parseInt(u.id, 10)} onClick={this.openTitleNow} className={style.SubcontainerItem}>
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