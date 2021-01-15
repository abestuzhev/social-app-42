const ADD_CHAT =  "ADD_CHAT";
const UPDATE_DIALOG_TEXT =  "UPDATE_DIALOG_TEXT";

const initialState = {
   dialogs: [
      {id:1, name: "Jennifer Aniston", time: "12:51", text: "Нам не нужно ничего знать про остальную часть вашего технологического стека"},
      {id:2, name: "John Doe", time: "8:41", text: "Implementing Zoom and Pan in Just 69 Lines of Javascript"}
   ],
   messages: [
      {id:1, interlocutor: true, name: "Mr. Max", time: "12:51", text: "Метод map был добавлен к стандарту ECMA-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. Вы можете работать с ним, добавив следующий код в начало ваших скриптов, он позволяет использовать map в реализациях, которые не поддерживают этот метод."},
      {id:2, interlocutor: true, name: "Mr. Max", time: "8:41", text: "Implementing Zoom and Pan in Just 69 Lines of Javascript"},
      {id:3, interlocutor: true, name: "John Doe", time: "8:41", text: "Это только кажется сложно"}
   ],
   newDialogText: ""
}

export const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_CHAT: {
         const dateNow = new Date();
         return {
             ...state,
            messages: [...state.messages, {
               id: dateNow.getTime(),
               name: "Вы",
               interlocutor: false,
               time: `${dateNow.getHours()}:${dateNow.getMinutes()}`,
               text: state.newDialogText
            }],
            newDialogText: ""
         }
      }

      case UPDATE_DIALOG_TEXT: {
         return {
             ...state,
            newDialogText: action.text
         }
      }

      default:
         return state;
   }

};

export const newChatTextCreator = () => {
   return {
      type: ADD_CHAT
   }
};

export const updateDialogTextCreator = (text) => {
   return {
      type: UPDATE_DIALOG_TEXT,
      text: text
   }
}