import React from "react";
import Dialog from "./Dialog";
import {newDialogTextCreator, updateDialogTextCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

   // console.log("Dialogs", props);


   let dialogsElements = props.dialogsPage.dialogs.map( (dialog, index) => {
         return <Dialog key={index} dialog={dialog}/>
   });

   const createDialogText = () => {
      props.dispatch(newDialogTextCreator());
   }

   const updateDialogText = (e) => {
      console.log("updateDialogText", e.target.value);
      props.dispatch(updateDialogTextCreator(e.target.value));
   };

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
                     <div className="message-stack message-stack--guest">
                        <div className="message-bubble">
                           <div className="message-header">
                              <span className="message-name">Mr. Max</span>
                              <span className="message-date">17:56</span>
                           </div>
                           <div className="message-text">
                              <span>Метод map был добавлен к стандарту ECMA-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. Вы можете работать с ним, добавив следующий код в начало ваших скриптов, он позволяет использовать map в реализациях, которые не поддерживают этот метод.</span>
                           </div>
                        </div>
                     </div>
                     <div className="message-stack message-stack--you">
                        <div className="message-bubble">
                           <div className="message-header">
                              <span className="message-name">John Doe</span>
                              <span className="message-date">17:56</span>
                           </div>
                           <div className="message-text">
                              <span>Thanks</span>
                           </div>
                        </div>
                     </div>
                     <div className="message-stack message-stack--guest">
                        <div className="message-bubble">
                           <div className="message-header">
                              <span className="message-name">Mr. Max</span>
                              <span className="message-date">17:56</span>
                           </div>
                           <div className="message-text">
                              <span>Да не за что</span>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
               <div className="chat-footer">
                  <textarea name="" id="" onChange={ updateDialogText } value={props.newDialogText} cols="20" rows="1" className="c-textarea"></textarea>
                  <button className="c-btn c-btn--transparent" onClick={ createDialogText }><i className="icon-send"></i></button>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Dialogs;