import { clickReducer } from "./reducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    searchingState: clickReducer
});

export default rootReducer;