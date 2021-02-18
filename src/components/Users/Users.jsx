import React from "react";
import User from "./User";

const Users = (props) => {
    console.log("Users", props);
    const usersElement = props.users.map(u => {
       return <User
          key={u.id}
          follow={props.follow}
          unFollow={props.unFollow}
          user={u}
          toggleInProgress={props.toggleInProgress}
          toggleFollowInProgress={props.toggleFollowInProgress}
       />
    });

    return (
        <div className="app-users app-padding">
            <ul className="users-list">
                { usersElement }
            </ul>

        </div>
    )
}

export default Users;