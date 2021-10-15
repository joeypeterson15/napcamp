const LOAD = 'spots/LOAD'


//actions

const load = list => ({
    type: LOAD,
    list,
})


//thunk action for getting all spots

export const getSpots = () => async dispatch => {
    const response = await fetch('/api/spots')

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list))
    }
}


const initialState = {
    list: []
}
const spotsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD: {
            const allSpots = {};
            action.list.forEach(spot => {
                allSpots[spot.id] = spot
            });
            return {
                ...allSpots,
                ...state,
                list: action.list,
            }
        }
        default:
        return state;
    }
}

export default spotsReducer;
