import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="/logo.png" alt="" />
      <div className="user-wrapper">
        <div className="user-image-wrapper">
          <img className="user-image" src="/user.png" alt="" />
        </div>
        <p style={{ fontWeight: "500" }}> Siddharth Jain</p>
      </div>
    </div>
  );
};

export default Header;
