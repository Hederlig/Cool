import React from "react";
import '../styling/styling.css'
import { Link } from 'react-router-dom'
import Sidebar from "../../../components/Header/Sidebar";
import Footer from "../../../components/Footer/Footer";
import TopBar from "../../../components/Header/TopBar/TopBar";
import LoginForm from "../../../components/Header/LoginForm/LoginForm";

function MTShirt() {
  return (
    <div className="mtshirt">
      <TopBar />
      <Sidebar />
      <h1 className="navbar-title">T-Shirts</h1>
      <p className="navbar-filter">Filter</p>
      <div className="navbar-header">
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/f54ca301ef6863f31cff233153e52a6d.png"
              alt="MTShirt"
            />
            <p>T-Shirt - Svart</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/f54ca301ef6863f31cff233153e52a6d.png"
              alt="MTShirt"
            />
            <p>T-Shirt - Vit</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/f54ca301ef6863f31cff233153e52a6d.png"
              alt="MTShirt"
            />
            <p>T-Shirt - Blå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/f54ca301ef6863f31cff233153e52a6d.png"
              alt="MTShirt"
            />
            <p>T-Shirt - Camo</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/f54ca301ef6863f31cff233153e52a6d.png"
              alt="MTShirt"
            />
            <p>T-Shirt - Grön</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/f54ca301ef6863f31cff233153e52a6d.png"
              alt="MTShirt"
            />
            <p>T-Shirt - Röd</p>
          </Link>
        </div>
      </div>
      <LoginForm />
      <Footer />
    </div>
  );
}

export default MTShirt;
