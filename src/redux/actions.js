

export const ADD_FAVORITE= 'ADD_FAVORITE'
export const REMOVE_FAVORITE='REMOVE_FAVORITE'
export const SET_LOCATION = 'SET_LOCATION'
export const TOGGLE_UNIT = 'TOGGLE_UNIT'
export const TOGGLE_MODE = 'TOGGLE_MODE'
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER'
export const SET_ALERT = 'SET_ALERT'

export const addFavorite = favorite => dispatch => {
    dispatch({
        type:ADD_FAVORITE,
        payload:favorite
    })
};

export const removeFavorite = key => dispatch =>{
    dispatch({
        type:REMOVE_FAVORITE,
        payload:key
    })
}

export const setLocation = location => dispatch =>{
    dispatch({
        type:SET_LOCATION,
        payload:location
    })
}

export const setAlert = alert => dispatch => {
    dispatch({
        type:SET_ALERT,
        payload: alert
    })
}

export const setCurrentWeather = weather => dispatch => {
    dispatch({
        type:SET_CURRENT_WEATHER,
        payload: weather
    })
}


export const toggleUnit = () => dispatch => {
    dispatch({
        type:'TOGGLE_UNIT',
        payload:{}
    })
}

export const toggleMode = () => dispatch => {
    dispatch({
        type:'TOGGLE_MODE',
        payload:{}
    })

}