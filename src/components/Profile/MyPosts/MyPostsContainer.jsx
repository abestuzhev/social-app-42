import React from "react";
import MyPosts from "./MyPosts";
import {addPostCreator} from "../../../redux/profileReducer";
import {updatePostTextCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

//
// const MyPostsContainer = (props) => {
//     // console.log("MyPostsContainer", props);
//
//     const state = props.store.getState().profilePage;
//
//     const createPost = () => {
//         props.store.dispatch(addPostCreator());
//     };
//
//     const updatePostText = (text) => {
//         props.store.dispatch(updatePostTextCreator(text));
//     };
//
//     return (
//         <MyPosts posts={state.posts} newPostText={state.newPostText} createPost={createPost} updatePostText={updatePostText}/>
//     )
// }

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: () => {
            dispatch(addPostCreator());
        },
        updatePostText: (text) => {
            dispatch(updatePostTextCreator(text));
        }
    }
};

// export default MyPostsContainer;
export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);