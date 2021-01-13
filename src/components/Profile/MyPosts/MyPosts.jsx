import React from "react";

const MyPosts = (props) => {

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
    )
}

export default MyPosts;
