import React from "react";
import '../Navbar/styling/styling.css'
import { Link } from 'react-router-dom'
import Sidebar from "../../components/Header/Sidebar";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/Header/TopBar/TopBar";
import LoginForm from "../../components/Header/LoginForm/LoginForm";

function Shorts() {
  return (
    <div className="jeans">
      <TopBar />
      <Sidebar />
      <h1 className="navbar-title">Clothes with attitude</h1>
      <h1 className="navbar-title">Shorts</h1>
      <p className="navbar-filter">Filter</p>
      <div className="navbar-header">
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/139d02c86d9174b14c56ae904fdaed61.jpg"
              alt="Shorts"
            />
            <p>Shorts - Svart</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage"> 
            <img
              src="https://gyazo.com/f448f494270af024992bbc9291806411.jpg"
              alt="Shorts"
            />
            <p>Shorts - Blå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/139d02c86d9174b14c56ae904fdaed61.jpg"
              alt="Shorts"
            />
            <p>Shorts - Marinblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/f448f494270af024992bbc9291806411.jpg"
              alt="Shorts"
            />
            <p>Shorts - Ljusblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/f448f494270af024992bbc9291806411.jpg"
              alt="Shorts"
            />
            <p>Shorts - Grå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/139d02c86d9174b14c56ae904fdaed61.jpg"
              alt="Shorts"
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

export default Shorts;
