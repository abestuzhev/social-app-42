import React from "react";
import {Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";

function App(props) {
   // console.log("App", props);
   return (


         <div className="app" id="app">

            <Header/>

            <main className="app-main">
               <div className="app-layout">
                  <section className="app-page">

                     <NavBar/>
                     <div className="app-container">
                        <Route path="/dialogs" render = {() => <DialogsContainer store={props.store}/>} />
                        <Route path="/profile" render = {() => {
                           return <Profile store={props.store} />
                        }}

                        />
                        <Route path="/news" component = {News} />
                        <Route path="/music" component = {Music} />
                     </div>


                  </section>
               </div>
            </main>
         </div>
   );
}

export default App;
