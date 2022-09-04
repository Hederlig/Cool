import React from 'react'

const TopBar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        background: "black",
        borderBottom: "1px solid white"
      }}>
        <a 
        style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
            color: "white",
            fontSize: "2rem",
            paddingTop: "5px",
            fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
        }}        
        href="#home">Cool Fashion</a>
    </div>
  )
}

export default TopBar