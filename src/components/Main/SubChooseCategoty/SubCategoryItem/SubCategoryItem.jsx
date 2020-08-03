import React from "react";
import style from './SubCategoryItem.module.css'
import * as axios from "axios";


class SubCategoryItem extends React.Component {
    componentDidMount() {
        let ID = this.props.IDsc
        if (this.props.products.length === 0) {
            axios.get("http://192.168.1.104:3000/Category").then(response => {
                debugger;
                this.props.setSubCategory(response.data[ID].subcategory)
            });
        }
    }

    openTitleNow = () => {
        this.props.openTitle();
    }

    render() {
        return (
            <div className={style.Subcontainer}>
                {
                    this.props.products.map(u =>
                        <button key={parseInt(u.id, 10)} onClick={this.openTitleNow} className={style.SubcontainerItem}>
                            {
                                u.name
                            }
                        </button>)
                }
            </div>
        )
    }
}

export default SubCategoryItem