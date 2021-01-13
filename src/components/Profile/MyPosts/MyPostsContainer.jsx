import React from "react";
import Post from "./Post/Post";
import {addPostCreator} from "../../../redux/profileReducer";
import {updatePostTextCreator} from "../../../redux/profileReducer";

const MyPostsContainer = (props) => {

    

    const createPost = () => {
        // props.dispatch(addPostCreator());
        props.dispatch(addPostCreator());
    };

    const updatePostText = () => {
        props.dispatch(updatePostTextCreator(giveTextarea.current.value));
    };

    return (
        <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
    )
}

export default MyPostsContainer;