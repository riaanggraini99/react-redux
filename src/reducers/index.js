import { combineReducers } from 'redux'

//combine multi reducer

const rootReducer = combineReducers({
    state : (state = {}) => state
});

export default rootReducer;