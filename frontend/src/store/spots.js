const LOAD = 'spots/LOAD'


//actions

const load = list => ({
    type: LOAD,
    list,
})


//action for getting one?
// const getSpot = spot => ({
//     type: ADD_ONE,
//     spot
// })


//thunk action for getting all spots

export const getSpots = () => async dispatch => {
    console.log('here!!!!')
    const response = await fetch('/api/spots')

    if (response.ok) {
        const list = await response.json();
        console.log(list)
        dispatch(load(list))
    }
}

// export const getSpotDetail = (spotId) => async dispatch => {
//     const response = await fetch(`/api/spots/${spotId}`)

//     if (response.ok) {
//         const spot = await response.json()
//         dispatch(getSpot(spot))
//     }
// }

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
