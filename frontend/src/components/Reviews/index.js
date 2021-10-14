import { createReview } from '../../store/reviews';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';

import "./Reviews.css"

import { useEffect, useState } from 'react';

function Reviews ({ reviews, spotId }) {

    const userId = useSelector((state) => state.session?.user?.id);

    const dispatch = useDispatch();
    const history = useHistory();
    const [review, setReview] = useState('')
    const [reviewCount, setReviewCount] = useState(0)


    const countReviews = (reviews) => {
        let count = 0;
        for (let i = 0; i < reviews.length; i++) {
            count ++;
        }
        setReviewCount(count)
        return reviewCount;
    }


    const submitReview = async (e) => {
        e.preventDefault();

        const payload = {
            content: review,
        }
        setReview('')
        dispatch(createReview(payload, spotId, userId))

        let createdReview;
        if (createdReview) {
            history.push(`/spots/${spotId}`);
        }
    }

    return (
        <>
            <div className="reviews-container">
                <div id="review-heading" className="text">
                   {countReviews} Reviews
                </div>
                <form onSubmit={submitReview} className="add-review-form">
                {/* <input type='hidden' name='_csrf' value={csrfToken} ></input> */}
                    <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    id="text-submit-review"
                    placeholder="have you slept there? Leave a review for fellow napcampers!"
                    cols="75"
                    rows="15" >
                    </textarea>
                    <button type="submit" id="review-button">POST</button>
                </form>
                <div className="reviews-detail-page">
                <div className="div-lines"></div>
                    {reviews.map((review) => (
                            <div className="div-lines">
                        <div className="icon-review-container">
                            <img className="review-icon" src="https://i.ibb.co/xL7Nt98/hipcamp-icon.png" alt="hipcamp-icon" ></img>
                            <div className="text review-text">{review.content}</div>
                            {review.userId === userId ?
                            <div className="review-buttons-div"><button className='review-button-delete'>DELETE</button> <button className='review-button-edit'>EDIT</button></div>
                            :
                            <button className="review-buttons">Helpful?</button>}
                        </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Reviews;
