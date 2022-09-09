import React from "react";
import '../styling/styling.css'
import { Link } from 'react-router-dom'
import Sidebar from "../../../components/Header/Sidebar";
import Footer from "../../../components/Footer/Footer";
import TopBar from "../../../components/Header/TopBar/TopBar";

function FPants() {
  return (
    <div className="fjeans">
      <TopBar />
      <Sidebar />
      <h1 className="navbar-title">Byxor</h1>
      <p className="navbar-filter">Filter</p>
      <div className="navbar-header">
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/ab3eb18f3107ef483a277b477ed0a7ce.png"
              alt="FPants"
            />
            <p>Byxor - Svart</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/ab3eb18f3107ef483a277b477ed0a7ce.png"
              alt="FPants"
            />
            <p>Byxor - Blå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/ab3eb18f3107ef483a277b477ed0a7ce.png"
              alt="FPants"
            />
            <p>Byxor - Marinblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/ab3eb18f3107ef483a277b477ed0a7ce.png"
              alt="FPants"
            />
            <p>Byxor - Ljusblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/ab3eb18f3107ef483a277b477ed0a7ce.png"
              alt="FPants"
            />
            <p>Byxor - Grå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/ab3eb18f3107ef483a277b477ed0a7ce.png"
              alt="FPants"
            />
            <p>Byxor - Mörkgrå</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FPants;
