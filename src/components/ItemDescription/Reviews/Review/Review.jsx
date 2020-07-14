import React from "react";
import style from "./Review.module.css"

const Review = (props)=>{
    return(
        <div className={style.container}>
            <div className={style.topReview}>
               <div>
                   {
                       props.author
                   }
               </div>
               <div >
                   {
                       props.star
                   }
               </div>
            </div>
            <div className={style.bottomReview}>
                {
                    props.msg
                }
            </div>

        </div>
    )
}
export default Review;