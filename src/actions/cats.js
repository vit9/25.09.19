import * as types from '../constants/actionTypes';

const axios = require('axios')

const getCatsRequest = payload => ({
    type: types.GET_CATS,
    payload
})

const getCatsSuccess = payload => ({
    type: types.GET_CATS_SUCCESS,
    payload
})

const getCatsRequestFail = payload => ({
    type: types.GET_CATS_FAIL,
    payload
})

export  const getCatsAction = () => {
    
    return dispatch => {
        dispatch(getCatsRequest())
        axios.get(`http://localhost:3000/cats`)
            .then(res =>
                setTimeout(() => dispatch(getCatsSuccess(res)), 1000))
            .catch(err =>
                dispatch(getCatsRequestFail(err)))
    }
}

