const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [
        {id: "1", followed:true, name: "John", status: "Some text", location: {city: "Нью-Йорк", country: "США"}},
        {id: "2", followed:false, name: "Иван", status: "Some text", location: {city: "Санкт-Петербург", country: "Россия"}},
        {id: "3", followed:true, name: "Roberto", status: "Some text", location: {city: "Рио-де-Жанейро", country: "Бразилия"}}
    ]
}

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

        }
        default:
            return state;
    }
};

export const followCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};

export const unFollowCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};

export const setUsersCreator = () => {
    return {
        type: SET_USERS
    }
};