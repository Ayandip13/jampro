import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link
          to="/"
          className="logo"
          onClick={() => setIsClicked(false)}
          style={{
            color: "#fff",
            fontSize: "25px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          LearnSphere
        </Link>
      </div>

      {!isClicked && (
        <div className="nav-right">
          <Link
            to="/login"
            className="login-btn"
            onClick={() => setIsClicked(true)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="signup-btn"
            onClick={() => setIsClicked(true)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
