import React from "react";
import LoginFormRedux from "./LoginForm";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


class Login extends React.Component {

    submit = ({loginEmail, loginPassword, loginRememberMe}) => {
        this.props.login(loginEmail, loginPassword, loginRememberMe);
    }

    render() {

        if (this.props.isAuth) {
            return <Redirect to="/profile"/>
        }

        return (


            <div className="app-padding">
                <LoginFormRedux onSubmit={this.submit}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);