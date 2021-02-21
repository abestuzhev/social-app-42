import {profileAPI, userAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
   posts: [
      {id: 1, message: "Hey, why  nobody love me"},
      {id: 2, message: "Yes, it's very"},
   ],
   newPostText: "",
   profile: null,
   status: null
}

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         return {
             ...state,
            posts: [...state.posts, {
               id: new Date().getTime(),
               message: state.newPostText
            }],
            newPostText: ""
         }
      }

      case UPDATE_POST_TEXT: {
         return {
             ...state,
            newPostText: action.text
         }
      }

      case SET_USER_PROFILE: {
         return {...state, profile: action.profile}
      }

      case SET_STATUS: {
         return {...state, status: action.status}
      }

      default:
         return state;
   }

};

export const updatePostTextCreator = (text) => {
   return {type: UPDATE_POST_TEXT, text: text};
};

export const setUserProfile = (profile) => {
   return {type: SET_USER_PROFILE, profile}
}

export const addPostCreator = () => {
   return {type: ADD_POST};
};


export const setStatus = (status) => {
   return {type: SET_STATUS, status};
};

export const getUser = (userId) => (dispatch) => {
   userAPI.getUser(userId).then( user => {
      dispatch(setUserProfile(user));
    }
   )
}

export const getStatus = (userId) => (dispatch) => {

   profileAPI.getStatus(userId).then( data => {
      dispatch(setStatus(data))
   })

};