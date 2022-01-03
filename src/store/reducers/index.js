import { combineReducers } from "redux";
import shopReducer from './shopping/shoppingReducers'

const rootReducers = combineReducers({
    shop : shopReducer,
});



export default rootReducers;