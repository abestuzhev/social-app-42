const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
   posts: [
      {id: 1, message: "Hey, why  nobody love me"},
      {id: 2, message: "Yes, it's very"},
   ],
   newPostText: "",
   profile: null
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