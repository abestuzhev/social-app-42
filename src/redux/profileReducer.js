import {ADD_POST} from "./addPostreducer";

export const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";

export const profileReducer = (state, action) => {
   if(action.type === ADD_POST){
      state.profilePage.posts.push({
         id: new Date().getTime(),
         message: state.profilePage.newPostText
      });
      state.profilePage.newPostText = "";
   } else if(action.type === UPDATE_POST_TEXT){
      state.profilePage.newPostText = action.text;
   }
   return state;
};

export const updatePostTextCreator = (text) => {
   return {type: UPDATE_POST_TEXT, text: text};
};