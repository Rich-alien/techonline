import React from "react";
import style from './SubCategoryItem.module.css'
import * as axios from "axios";


class  SubCategoryItem extends React.Component{
    componentDidMount() {
        axios.get("http://192.168.1.104:3000/Subcategory").then(response => {
            this.props.setSubCategory(response.data)
        });
    }
     openTitleNow = () => {
        this.props.openTitle();
    }
    render() {
        return (
            <button onClick={this.openTitleNow} className={style.container}>
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

export default SubCategoryItem