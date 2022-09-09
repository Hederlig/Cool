import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Jeans from './pages/Hero/Jeans'
import Shirts from './pages/Hero/Shirts'
import Shorts from './pages/Hero/Shorts'
import MJeans from "./pages/Navbar/Male/MJeans";
import MShorts from "./pages/Navbar/Male/MShorts";
import MTShirts from "./pages/Navbar/Male/MTShirts";
import MHoodies from "./pages/Navbar/Male/MHoodies";
import MMore from "./pages/Navbar/Male/MMore";
import FJeans from "./pages/Navbar/Female/FJeans";
import FPants from "./pages/Navbar/Female/FPants";
import FSkirts from "./pages/Navbar/Female/FSkirts";
import FMore from "./pages/Navbar/Female/FMore";
import FTops from "./pages/Navbar/Female/FTops";
import Contact from "./pages/Footer/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/jeans" element={<Jeans />} />
          <Route path="/Shirts" element={<Shirts />} />
          <Route path="/Shorts" element={<Shorts />} />
          <Route path="/killar/jeans" element={<MJeans />} />
          <Route path="/killar/shorts" element={<MShorts />} />
          <Route path="/killar/tshirts" element={<MTShirts />} />
          <Route path="/killar/hoodies" element={<MHoodies />} />
          <Route path="/killar/mer" element={<MMore />} />
          <Route path="/tjejer/jeans" element={<FJeans />} />
          <Route path="/tjejer/byxor" element={<FPants />} />
          <Route path="/tjejer/kjolar" element={<FSkirts />} />
          <Route path="/tjejer/toppar" element={<FTops />} />
          <Route path="/tjejer/mer" element={<FMore />} />
          <Route path="/contacts" element={<Contact />}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
