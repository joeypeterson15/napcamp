
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateReview } from '../../store/reviews'
import './UpdateReviewForm.css'

function UpdateReviewForm ({ review, setShowModal, spot }) {

    const [content, setContent] = useState(review.content)
    const dispatch = useDispatch();
    const submitUpdateReview = (review) => (e) => {
        e.preventDefault()
        const payload = {
            content
        }
        setShowModal(false)
        dispatch(updateReview(payload, review.id, review.spotId))

    }

    return (
        <div className="review-update-form-container">
            <img alt="" id="update-review-form-image" src={spot.imageUrl}></img>
            <form onSubmit={submitUpdateReview(review)}>
                <textarea
                id='update-review-textarea'
                className="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                >
                </textarea>
                <button id="review-button" type="submit">update review</button>
            </form>
        </div>
    )
}

export default UpdateReviewForm;
