import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {userReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: userReducer,
   auth: authReducer,
   form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;