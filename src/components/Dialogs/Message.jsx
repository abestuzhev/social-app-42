import React from "react";


const Message = (props) => {

   let messageStack = props.message.interlocutor ? "message-stack message-stack--guest" : " message-stack message-stack--you";
   return (
      <div className = {messageStack}>
         <div className="message-bubble">
            <div className="message-header">
               <span className="message-name">{props.message.name}</span>
               <span className="message-date">{props.message.time}</span>
            </div>
            <div className="message-text">
               <span>{props.message.text}</span>
            </div>
         </div>
      </div>
   )
};

export default Message;