import { combineReducers } from 'redux'

//reducers import
import questionReducer from './questions'

//combine multi reducer
const rootReducer = combineReducers({
    questions: questionReducer
});

export default rootReducer;