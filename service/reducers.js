/**
 * Created by Stone on 2016/12/19.
 */
import {combineReducers} from "redux";

function routeInfo(state = {}, action) {
    switch (action.type) {
        case "SET_ROUTE":
            return Object.assign({}, state, {route: action.route});
        case "SET_NAVIGATOR":
            return Object.assign({}, state, {navigator: action.navigator})
        default:
            return state;
    }
}


export default combineReducers({routeInfo});
