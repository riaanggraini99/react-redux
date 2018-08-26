import axios from 'axios';
import { FETCH_QUESTION } from '../constants/questions';

export function fetchQuestion() {
    return function (dispatch) {
        return axios.get('http://jservice.io/api/random')
            .then(response=> {
                console.log(response.data)
                dispatch({
                    type: FETCH_QUESTION,
                    payload:response.data
                })

            })
    }
}
