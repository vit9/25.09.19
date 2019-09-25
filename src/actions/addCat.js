import * as types from '../constants/actionTypes';

const axios = require('axios')

const addCatRequest = payload => ({
    type: types.ADD_CAT,
    payload
})

const addCatRequestSuccess = payload => ({
    type: types.ADD_CAT_SUCCESS,
    payload
})

const addCatRequestFail = payload => ({
    type: types.ADD_CAT_FAIL,
    payload
})

export const addnewCatAction = payload => {
   
    return dispatch => {
        dispatch(addCatRequest())
        axios.post(`http://localhost:3000/cats`,payload)
             .then(res =>
                setTimeout(() => dispatch(addCatRequestSuccess(res)), 1000))
             .catch(err =>
                dispatch(addCatRequestFail(err)))
    }
}


export const changeNameValue = payload => ({
	type: types.CHANGE_NAME_VALUE,
	payload
});

export const changeUrlValue = payload => ({
	type: types.CHANGE_URL_VALUE,
	payload
});