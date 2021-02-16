import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
   console.log("header", props);
   return (
      <header className="app-header">
         <div className="app-layout">
            <div className="app-header__layout">
               <div className="app-header__logo">
                  <a href="/">Social 42</a>
               </div>
               { props.auth.isAuth
               ?  <div className="app-header-profile">
                     <div className="app-header-profile__text" data-id={props.auth.userId}>{props.auth.login}</div>
                  </div>
               :  <NavLink to="/login">Войти</NavLink>
               

               }
               
            </div>
            

         </div>
      </header>
   )
}

export default Header;