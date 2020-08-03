import React from 'react';
import style from './CategoryItem.module.css'
import * as axios from "axios";
import {NavLink} from "react-router-dom";


class CategoryItem extends React.Component {
    componentDidMount() {
        while (this.props.clearObj.length > 0) {
            this.props.clearObj.pop();
        }
        if (this.props.products.length === 0) {
            axios.get("http://localhost:3000/Category").then(response => {
                this.props.setCategory(response.data)
            });
        }
    }

    render() {
        return (
            <NavLink to='/subCategory' className={style.container}>
                {
                    this.props.products.map(u =>
                        <button onClick={() => {
                            this.props.openSubCategory(u.id)
                        }} className={style.containerItem} key={parseInt(u.id, 10)}>
                            {
                                u.name
                            }
                        </button>)
                }
            </NavLink>
        )
    }
}


export default CategoryItem;
