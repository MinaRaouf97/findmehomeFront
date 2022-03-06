import { combineReducers } from "redux";
import {userReducer} from "./userReducers" ;
 

export default combineReducers({
    userLoginState : userReducer,

    
})