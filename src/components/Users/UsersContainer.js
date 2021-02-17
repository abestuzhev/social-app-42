import {connect} from "react-redux";
import {
    follow,
    unFollow,
    isFetchingUsers,
    thunkUsersCreator,
    setUsers,
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
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            userAPI.follow(userId).then( res => {
                if(res.data.resultCode === 0) {
                    dispatch(follow(userId));
                }
            })

        },
        unFollow: (userId) => {
            userAPI.unFollow(userId).then( res => {
                if(res.data.resultCode === 0) {
                    dispatch(unFollow(userId));
                }
            })

        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        // thunkUsersCreator: () => {
        //     dispatch(thunkUsersCreator());
        // }
        isFetchingUsers(isFetching){
            dispatch(isFetchingUsers(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);