
import { Edit } from '@mui/icons-material'
import { csrfFetch } from './csrf'


const LOAD = 'user/LOAD'
const EDIT = 'user/EDIT'
const DELETE = 'user/DELETE'




//ACTION FOR GETTING BOOKINGS

const load = user => ({
    type: LOAD,
    user
})

const loadAfterEdit = user => ({
    type: EDIT,
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



export const updateMyBio = (userId, payload) => async dispatch => {
    const response = await csrfFetch(`/api/users/bio/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(payload)
    })

    if(response.ok) {
        const user = await response.json();
        dispatch(loadAfterEdit(user))
    }
}





const initialState = {

}

const userReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case LOAD: {
            return action.user
        }
        case EDIT: {
            return action.user
        }
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
