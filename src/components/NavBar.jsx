import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
   return (
      <nav className="app-nav">
         <NavLink to="/profile"><span>Profile</span></NavLink>
         <NavLink to="/dialogs"><span>Messages</span></NavLink>
         <NavLink to="/news"><span>News</span></NavLink>
         <NavLink to="/music"><span>Music</span></NavLink>
         <NavLink to="/users"><span>Users</span></NavLink>
      </nav>
   )
}

export default NavBar;