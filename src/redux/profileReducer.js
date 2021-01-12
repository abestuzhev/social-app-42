const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";

const initialState = {
   posts: [
      {id: 1, message: "Hey, why  nobody love me"},
      {id: 2, message: "Yes, it's very"},
   ],
   newPostText: ""
}

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         state.posts.push({
            id: new Date().getTime(),
            message: state.newPostText
         });
         state.newPostText = "";
         return state;
      }

      case UPDATE_POST_TEXT: {
         state.newPostText = action.text;
         return state;
      }

      default:
         return state;
   }

};

export const updatePostTextCreator = (text) => {
   return {type: UPDATE_POST_TEXT, text: text};
};

export const addPostCreator = () => {
   return {type: ADD_POST};
};