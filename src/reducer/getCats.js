import * as types from "../constants/actionTypes";

const initState = {
    cats: [],
    isFetching: false,
    error: null,
  };

export default (state = initState, {type, payload} ) => {
 
    switch(type) {
        case types.GET_CATS: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.GET_CATS_SUCCESS: {
            
            return {
                ...state,
                cats: payload.data,
                isFetching: false,  
            }
        }
        case types.GET_CATS_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: "ERROR"
            }
        }
       
       
        default: return state;

    }
};