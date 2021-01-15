import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {userReducer} from "./usersReducer";

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   users: userReducer
});

const store = createStore(reducers);

window.store = store;

export default store;