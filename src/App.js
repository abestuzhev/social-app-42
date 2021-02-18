import React from "react";
import {Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {authAPI} from "./api/api";
import {connect} from "react-redux";
import {setAuthData} from "./redux/authReducer";
import Login from "./components/Login/Login";

class App extends React.Component {
  
  componentDidMount(){
    // console.log("app", this.props);
    authAPI.me().then(responce => {
      let {email, id, login} = responce.data.data;      
      if(responce.data.resultCode === 0){
        
        this.props.setAuthData(id, email, login);
      };
      
    })
  }

  render(){
    return (
      <div className="app" id="app">
        <Header auth={this.props.auth}/>
        <main className="app-main">
          <div className="app-layout">
            <section className="app-page">
              <NavBar/>
              <div className="app-container">
                <Route
                  path="/dialogs"
                  render={() => <DialogsContainer store={this.props.store}/>}/>
  
                <Route
                  path="/profile/:userId?"
                  render={() => <ProfileContainer auth={this.props.auth}/>}/>
  
                <Route
                  path="/users"
                  render={() => <UsersContainer/>}/>
  
                <Route
                  path="/news"
                  component={News}/>
  
                <Route
                  path="/music"
                  component={Music}/>

                <Route
                  path="/login"
                  component={Login}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {setAuthData})(App);
