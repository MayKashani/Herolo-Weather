import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {locationReducer,favoritesReducer,settingsReducer,alertsReducer} from './reducers'

const rootReducer = combineReducers({favoritesReducer,locationReducer,settingsReducer,alertsReducer})
const store = createStore(rootReducer,applyMiddleware(thunk))
export default store 