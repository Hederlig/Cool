import React from "react";
import Sidebar from "../../../components/Header/Sidebar";
import Footer from "../../../components/Footer/Footer";
import TopBar from "../../../components/Header/TopBar/TopBar";
import LoginForm from "../../../components/Header/LoginForm/LoginForm";

function MMore() {
  return (
    <div className="mmore">
      <TopBar />
      <Sidebar />
      <h1>Killar/Mer</h1>
      <LoginForm />
      <Footer />
    </div>
  );
}

export default MMore;
