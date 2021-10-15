const LOAD = 'spots/LOAD'
const LOAD_AFTER_SEARCH = 'spots/LOAD_AFTER_SEARCH'


//actions

const load = list => ({
    type: LOAD,
    list,
})

const loadAfterSearch = locations => ({
    type: LOAD_AFTER_SEARCH,
    locations
})


//thunk action for getting all spots

export const getSpots = () => async dispatch => {
    const response = await fetch('/api/spots')

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list))
    }
}



//thunk action for searching all spots

export const searchForLocations = (location) => async dispatch => {
    const response = await fetch(`/api/spots/${location}`)

    if (response.ok) {
        const locations = await response.json();
        dispatch(loadAfterSearch(locations))
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
        case LOAD_AFTER_SEARCH: {
            const allSpots = {};
            action.locations.forEach(spot => {
                allSpots[spot.id] = spot
            })
            return {
                ...allSpots,
                ...state,
                list: action.locations
            }
        }
        default:
        return state;
    }
}

export default spotsReducer;
