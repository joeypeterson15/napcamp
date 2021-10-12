import Cookies from 'js-cookie';


const LOAD = 'bookings/LOAD'
const ADD_BOOKING = 'bookings/ADD_BOOKING'
const DELETE_BOOKING ='bookings/DELETE_BOOKING'



//ACTION FOR GETTING BOOKINGS

const load = bookings => ({
    type: LOAD,
    bookings
})



//ACTION FOR CREATING A BOOKING

const addOneBooking = booking => ({
    type: ADD_BOOKING,
    booking
})

//ACTION FOR DELETING A BOOKING

const deleteOneBooking = booking => ({
    type: DELETE_BOOKING,
    booking
})



export const getBookings = (userId) => async dispatch => {
    const response = await fetch(`/api/bookings/${userId}`)

    if(response.ok) {
        const bookings = await response.json();
        dispatch(load(bookings))
    }
}




//THUNK ACTION CREATING A BOOKING

export const createBooking = (payload, spotId, userId) => async dispatch => {

    const token = Cookies.get('XSRF-TOKEN');
    const response = await fetch(`/api/bookings/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'XSRF-TOKEN': `${token}`
          },
        body: JSON.stringify({...payload, spotId, userId})
    })

    if (response.ok) {
        const booking = await response.json()
        dispatch(addOneBooking(booking))
    }
}


export const deleteBooking = (spotId, userId) => async dispatch => {
    const token = Cookies.get('XSRF-TOKEN');
    const response = await fetch(`/api/bookings/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json',
            'XSRF-TOKEN': `${token}`
          },
          body: JSON.stringify({ spotId })
    })

    if (response.ok) {
        const bookings = await response.json()
        dispatch(load(bookings))
    }
}

const initialState = {

}

const bookingsReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case LOAD: {
            const allBookings = {};
            action.bookings.forEach(booking => {
                allBookings[booking.id] = booking
            });
            return {
                ...allBookings,
                ...state,
            }
        }
        case ADD_BOOKING: {
            const newState = {
                ...state,
                [action.booking.id]: action.booking
            }
            return newState;
        }
        default:
        return state;
    }
}

export default bookingsReducer;
