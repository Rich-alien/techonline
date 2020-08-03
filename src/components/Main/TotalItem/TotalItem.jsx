import React from 'react';
import style from './TotalItem.module.css';
import ItemContainer from "./Item/ItemContainer";
// заменить sortUp and SortDown на иконки


class TotalItem extends React.Component{


     goBackNow = ()=>{
        this.props.goBack();
    }
    render() {
        return (
            <div  className={style.container}>
                <div className={style.SettingBar}>
                    <div className={style.sort}>
                        <button className={`${style.btn} ${style.StanDart}`}>
                            {/*изменить className*/}
                            а....я
                        </button>
                        <div>
                            {/*<div className={style.btn} onClick={this.goBackNow}>*/}
                            {/*    Вернуться назад*/}
                            {/*</div>*/}
                        </div>
                        <div>
                            <button className={`${style.btn} ${style.sortUp}`}>
                                по цене, дорогие
                            </button>
                            <button className={`${style.btn} ${style.sortDown}`}>
                                по цене, дешевые
                            </button>
                        </div>

                    </div>

                </div>
                <div className={style.Block}>
                    <ItemContainer/>
                </div>

                {/*<div className={style.catalog}>*/}
                {/*    {*/}
                {/*        this.ElementItem*/}
                {/*    }*/}
                {/*</div>*/}

            </div>
        )
    }
}



export default TotalItem;
