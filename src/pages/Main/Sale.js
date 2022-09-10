import React from "react";
import '../Navbar/styling/styling.css'
import { Link } from 'react-router-dom'
import Sidebar from "../../components/Header/Sidebar";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/Header/TopBar/TopBar";
import LoginForm from "../../components/Header/LoginForm/LoginForm";

function Sale() {
  return (
    <div className="sale">
      <TopBar />
      <Sidebar />
      <h1 className="navbar-title">Rea</h1>
      <p className="navbar-filter">Filter</p>
      <div className="navbar-header">
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/82e3222b7c474921cde322e503b69a88.png"
              alt="Jeans"
            />
            <p>Tröja - Svart</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage"> 
            <img
              src="https://gyazo.com/82e3222b7c474921cde322e503b69a88.png"
              alt="Jeans"
            />
            <p>Jeans - Blå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/82e3222b7c474921cde322e503b69a88.png"
              alt="Jeans"
            />
            <p>Hoodie - Marinblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/82e3222b7c474921cde322e503b69a88.png"
              alt="Jeans"
            />
            <p>Top - Ljusblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/82e3222b7c474921cde322e503b69a88.png"
              alt="Jeans"
            />
            <p>T-Shirt - Grå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/82e3222b7c474921cde322e503b69a88.png"
              alt="Jeans"
            />
            <p>Shorts - Mörkgrå</p>
          </Link>
        </div>
      </div>
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Sale;
