import React from "react";
import '../styling/styling.css'
import { Link } from 'react-router-dom'
import Sidebar from "../../../components/Header/Sidebar";
import Footer from "../../../components/Footer/Footer";
import TopBar from "../../../components/Header/TopBar/TopBar";

function MShorts() {
  return (
    <div className="mshorts">
      <TopBar />
      <Sidebar />
      <h1 className="navbar-title">Shorts</h1>
      <p className="navbar-filter">Filter</p>
      <div className="navbar-header">
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/6dbbca96b6d83e549b4887bbe2e50446.png"
              alt="MShorts"
            />
            <p>Shorts - Svart</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/6dbbca96b6d83e549b4887bbe2e50446.png"
              alt="MShorts"
            />
            <p>Shorts - Blå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/6dbbca96b6d83e549b4887bbe2e50446.png"
              alt="MShorts"
            />
            <p>Shorts - Marinblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/6dbbca96b6d83e549b4887bbe2e50446.png"
              alt="MShorts"
            />
            <p>Shorts - Camo</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/6dbbca96b6d83e549b4887bbe2e50446.png"
              alt="MShorts"
            />
            <p>Shorts - Grå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/6dbbca96b6d83e549b4887bbe2e50446.png"
              alt="MShorts"
            />
            <p>Shorts - Brun</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MShorts;
