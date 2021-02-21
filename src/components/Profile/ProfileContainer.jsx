import React, {Component} from "react";
import Profile from "./Profile";
import {userAPI} from "../../api/api";
import {connect} from "react-redux";
import {getStatus, getUser, setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends Component {

  componentDidMount() {

    // console.log("ProfileContainer", this.props);

    let userId = this.props.match.params.userId;

    if(!userId){
      userId = this.props.authUser.userId;
    }

    //получаем пользователя с сервера
    this.props.getUser(userId);

    //получение статуса с сервера
    this.props.getStatus(userId);



  }

  render() {
    return (
        <Profile {...this.props} profile={this.props.profile}/>
      )

  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    authUser: state.auth,
    status: state.profilePage.status
  }
};

// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
export default compose(
  connect(mapStateToProps, {setUserProfile, getStatus, getUser}),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)


// withRouter(connect(mapStateToProps, {setUserProfile})(ProfileContainer));