
import { Edit, Update } from '@mui/icons-material'
import { csrfFetch } from './csrf'


const LOAD = 'user/LOAD'
const EDIT = 'user/EDIT'
const UPDATEMONEY = 'user/UPDATE'




//ACTION FOR GETTING BOOKINGS

const load = user => ({
    type: LOAD,
    user
})

const loadAfterEdit = user => ({
    type: EDIT,
    user
})

const updateMoney = user => ({
    type: UPDATEMONEY,
    user
})





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

export const updateMyMoney = (userId, payload) => async dispatch => {
    const response = await csrfFetch(`/api/users/funds/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(payload)
    })

    if(response.ok) {
        const user = await response.json();
        dispatch(updateMoney(user))
    }
}





const initialState = {

}

const userReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case LOAD: {
            const user = action.user
            return user
        }
        case EDIT: {
            const user = action.user
            return user
        }
        case UPDATEMONEY: {
            const user = action.user
            return user
        }

        default:
        return state;
    }
}

export default userReducer;
