import React from "react";
import '../styling/styling.css'
import { Link } from 'react-router-dom'
import Sidebar from "../../../components/Header/Sidebar";
import Footer from "../../../components/Footer/Footer";
import TopBar from "../../../components/Header/TopBar/TopBar";

function FJeans() {
  return (
    <div className="fjeans">
      <TopBar />
      <Sidebar />
      <h1 className="navbar-title">Jeans</h1>
      <p className="navbar-filter">Filter</p>
      <div className="navbar-header">
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/7120ce79ad3c3eac17559bc2d7199d23.png"
              alt="FJeans"
            />
            <p>Jeans - Svart</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage"> 
            <img
              src="https://gyazo.com/7120ce79ad3c3eac17559bc2d7199d23.png"
              alt="FJeans"
            />
            <p>Jeans - Blå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/7120ce79ad3c3eac17559bc2d7199d23.png"
              alt="FJeans"
            />
            <p>Jeans - Marinblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/7120ce79ad3c3eac17559bc2d7199d23.png"
              alt="FJeans"
            />
            <p>Jeans - Ljusblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/7120ce79ad3c3eac17559bc2d7199d23.png"
              alt="FJeans"
            />
            <p>Jeans - Grå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/7120ce79ad3c3eac17559bc2d7199d23.png"
              alt="FJeans"
            />
            <p>Jeans - Mörkgrå</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FJeans;
