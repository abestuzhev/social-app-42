import React from "react";

const Profile = () => {
   return (
      <div className="app-profile">
         <div className="c-user-info">
            <div className="c-user-info__img">
               <img src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Wayfarers&hairColor=Red&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=Hoodie&clotheColor=Blue03&eyeType=Wink&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Light'
               />
            </div>
            <div className="c-user-info__body">
               <div className="c-user-info__title">John Doe</div>
               <div className="c-user-info__properties">
                  <ul>
                     <li>
                        <div className="c-user-info__text">День рождения:</div>
                        <div className="c-user-info__text">12 ноября 1985</div>
                     </li>
                     <li>
                        <div className="c-user-info__text">Город:</div>
                        <div className="c-user-info__text">Санкт-Петербург</div>
                     </li>
                     <li>
                        <div className="c-user-info__text">Образование:</div>
                        <div className="c-user-info__text">BSU' 11</div>
                     </li>
                     <li>
                        <div className="c-user-info__text">Сайт:</div>
                        <div className="c-user-info__text">google.com</div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="profile-posts">
            <div className="profile-posts-area">
               <div className="profile-posts-area__input">
                  <textarea name="" id="" cols="20" rows="6" className="c-textarea"></textarea>
               </div>
               <div className="c-btn-layout c-btn-layout--right">
                  <a href="#" className="c-btn">Send</a>
               </div>
            </div>
            <ul className="profile-posts-list">
               <li className= "profile-posts-list__item">
                  <div className="profile-posts-card">
                     <div className="profile-posts-card__img">
                        <img src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
                     </div>
                     <div className="profile-posts-card__text">
                        <span>Hey, why  nobody love me?</span>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Profile;