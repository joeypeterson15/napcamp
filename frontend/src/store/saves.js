
import { csrfFetch } from './csrf'


const LOAD = 'saves/LOAD'
const ADD = 'saves/ADD'
const DELETE = 'saves/DELETE'




//ACTION FOR GETTING BOOKINGS

const load = saves => ({
    type: LOAD,
    saves
})




const addOneSave = save => ({
    type: ADD,
    save
})



const deleteOneSave = id => ({
    type: DELETE,
    id
})




export const getSaves = (userId) => async dispatch => {
    const response = await fetch(`/api/saves/${userId}`)

    if(response.ok) {
        const saves = await response.json();
        dispatch(load(saves))
    }
}




//THUNK ACTION CREATING A BOOKING

export const createSave = (payload, spotId, userId) => async dispatch => {

    console.log('beginning of thunk action before backend')

    const response = await csrfFetch(`/api/saves/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',

        },
        body: JSON.stringify({...payload})
    })

    console.log('made it back from the thunk action in store')

    if (response.ok) {
        const save = await response.json()
        dispatch(addOneSave(save))
    }
}



export const deleteSave = (spotId, userId) => async dispatch => {

    const response = await csrfFetch(`/api/saves/${userId}/${spotId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json',

          },
    })

    if (response.ok) {
        const {id} = await response.json()
        dispatch(deleteOneSave(id))
    }
}

const initialState = {

}

const savesReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case LOAD: {
            const allSaves = {};
            action.saves.forEach(save => {
                allSaves[save.id] = save
            });
            return {
                ...allSaves,
                ...state,
            }
        }
        case ADD: {
            const newState = {
                ...state,
                [action.save.id]: action.save
            }
            return newState;
        }
        case LOAD: {
            const newState = {...state}
            delete newState[action.id]
            return newState;
        }

        default:
        return state;
    }
}

export default savesReducer;
