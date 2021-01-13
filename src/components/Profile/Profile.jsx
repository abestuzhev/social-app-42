import React from "react";
import MyPostsContainer from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    console.log("profile", props);
    return (
        <div className="app-profile">
            <ProfileInfo />
            <MyPostsContainer posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>

        </div>

    )
}

export default Profile;