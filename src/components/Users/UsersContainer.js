import {connect} from "react-redux";
import {
    isFetchingUsers,
    setUsers, unFollowThunk, followThunk
} from "../../redux/usersReducer";
import Users from "../Users/Users"
import React from "react";
import {userAPI} from "../../api/api";
import Preloader from "../common/Preloader";


class UserContainer extends React.Component {
    componentDidMount() {
        this.props.isFetchingUsers(true);
        console.log("server request");
        userAPI.getUsers().then( data => {
            this.props.isFetchingUsers(false);
            this.props.setUsers(data.items)
        });

    }
    render(){

        return (
           this.props.isFetching
              ? <div className="users-wrap"><Preloader /></div>
              : <Users {...this.props}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        toggleInProgress: state.usersPage.toggleInProgress
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//
//         setUsers: (users) => {
//             dispatch(setUsers(users));
//         },
//         isFetchingUsers(isFetching){
//             dispatch(isFetchingUsers(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps,
  {followThunk, unFollowThunk, setUsers, isFetchingUsers, }
  )(UserContainer);