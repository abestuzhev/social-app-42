import Dialogs from "./Dialogs";
import {newChatTextCreator, updateDialogTextCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);