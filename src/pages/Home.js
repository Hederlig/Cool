import Sidebar from "../components/Header/Sidebar";
import Main from "../components/Main/Main";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import TopBar from "../components/Header/TopBar/TopBar";
import LoginForm from "../components/Header/LoginForm/LoginForm";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Sidebar />
      <Hero />
      <Main />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Home;
