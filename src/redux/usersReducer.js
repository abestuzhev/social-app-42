// import {userAPI} from "../api/api";

import {userAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const IS_FETCHING = "IS_FETCHING";
const TOGGLE_IN_PROGRESS = "TOGGLE_IN_PROGRESS";

const initialState = {
    users: [
        // {id: "1", followed:true, name: "John", status: "Some text", location: {city: "Нью-Йорк", country: "США"}},
        // {id: "2", followed:false, name: "Иван", status: "Some text", location: {city: "Санкт-Петербург", country: "Россия"}},
        // {id: "3", followed:true, name: "Roberto", status: "Some text", location: {city: "Рио-де-Жанейро", country: "Бразилия"}}
    ],
    isFetching: false,
    toggleInProgress: []
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case TOGGLE_IN_PROGRESS: {
            return {
                ...state,
                toggleInProgress: action.isFetching
                ? [...state.toggleInProgress, action.userId]
                : state.toggleInProgress.filter( id => id !== action.userId)

            }
        }

        default:
            return state;
    }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const isFetchingUsers = (isFetching) => ({type: IS_FETCHING, isFetching});
export const toggleFollowInProgress = (isFetching, userId) => ({type: TOGGLE_IN_PROGRESS, isFetching, userId});

// export const thunkUsersCreator = () => (dispatch) => {
//     const res = userAPI.getUsers();
//     console.log("res", res);
//     dispatch(setUsersCreator(res.data.item));
// };

export const followThunk = (userId) => (dispatch) => {

    dispatch(toggleFollowInProgress(true, userId));
    userAPI.follow(userId).then( res => {

        if(res.data.resultCode === 0) {
            dispatch(follow(userId));
            dispatch(toggleFollowInProgress(false, userId));
        }
    })
};

export const unFollowThunk = (userId) => (dispatch) => {

    dispatch(toggleFollowInProgress(true, userId));
    userAPI.unFollow(userId).then( res => {

        if(res.data.resultCode === 0) {
            dispatch(unFollow(userId));
            dispatch(toggleFollowInProgress(false, userId));
        }
    })
}