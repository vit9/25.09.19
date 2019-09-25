import * as types from "../constants/actionTypes";

const initState = {
    newCat: [],
    inputName: "",
    inputUrl: "",
    isFetching: false,
    error: null,
  };

export default (state = initState, {type, payload} ) => {
   
    switch(type) {
        case types.ADD_CAT: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.ADD_CAT_SUCCESS: {
            
            return {
                ...state,
                newCat: [payload.data],
                isFetching: false,
              
            }
        }
        case types.ADD_CAT_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: "ERROR"
            }
        }
        case types.CHANGE_NAME_VALUE: {
            return {
                ...state,
                inputName: payload,
            }
        }
        case types.CHANGE_URL_VALUE: {
            return {
                ...state,
                inputUrl: payload,
            }
        }
       
        default: return state;

    }
};