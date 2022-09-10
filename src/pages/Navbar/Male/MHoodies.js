import React from "react";
import '../styling/styling.css'
import { Link } from 'react-router-dom'
import Sidebar from "../../../components/Header/Sidebar";
import Footer from "../../../components/Footer/Footer";
import TopBar from "../../../components/Header/TopBar/TopBar";
import LoginForm from "../../../components/Header/LoginForm/LoginForm";

function MHoodies() {
  return (
    <div className="mhoodies">
      <TopBar />
      <Sidebar />
      <h1 className="navbar-title">Hoodies</h1>
      <p className="navbar-filter">Filter</p>
      <div className="navbar-header">
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/48e3d87e7a6bc3388bd42f53b23718f7.png"
              alt="MHoodie"
            />
            <p>Hoodie - Svart</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/48e3d87e7a6bc3388bd42f53b23718f7.png"
              alt="MHoodie"
            />
            <p>Hoodie - Blå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/48e3d87e7a6bc3388bd42f53b23718f7.png"
              alt="MHoodie"
            />
            <p>Hoodie - Brun</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/48e3d87e7a6bc3388bd42f53b23718f7.png"
              alt="MHoodie"
            />
            <p>Hoodie - Marinblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/48e3d87e7a6bc3388bd42f53b23718f7.png"
              alt="MHoodie"
            />
            <p>Hoodie - Grå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/48e3d87e7a6bc3388bd42f53b23718f7.png"
              alt="MHoodie"
            />
            <p>Hoodie - Mörkgrå</p>
          </Link>
        </div>
      </div>
      <LoginForm />
      <Footer />
    </div>
  );
}

export default MHoodies;
