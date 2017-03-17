/**
 * Created by Stone on 2016/12/19.
 */
import {createStore} from "redux";
import reducers from "./reducers";
let store = createStore(reducers);
export default store;