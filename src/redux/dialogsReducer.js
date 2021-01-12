const ADD_DIALOG =  "ADD_DIALOG";
const UPDATE_DIALOG_TEXT =  "UPDATE_DIALOG_TEXT";

export const dialogsReducer = (state, action) => {
   switch (action.type) {
      case ADD_DIALOG: {
         const dateNow = new Date();
         const d = {
            id: dateNow.getTime(),
            name: "Jennifer Aniston",
            time: `${dateNow.getHours()}:${dateNow.getMinutes()}`,
            text: state.newDialogText
         };
         state.dialogs.push(d);
      }

      case UPDATE_DIALOG_TEXT: {
         state.newDialogText = action.text;
      }

      default:
         return state;
   }

};

export const newDialogTextCreator = () => {
   return {
      type: ADD_DIALOG
   }
};

export const updateDialogTextCreator = (text) => {
   return {
      type: UPDATE_DIALOG_TEXT,
      text: text
   }
}