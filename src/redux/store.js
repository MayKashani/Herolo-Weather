import {createStore,combineReducers} from 'redux'

import {locationReducer,favoritesReducer,unitReducer} from './reducers'

const rootReducer = combineReducers({favoritesReducer,locationReducer,unitReducer})
const store = createStore(rootReducer)
export default store 