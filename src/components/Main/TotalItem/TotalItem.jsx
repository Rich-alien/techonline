import React from 'react';
import style from './TotalItem.module.css';
import Item from "./Item/Item";
// заменить sortUp and SortDown на иконки
let ObjItem = [
    {ObjName:'Fuck1',ObjImg:'fuck2',ObjPrice:'123rub'},
    {ObjName:'Fuck1',ObjImg:'fuck2',ObjPrice:'123rub'},
    {ObjName:'Fuck1',ObjImg:'fuck2',ObjPrice:'123rub'},
    {ObjName:'Fuck1',ObjImg:'fuck2',ObjPrice:'123rub'},
    {ObjName:'Fuck1',ObjImg:'fuck2',ObjPrice:'123rub'},
]

const TotalItem = () => {
let    ElementItem = ObjItem.map(e=> <Item ObjName={e.ObjName} ObjImg={e.ObjImg} ObjPrice={e.ObjPrice}/>)
    return (
        <div className={style.container}>
        <div className={style.SettingBar}>

            <div className={style.sort}>
                <button className={`${style.btn} ${style.StanDart}`}>
                    {/*изменить className*/}
                    а....я
                </button>
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
            {
                ElementItem
            }
        </div>
    )
}

export default TotalItem;
