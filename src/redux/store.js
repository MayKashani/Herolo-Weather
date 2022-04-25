import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {locationReducer,favoritesReducer,settingsReducer,alertsReducer,weatherReducer} from './reducers'

const rootReducer = combineReducers({favoritesReducer,locationReducer,settingsReducer,alertsReducer,weatherReducer})
const store = createStore(rootReducer,applyMiddleware(thunk))
export default store 