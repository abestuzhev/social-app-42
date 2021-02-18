import * as React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


export const withAuthRedirect = (Component) => {


  class WrapperComponent extends React.Component {

    render(){
      if (!this.props.auth) return <Redirect to="/login"/>;

      return <Component {...this.props}/>
    }

  }

  let mapStateToProps = (state) => {
    return {
      auth: state.auth.isAuth
    }
  };

  return connect(mapStateToProps)(WrapperComponent);
}