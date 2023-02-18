import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <small class="typing-demo">
        Coded by mgCuriousCoders Team {new Date().getFullYear()}©
      </small>
      <h1>POPULAR TOUR PLACES</h1>
    </div>
  );
};

export default Header;
