import { FETCH_QUESTION } from '../constants/questions'

//create initial state for reducer

const INITIAL_STATE = {
    question: null
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_QUESTION:
            console.log("ini" , action.payload.data)
            return {
                ...state,
                question: action.payload.data
            };
        default:
            return state;


    }
}