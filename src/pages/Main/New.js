import React from "react";
import '../Navbar/styling/styling.css'
import { Link } from 'react-router-dom'
import Sidebar from "../../components/Header/Sidebar";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/Header/TopBar/TopBar";
import LoginForm from "../../components/Header/LoginForm/LoginForm";

function New() {
  return (
    <div className="new">
      <TopBar />
      <Sidebar />
      <h1 className="navbar-title">Nyheter</h1>
      <p className="navbar-filter">Filter</p>
      <div className="navbar-header">
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/7120ce79ad3c3eac17559bc2d7199d23.png"
              alt="Jeans"
            />
            <p>Jeans - Svart</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage"> 
            <img
              src="https://gyazo.com/eb4c1a53c7621efa932c6b66fa25ddd4.jpg"
              alt="Jeans"
            />
            <p>Jeans - Blå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/eb4c1a53c7621efa932c6b66fa25ddd4.jpg"
              alt="Jeans"
            />
            <p>Jeans - Marinblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/7120ce79ad3c3eac17559bc2d7199d23.png"
              alt="Jeans"
            />
            <p>Jeans - Ljusblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/eb4c1a53c7621efa932c6b66fa25ddd4.jpg"
              alt="Jeans"
            />
            <p>Jeans - Grå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/7120ce79ad3c3eac17559bc2d7199d23.png"
              alt="Jeans"
            />
            <p>Jeans - Mörkgrå</p>
          </Link>
        </div>
      </div>
      <LoginForm />
      <Footer />
    </div>
  );
}

export default New;
