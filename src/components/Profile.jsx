import React from "react";
import Post from "./Profile/MyPosts/Post/Post";
import {addPostCreator, updatePostTextCreator} from "../redux/profileReducer";

const Profile = (props) => {

   let messageElements = props.posts.map( (post) => <Post key={post.id} state={post}/>);

   let giveTextarea = React.createRef();

   const createPost = () => {
      // props.dispatch(addPostCreator());
      props.dispatch(addPostCreator());
   };

   const updatePostText = () => {
      props.dispatch(updatePostTextCreator(giveTextarea.current.value));
   };


   return (
      <div className="app-profile">
         <div className="c-user-info">
            <div className="c-user-info__img">
               <img alt="" src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Wayfarers&hairColor=Red&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=Hoodie&clotheColor=Blue03&eyeType=Wink&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Light'
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
                  <textarea name="" id="" onChange={ updatePostText } value={props.newPostText} ref={ giveTextarea } cols="20" rows="6" className="c-textarea"></textarea>
               </div>
               <div className="c-btn-layout c-btn-layout--right">
                  <button className="c-btn" onClick={ createPost }>Отправить</button>
               </div>
            </div>
            <ul className="profile-posts-list">
               { messageElements }
            </ul>
         </div>
      </div>
   )
}

export default Profile;