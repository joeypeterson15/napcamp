import { createReview } from '../../store/reviews';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getReviews } from '../../store/reviews';

import "./Reviews.css"

import { useEffect, useState } from 'react';

function Reviews ({ reviews, spotId }) {


    const dispatch = useDispatch();
    const history = useHistory();
    const [review, setReview] = useState('')
    const [reviewCount, setReviewCount] = useState(0)

    const findReviewCount =
         (reviews) => {
            let count = 0;
            for (let i = 0; i < reviews.length; i++) {
                count ++;
            }
            setReviewCount(count);
        }


    const submitReview = async (e) => {
        e.preventDefault();

        const payload = {
            content: review,
        }

        dispatch(createReview(payload, spotId))

        let createdReview;
        if (createdReview) {
            history.push(`/spots/${spotId}`);
        }
    }

    return (
        <>
            <div className="reviews-container">
                <div id="review-heading" className="text">
                   {reviewCount} Reviews
                </div>
                <form onSubmit={submitReview} className="add-review-form">
                {/* <input type='hidden' name='_csrf' value={csrfToken} ></input> */}
                    <textarea value={review} onChange={(e) => setReview(e.target.value)} id="text-submit-review" placeholder="have you slept there? Leave a review for fellow napcampers!" cols="75" rows="15" ></textarea>
                    <button type="submit" id="review-button">POST</button>
                </form>
                <div className="reviews-detail-page">
                    {reviews.map((review) => (
                        <div>
                            <p className="text review-text">{review.content}</p>
                        </div>
                    ))}
                    <div className="div-lines"></div>
                </div>

            </div>
        </>
    )
}

export default Reviews;
