const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";

export const profileReducer = (state, action) => {

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