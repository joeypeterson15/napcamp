import { csrfFetch } from './csrf'

const LOAD = 'reviews/LOAD'
const ADD_REVIEW = 'reviews/ADD_REVIEW'
const LOAD_AFTER_DELETE = 'reviews/LOAD_AFTER_DELETE'
const LOAD_AFTER_UPDATE = 'reviews/LOAD_AFTER_UPDATE'


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


//ACTION FOR DELETING A REVIEW
const loadAfterDelete = id => ({
    type: LOAD_AFTER_DELETE,
    id
})

const loadAfterUpdate = (id, review) => ({
    type: LOAD_AFTER_UPDATE,
    id,
    review
})

//GET ALL REVIEWS
export const getReviews = (spotId) => async dispatch => {
    const response = await fetch(`/api/reviews/${spotId}`)

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list))
    }
}

//THUNK ACTION ADD A REVIEW
export const createReview = (payload, spotId, userId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${spotId}`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({...payload, spotId, userId})
    })
    if (response.ok) {
      const review = await response.json()
      dispatch(addOneReview(review))
    }
  }

  export const deleteReview = (spotId, reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${spotId}/${reviewId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json',
          },
    })
        if (response.ok) {
            const { id } = await response.json()
            dispatch(loadAfterDelete(id))
        }
  }

  export const updateReview = (payload, reviewId, spotId) => async dispatch => {
      const response = await csrfFetch(`/api/reviews/${spotId}/${reviewId}`, {
          method: 'PUT',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify(payload)
      })
      if (response.ok) {
          const { id, review } = await response.json()
          dispatch(loadAfterUpdate(id, review))
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
        case LOAD_AFTER_DELETE: {
            const newState = {...state}
            delete newState[action.id]
            return newState;
        }
        case LOAD_AFTER_UPDATE: {
            const newState = { ...state }
            delete newState[action.id]
            newState[action.id] = action.review
            return newState;
        }
        default:
        return state;
    }
}

export default reviewsReducer;
