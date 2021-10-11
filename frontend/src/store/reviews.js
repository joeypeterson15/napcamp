import Cookies from 'js-cookie';
import { restoreCSRF } from "./csrf"
import { csrfFetch } from './csrf';

const LOAD = 'reviews/LOAD'
const ADD_REVIEW = 'reviews/ADD_REVIEW'


//---- ACTIONS ----

//ACTION FOR GETTING REVIEWS
const load = list => ({
    type: LOAD,
    list,
})

//ACTION FOR ADDING A REVIEW
const addOneReview = review => ({
    type: ADD_REVIEW,
    review,
})

//GET ALL REVIEWS
export const getReviews = (spotId) => async dispatch => {
    const response = await fetch(`/api/reviews/${spotId}`)

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list))
    }
}

//ADD A REVIEW
export const createReview = (payload, spotId) => async dispatch => {
    const token = Cookies.get('XSRF-TOKEN');
    const response = await fetch(`/api/reviews/${spotId}`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'XSRF-TOKEN': `${token}`
      },
      body: JSON.stringify({...payload, spotId})
    })
    if (response.ok) {
      const review = await response.json()
      dispatch(addOneReview(review))
    }
  }


//---- REVIEWS REDUCER ----

const initialState = {
    // reviews: []
}
const reviewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD: {
            const allReviews = {};
            action.list.forEach(review => {
                allReviews[review.id] = review
            });
            return {
                ...allReviews,
                ...state,
            }
        }
        case ADD_REVIEW: {
            const newState = {
                ...state,
                [action.review.id]: action.review
            }
            return newState;
        }
        default:
        return state;
    }
}

export default reviewsReducer;
