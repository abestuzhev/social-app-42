import React, {Component} from "react";
import Profile from "./Profile";
import {userAPI} from "../../api/api";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends Component {

  componentDidMount() {

    console.log("isAuth", this.props.auth);
    let userId = this.props.match.params.userId;
    if(!userId){      
      userId = 14400;
    }
    
    userAPI.getUser(userId).then( user => {
        this.props.setUserProfile(user)
      }
    )
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
    auth: state.auth.isAuth
  }
};

// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
export default compose(
  connect(mapStateToProps, {setUserProfile}),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)


// withRouter(connect(mapStateToProps, {setUserProfile})(ProfileContainer));