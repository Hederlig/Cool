import React from "react";
import '../styling/styling.css'
import { Link } from 'react-router-dom'
import Sidebar from "../../../components/Header/Sidebar";
import Footer from "../../../components/Footer/Footer";
import TopBar from "../../../components/Header/TopBar/TopBar";

function MJeans() {
  return (
    <div className="mjeans">
      <TopBar />
      <Sidebar />
      <h1 className="navbar-title">Jeans</h1>
      <p className="navbar-filter">Filter</p>
      <div className="navbar-header">
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/eb4c1a53c7621efa932c6b66fa25ddd4.jpg"
              alt="MJeans"
            />
            <p>Jeans - Svart</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/eb4c1a53c7621efa932c6b66fa25ddd4.jpg"
              alt="MJeans"
            />
            <p>Jeans - Blå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/eb4c1a53c7621efa932c6b66fa25ddd4.jpg"
              alt="MJeans"
            />
            <p>Jeans - Marinblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/eb4c1a53c7621efa932c6b66fa25ddd4.jpg"
              alt="MJeans"
            />
            <p>Jeans - Ljusblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/eb4c1a53c7621efa932c6b66fa25ddd4.jpg"
              alt="MJeans"
            />
            <p>Jeans - Grå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/eb4c1a53c7621efa932c6b66fa25ddd4.jpg"
              alt="MJeans"
            />
            <p>Jeans - Mörkgrå</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MJeans;
