import React from "react";
import style from "./ButtonProduct.module.css"

class ButtonProduct extends React.Component {
    constructor(props) {
        super(props);
        this.nameBtn = props.nameBtn;
    }

    render() {
        return (
            <button className={style.container}>
              <p className={style.container__text}>
                  {
                      this.nameBtn
                  }
              </p>
            </button>
        )
    }

}

export default ButtonProduct;