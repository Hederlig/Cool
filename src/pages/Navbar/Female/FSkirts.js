import React from "react";
import '../styling/styling.css'
import { Link } from 'react-router-dom'
import Sidebar from "../../../components/Header/Sidebar";
import Footer from "../../../components/Footer/Footer";
import TopBar from "../../../components/Header/TopBar/TopBar";
import LoginForm from "../../../components/Header/LoginForm/LoginForm";

function FSkirts() {
  return (
    <div className="fskirts">
      <TopBar />
      <Sidebar />
      <h1 className="navbar-title">Kjolar</h1>
      <p className="navbar-filter">Filter</p>
      <div className="navbar-header">
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/6cf078e065c1085964412ad4c9863d62.png"
              alt="FSkirts"
            />
            <p>Kjol - Svart</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/6cf078e065c1085964412ad4c9863d62.png"
              alt="FSkirts"
            />
            <p>Kjol - Blå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/6cf078e065c1085964412ad4c9863d62.png"
              alt="FSkirts"
            />
            <p>Kjol - Marinblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/6cf078e065c1085964412ad4c9863d62.png"
              alt="FSkirts"
            />
            <p>Kjol - Ljusblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/6cf078e065c1085964412ad4c9863d62.png"
              alt="FSkirts"
            />
            <p>Kjol - Grön</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/6cf078e065c1085964412ad4c9863d62.png"
              alt="FSkirts"
            />
            <p>Kjol - Röd</p>
          </Link>
        </div>
      </div>
      <LoginForm />
      <Footer />
    </div>
  );
}

export default FSkirts;
