import React from "react";
import '../Navbar/styling/styling.css'
import { Link } from 'react-router-dom'
import Sidebar from "../../components/Header/Sidebar";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/Header/TopBar/TopBar";
import LoginForm from "../../components/Header/LoginForm/LoginForm";

function Shirts() {
  return (
    <div className="Shirts">
      <TopBar />
      <Sidebar />
      <h1 className="navbar-title">Clothes with attitude</h1>
      <h1 className="navbar-title">Tröjor</h1>
      <p className="navbar-filter">Filter</p>
      <div className="navbar-header">
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/f54ca301ef6863f31cff233153e52a6d.png"
              alt="Shirts"
            />
            <p>Tröja - Svart</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage"> 
            <img
              src="https://gyazo.com/d702ce5b4ea86c9adc0f496273b3622d.png"
              alt="Shirts"
            />
            <p>Tröja - Blå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/c4a650494adf73da4f79d0f9528c227c.png"
              alt="Shirts"
            />
            <p>Tröja - Marinblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/d5e96453026c314fd02d134d80b44cf2.png"
              alt="Shirts"
            />
            <p>Tröja - Ljusblå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/b1c535bc5253b18720e1313fb142225d.png"
              alt="Shirts"
            />
            <p>Tröja - Grå</p>
          </Link>
        </div>
        <div>
          <Link to="/ProductPage">
            <img
              src="https://gyazo.com/7d02c7e4dd24ec35abffa3f56234fa84.png"
              alt="Shirts"
            />
            <p>Tröja - Mörkgrå</p>
          </Link>
        </div>
      </div>
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Shirts;
