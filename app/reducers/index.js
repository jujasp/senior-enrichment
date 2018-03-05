import { combineReducers } from 'redux'
import student from './student'
import campus from './campus'

const rootReducer = combineReducers({student, campus})

export default rootReducer
