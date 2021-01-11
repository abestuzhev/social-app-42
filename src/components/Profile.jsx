import React from "react";

const NavBar = () => {
   return (
      <nav className="app-nav">
         <a href="profile"><span>Profile</span></a>
         <a href="messages"><span>Messages</span></a>
         <a href="news"><span>News</span></a>
         <a href="music"><span>Music</span></a>
      </nav>
   )
}

export default NavBar;