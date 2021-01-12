import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

let store = {
   _state: {
      dialogsPage: {
         dialogs: [
            {id:1, name: "Jennifer Aniston", time: "12:51", text: "Нам не нужно ничего знать про остальную часть вашего технологического стека"},
            {id:2, name: "John Doe", time: "8:41", text: "Implementing Zoom and Pan in Just 69 Lines of Javascript"}
         ],
         messages: [
            {id:1, interlocutor: true, name: "Mr. Max", time: "12:51", text: "Метод map был добавлен к стандарту ECMA-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. Вы можете работать с ним, добавив следующий код в начало ваших скриптов, он позволяет использовать map в реализациях, которые не поддерживают этот метод."},
            {id:2, interlocutor: true, name: "John Doe", time: "8:41", text: "Implementing Zoom and Pan in Just 69 Lines of Javascript"},
            {id:3, interlocutor: true, name: "John Doe", time: "8:41", text: "Thanks)"}
         ],
         newDialogText: ""
      },
      profilePage: {
         posts: [
            {id: 1, message: "Hey, why  nobody love me"},
            {id: 2, message: "Yes, it's very"},
         ],
         newPostText: ""
      }
   },

   _renderApp(){
      console.log("renderApp");
   },

   getState(){
      return this._state;
   },

   dispatch(action){
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._renderApp(this._state);
   },

   subscribe(observer){
      this._renderApp = observer;
   }
};

window.store = store;


export default store;