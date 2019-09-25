import { combineReducers } from "redux";

import addCat from './addCat'

import getCats from './getCats'

export default  combineReducers({
    getCats,
    addCat
})