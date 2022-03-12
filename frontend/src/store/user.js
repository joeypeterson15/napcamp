
import { csrfFetch } from './csrf'


const LOAD = 'user/LOAD'
const ADD = 'user/ADD'
const DELETE = 'user/DELETE'




//ACTION FOR GETTING BOOKINGS

const load = user => ({
    type: LOAD,
    user
})




// const addOneSave = user => ({
//     type: ADD,
//     user
// })



// const deleteOneSave = id => ({
//     type: DELETE,
//     id
// })




export const getUserData = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/users/${userId}`)

    if(response.ok) {
        const user = await response.json();
        dispatch(load(user))
    }
}





const initialState = {

}

const userReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case LOAD: {
            return action.user
        }
        // case ADD: {
        //     const newState = {
        //         ...state,
        //         [action.save.id]: action.save
        //     }
        //     return newState;
        // }
        // case LOAD: {
        //     const newState = {...state}
        //     delete newState[action.id]
        //     return newState;
        // }

        default:
        return state;
    }
}

export default userReducer;
