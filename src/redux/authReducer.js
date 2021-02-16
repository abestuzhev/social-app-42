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
                ...action.data,
                isAuth: true
            }

        }
        default: {
            return {...state};
        }
    }

}

export const setAuthData = (userId, email, login) => {
    return {type: SET_AUTH_DATA, data: {userId, email, login}}
}