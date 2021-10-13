import Cookies from 'js-cookie';


const LOAD = 'bookings/LOAD'
const ADD_BOOKING = 'bookings/ADD_BOOKING'
const LOAD_AFTER_DELETE = 'bookings/LOAD_AFTER_DELETE'



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

const loadAfterDelete = id => ({
    type: LOAD_AFTER_DELETE,
    id
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
    const response = await fetch(`/api/bookings/${userId}/${spotId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json',
            'XSRF-TOKEN': `${token}`
          },
    })

    if (response.ok) {
        const {bookings, id} = await response.json()
        console.log(bookings)
        dispatch(loadAfterDelete(id))
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
        case LOAD_AFTER_DELETE: {
            // const allBookings = {};
            // action.bookings.forEach(booking => {
            //     allBookings[booking.id] = booking
            // });
            // return {
            //     ...allBookings,
            //     ...state,
            // }
            const newState = {...state}
            delete newState[action.id]
            return newState;
        }
        default:
        return state;
    }
}

export default bookingsReducer;
