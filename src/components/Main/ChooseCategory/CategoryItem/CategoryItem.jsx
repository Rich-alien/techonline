import React from 'react';
import style from './CategoryItem.module.css'
import * as axios from "axios";


class CategoryItem extends React.Component {
    componentDidMount() {
        axios.get("http://192.168.1.104:3000/Category").then(response => {
            this.props.setCategory(response.data)
        });
    }

    onOpenSubCategoryNow = () => {
        this.props.openSubCategoryNow();
    }

    render() {
        return (
            <button onClick={this.onOpenSubCategoryNow} className={style.container}>
                {
                    this.props.products.map(u => <div key={u.id}>
                        {
                            u.name
                        }
                    </div>)
                }
            </button>
        )
    }
}


export default CategoryItem;
