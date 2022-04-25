import { ADD_FAVORITE,REMOVE_FAVORITE,
     SET_LOCATION, 
     TOGGLE_UNIT,TOGGLE_MODE,
    SET_ALERT,
    SET_CURRENT_WEATHER
    } from "./actions";





export function weatherReducer (state ={},action ) {
    switch(action.type){
        case SET_CURRENT_WEATHER:
            return action.payload
        default:
            return state
    }
}


export function favoritesReducer (state = [],action) {
    switch(action.type){
        case ADD_FAVORITE:
            return [...state, action.payload]
        case REMOVE_FAVORITE:
            return state.filter(x =>x.key !== action.payload)
        default:
            return state
    }
}

export function locationReducer (state = {name:'Tel aviv', key:'215854'},action){
    switch(action.type){
        case SET_LOCATION:
            return action.payload
        default:
            return state
    }
}


export function settingsReducer (state = {unit: 'f', mode:'light'},action) {
    switch(action.type){
        case TOGGLE_UNIT:
            return {...state,unit:(state.unit === 'c') ? 'f' : 'c'}
        case TOGGLE_MODE: 
            return {...state,mode: (state.mode === 'light')? 'dark' : 'light'}
        default:
            return state;
    }
}

export function alertsReducer (state=null,action) {
    switch(action.type){
        case SET_ALERT:
            return action.payload
        default:
            return state;
    }
}

