import Sidebar from "../components/Header/Sidebar";
import Main from "../components/Main/Main";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import TopBar from "../components/Header/TopBar/TopBar";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Sidebar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
