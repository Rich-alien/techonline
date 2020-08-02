import React from 'react';
import style from './CategoryItem.module.css'
import * as axios from "axios";


class CategoryItem extends React.Component {
    componentDidMount() {
        axios.get("http://192.168.1.104:3000/Category").then(response => {
            this.props.setCategory(response.data)
        });
    }



    render() {
        return (
            <div className={style.container}>
                {
                    this.props.products.map(u =>
                        <button onClick={()=>{this.props.openSubCategory(u.id)}} className={style.containerItem} key={u.id}>
                        {
                            u.name
                        }
                    </button>)
                }
            </div>
        )
    }
}


export default CategoryItem;
