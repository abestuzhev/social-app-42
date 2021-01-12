import React from "react";

const Post = (props) => {
   return (
      <li className= "profile-posts-list__item" data-id={props.state.id}>
         <div className="profile-posts-card">
            <div className="profile-posts-card__img">
               <img alt="" src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Wayfarers&hairColor=Red&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=Hoodie&clotheColor=Blue03&eyeType=Wink&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Light'/>
            </div>
            <div className="profile-posts-card__text">
               <span>{props.state.message}</span>
            </div>
         </div>
      </li>
   )
}

export default Post;