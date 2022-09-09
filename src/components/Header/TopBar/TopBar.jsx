import React from "react";
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        background: "black",
        borderBottom: "1px solid white"
      }}
    >
      <Link to="/"
        style={{
          display: "flex",
          justifyContent: "center",
          textDecoration: "none",
          color: "white",
          fontSize: "2rem",
          paddingTop: "5px",
          fontFamily:
            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
        }}
        href="#home"
      >
        Cool Fashion
      </Link>
    </div>
  );
};

export default TopBar;
