import Sidebar from "./Header/Sidebar";
import Main from "./Main/Main";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import TopBar from "./Header/TopBar/TopBar";


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