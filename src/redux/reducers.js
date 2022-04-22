import { ADD_FAVORITE,REMOVE_FAVORITE, SET_LOCATION, TOGGLE_UNIT } from "./actions";


export function favoritesReducer (state = [],action) {
    switch(action.type){
        case ADD_FAVORITE:
            return [...state, action.payload]
        case REMOVE_FAVORITE:
            return state.filter(x => x.key !== action.payload.key)
        default:
            return state
    }
}

export function locationReducer (state = {name:'Tel-Aviv', key:'215854'},action){
    switch(action.type){
        case SET_LOCATION:
            return action.payload
        default:
            return state
    }
}

export function unitReducer (state = 'c',action) {
    switch(action.type){
        case TOGGLE_UNIT:
            return (state === 'c') ? 'f' : 'c'
        default:
            return state;
    }
}