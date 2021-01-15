import {connect} from "react-redux";
import {followCreator, unFollowCreator, setUsersCreator} from "../../redux/usersReducer";
import Users from "../Users/Users"


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: () => {
            dispatch(followCreator());
        },
        unFollow: () => {
            dispatch(unFollowCreator());
        },

        setState: ()=> {
            dispatch(setUsersCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);