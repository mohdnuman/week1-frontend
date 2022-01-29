import { combineReducers } from "redux";
import mcqs from './mcqs';
import fills from './fills';
import marks from './marks';


export default combineReducers({
    mcqs,
    fills,
    marks

});