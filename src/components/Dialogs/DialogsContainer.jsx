import React from "react";
import Dialogs from "./Dialogs";
import {newChatTextCreator, updateDialogTextCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      createChatText: () => {
         dispatch(newChatTextCreator());
      },

      updateDialogText: (text) => {
         dispatch(updateDialogTextCreator(text));

      }
   }

};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);