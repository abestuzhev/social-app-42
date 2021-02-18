import React from "react";
import {NavLink} from "react-router-dom";




const User = ({user, toggleInProgress, ...props}) => {


   return (
      <li className="users-item">
         <div className="user-card">
            <div className="user-card__img">
               {user.photos.small !== null
                  ? <img src={user.photos.small} alt=""/>
                  : <img alt="" src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Wayfarers&hairColor=Red&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=Hoodie&clotheColor=Blue03&eyeType=Wink&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Light'/>

               }
            </div>
            <div className="user-card__body">
               <NavLink to={"/profile/" + user.id }><div className="user-card__name">{user.name}</div></NavLink>
               
               <div className="user-card__status">{user.id}</div>
               {user.followed && <div className="user-card__followed">followed</div>}
            </div>


            <div className="user-card-follow">
               {user.followed
                  //user-card-follow__btn
                  ? <button className="" disabled={toggleInProgress.some( id => id === user.id)} onClick={() => props.unFollowThunk(user.id)}><span>unfollow</span></button>
                  : <button className="" disabled={toggleInProgress.some( id => id === user.id)} onClick={() => props.followThunk(user.id)}><span>follow</span></button>
               }
            </div>
         </div>
      </li>
   )
}

export default User;