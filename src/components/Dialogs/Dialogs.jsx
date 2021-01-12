import React from "react";
import Dialog from "./Dialog";
import {newChatTextCreator, updateDialogTextCreator} from "../../redux/dialogsReducer";
import Message from "./Message";

const Dialogs = (props) => {

   // console.log("Dialogs", props);


   let dialogsElements = props.dialogsPage.dialogs.map( (dialog, index) => {
         return <Dialog key={index} dialog={dialog}/>
   });

   let chatsElements = props.dialogsPage.messages.map( message => {
      return <Message key={message.id} message={message}/>
   })

   const createChatText = () => {
      props.dispatch(newChatTextCreator());
   };

   const updateDialogText = (e) => {
      props.dispatch(updateDialogTextCreator(e.target.value));

   };

   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         e.preventDefault();
         props.dispatch(newChatTextCreator());
      }
   }

   return (
      <div className="app-dialogs">
         <div className="app-dialogs__grid">
            <div className="dialogs">
               <div className="dialogs-header"></div>
               <ul className="dialogs-list">
                  { dialogsElements }
               </ul>
            </div>

            <div className="chat">
               <div className="chat-header"></div>
               <div className="chat-body">
                  {/*<div className="chat-default">*/}
                  {/*   <span>Выберите чат или создайте новую беседу</span>*/}
                  {/*</div>*/}
                  <div className="chat-messages">

                     { chatsElements }

                  </div>
               </div>
               <div className="chat-footer">
                  <textarea name="" id="" onChange={ updateDialogText } onKeyDown={ handleKeyDown } value={props.dialogsPage.newDialogText} cols="20" rows="1" className="c-textarea c-textarea--nowrap"></textarea>
                  <button className="c-btn c-btn--transparent" onClick={ createChatText }><i className="icon-send"></i></button>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Dialogs;