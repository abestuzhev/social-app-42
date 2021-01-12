import React from "react";

const Dialog = (props) => {
   return (
      <li className="dialogs-item" data-id={props.dialog.id}>
         <div className="dialog">
            <div className="dialog-img">
               <img alt="img" src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurly&accessoriesType=Round&hairColor=Red&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=PastelRed&eyeType=Hearts&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Tanned'/>
            </div>
            <div className="dialog-body">
               <div className="dialog-name">
                  <span>{props.dialog.name}</span>
               </div>
               <div className="dialog-date">{props.dialog.time}</div>
               <div className="dialog-text">
                  <span>{props.dialog.text}</span>
               </div>
            </div>
         </div>
      </li>
   )
}

export default Dialog;