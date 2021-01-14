import React from "react";
import Message from "./Message";
import Dialog from "./Dialog";

const Dialogs = (props) => {

   // console.log("Dialogs", props);



   let dialogsElements = props.dialogsPage.dialogs.map( (dialog, index) => {
      return <Dialog key={index} dialog={dialog}/>
   });

   const DefaultElement = () => {
      return (
          <div className="chat-default">
            <span>Выберите чат или создайте новую беседу</span>
          </div>
      )
   };

   const ChatsElements = () => {
      return (
          <div className="chat-messages">
             <ul className="dialogs-list">
                {
                   props.dialogsPage.messages.map( message => {
                      return (
                          <Message key={message.id} message={message}/>
                      )
                   })
                }
             </ul>
          </div>
      )
   }





   const chatMessageElement = props.dialogsPage.messages.length === 0 ? <DefaultElement /> : <ChatsElements />;

   const onCreateChatText = () => {
      props.createChatText();
   };

   const onUpdateDialogText = (e) => {
      props.updateDialogText(e.target.value);

   };

   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         e.preventDefault();
         props.createChatText();
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
                  { chatMessageElement }
               </div>
               <div className="chat-footer">
                  <textarea name="" id="" onChange={ onUpdateDialogText } onKeyDown={ handleKeyDown } value={props.dialogsPage.newDialogText} cols="20" rows="1" className="c-textarea c-textarea--nowrap"></textarea>
                  <button className="c-btn c-btn--transparent" onClick={ onCreateChatText }><i className="icon-send"></i></button>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Dialogs;