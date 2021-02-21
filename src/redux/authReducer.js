import {authAPI} from "../api/api";

const SET_AUTH_DATA = "SET_AUTH_DATA";


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }

        default: {
            return {...state};
        }
    }
}

export const setAuthData = (userId, email, login, isAuth) => {
    return {type: SET_AUTH_DATA, payload: {userId, email, login, isAuth}}
}


export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(responce => {
        let {email, id, login} = responce.data.data;
        if(responce.data.resultCode === 0){
            dispatch(setAuthData(id, email, login, true));
        };
    })
}


export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(res => {
        if(res.resultCode === 0){

            dispatch(getAuthUserData())
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(res => {
        if(res.resultCode === 0){
            dispatch(setAuthData(null, null, null, false));
        }

    })
}