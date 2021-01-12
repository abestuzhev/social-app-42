import React from "react";
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";

function App(props) {
   // console.log("props", props);
   return (

      <BrowserRouter>
         <div className="app" id="app">

            <Header/>

            <main className="app-main">
               <div className="app-layout">
                  <section className="app-page">

                     <NavBar/>
                     <div className="app-container">
                        <Route path="/dialogs" render = {() => <Dialogs dialogs = {props.state.dialogsPage.dialogs}/>} />
                        <Route path="/profile" render = {() => {
                           return <Profile
                              posts = {props.state.profilePage.posts}
                              newPostText = {props.state.profilePage.newPostText}
                              dispatch={props.dispatch}
                           />
                        }}

                        />
                        <Route path="/news" component = {News} />
                        <Route path="/music" component = {Music} />
                     </div>


                  </section>
               </div>
            </main>
         </div>
      </BrowserRouter>
   );
}

export default App;
