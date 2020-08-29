import authReducer from './authReducer';
import poemReducer from './poemReducer';

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    poem: poemReducer
})

export default rootReducer;