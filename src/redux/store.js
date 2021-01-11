
let store = {
   _state: {
      dialogs: [
         {id:1, name: "Jennifer Aniston", time: "12:51", text: "Нам не нужно ничего знать про остальную часть вашего технологического стека"},
         {id:2, name: "John Doe", time: "8:41",text: "Implementing Zoom and Pan in Just 69 Lines of Javascript"}
      ],

      profilePage: {
         posts: [
            {id: 1, message: "Hey, why  nobody love me"},
            {id: 2, message: "Yes, it's very"},
         ],
         newPostText: "Введите текст"
      }
   },

   _renderApp(){
      console.log("renderApp")
   },

   addPost(){
      this._state.profilePage.posts.push({
         id: new Date().getTime(),
         message: this._state.profilePage.newPostText
      });
      this._renderApp(this._state);
      // state.profilePage.newPostText = "";
   },

   updatePostText(text){
      this._state.profilePage.newPostText = text;
      this._renderApp(this._state);
   },

   subscribe(observer){
      this._renderApp = observer;
   }
};

window.store = store;


export default store;