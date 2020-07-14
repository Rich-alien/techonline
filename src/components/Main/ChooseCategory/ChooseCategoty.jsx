import React from 'react';
import style from './ChooseCategory.module.css'
import CategoryItem from "./CategoryItem/CategoryItem";


const ChooseCategory = (props) => {
    let item = props.category.map(e=><CategoryItem
        Category={e.Category}
        // stateDisplay = {props.stateDisplay}

    />);
    //props.stateDisplay.categoryDisplay
    // let styleDisplay = 'none';
    let styleDisplay = props.categoryDisplay;
    let inform =()=>{

    }
    return (
        <div className={style.container}>

            <div style={{display: styleDisplay}} >
                {

                    item
                }

            </div>
            <button onClick={inform}></button>
        </div>
    )
}

export default ChooseCategory;
