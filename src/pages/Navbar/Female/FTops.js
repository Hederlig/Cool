import React from "react";
import '../styling/styling.css'
import { Link } from 'react-router-dom'
import Sidebar from "../../../components/Header/Sidebar";
import Footer from "../../../components/Footer/Footer";
import TopBar from "../../../components/Header/TopBar/TopBar";
import LoginForm from "../../../components/Header/LoginForm/LoginForm";

function FTops() {
  return (
    <div className="ftops">
      <TopBar />
      <Sidebar />
      <h1 className="navbar-title">Toppar</h1>
      <p className="navbar-filter">Filter</p>
      <div className="navbar-header">
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/8b9bafcdf584e8d43cbe2b72aeaacd47.png"
              alt="FTops"
            />
            <p>Topp - Svart</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/8b9bafcdf584e8d43cbe2b72aeaacd47.png"
              alt="FTops"
            />
            <p>Topp - Marinblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/8b9bafcdf584e8d43cbe2b72aeaacd47.png"
              alt="FTops"
            />
            <p>Topp - Gul</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/8b9bafcdf584e8d43cbe2b72aeaacd47.png"
              alt="FTops"
            />
            <p>Topp - Blå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/8b9bafcdf584e8d43cbe2b72aeaacd47.png"
              alt="FTops"
            />
            <p>Topp - Grön</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/8b9bafcdf584e8d43cbe2b72aeaacd47.png"
              alt="FTops"
            />
            <p>Topp - Röd</p>
          </Link>
        </div>
      </div>
      <LoginForm />
      <Footer />
    </div>
  );
}

export default FTops;
