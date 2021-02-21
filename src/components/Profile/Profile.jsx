import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    // console.log("profile", props);
    return (
        <div className="app-profile">
            <ProfileInfo {...props} profile={props.profile}/>
            <MyPostsContainer />
        </div>

    )
}

export default Profile;