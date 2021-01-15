import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    // console.log("MyPosts", props);

    let messageElements = props.profilePage.posts.map( (post) => <Post key={post.id} state={post}/>);

    let giveTextarea = React.createRef();

    const onCreatePost = () => {
        props.createPost();
    };

    const onUpdatePostText = () => {
        props.updatePostText(giveTextarea.current.value);
    };

    return (

        <div className="profile-posts">
            <div className="profile-posts-area">
                <div className="profile-posts-area__input">
                    <textarea name="" id="" onChange={ onUpdatePostText } value={props.newPostText} ref={ giveTextarea } cols="20" rows="6" className="c-textarea"></textarea>
                </div>
                <div className="c-btn-layout c-btn-layout--right">
                    <button className="c-btn" onClick={ onCreatePost }>Отправить</button>
                </div>
            </div>
            <ul className="profile-posts-list">
                { messageElements }
            </ul>
        </div>
    )
}

export default MyPosts;
