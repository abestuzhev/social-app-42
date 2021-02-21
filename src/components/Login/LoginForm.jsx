import {Field, reduxForm} from "redux-form";
import React from "react";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className="c-form">
            <div className="c-form__item">
                <Field name="loginEmail" component="input" type="text" className="c-input"/>
            </div>
            <div className="c-form__item">
                <Field name="loginPassword" component="input" type="password" className="c-input"/>
            </div>
            <div className="c-form__item">
                <Field name="loginRememberMe" component="input" type="checkbox" />
                <label htmlFor="">Запомнить меня</label>
            </div>
            <div className="c-form__item">
                <button type="submit" className="c-btn">Войти</button>
            </div>
        </form>
    )
}


const LoginFormRedux = reduxForm({ form: 'login'})(LoginForm)

export default LoginFormRedux;