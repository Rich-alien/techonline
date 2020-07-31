import React from "react";
import style from "./Reviews.module.css"
import Review from "./Review/Review";
// import {addReview, updateNewReviewsText} from "../../../Redux/state";

const Reviews = (props) => {
    let newReviewsElement = React.createRef();
    let ReviewElements = props.Reviews.map((e, id) => <Review
        Reviews={props.Reviews}
        key={id}
        author={e.author}
        star={e.star}
        msg={e.msg}
    />);
    let addReviews = () => {
        props.dispatch(addReview());
    }
    let onMsgChange = () => {
        let text = newReviewsElement.current.value;
        props.dispatch(updateNewReviewsText(text));

    }
    return (

        <div className={style.container}>
            <textarea
                className={style.input}
                onChange={onMsgChange}
                ref={newReviewsElement}
                value={props.newReviewText}
            />
            <button className={style.btnReviews}
                    onClick={addReviews}>
                add
            </button>
            <div>
                {
                    ReviewElements
                }
            </div>
        </div>
    )
}
export default Reviews;