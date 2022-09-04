import './App.css';
import Sidebar from "./components/Header/Sidebar";
import Main from "./components/Main/Main"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import TopBar from "./components/Header/TopBar/TopBar"
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  
  return (
       <Router>
        <TopBar />
        <Sidebar />
        <Hero />
        <Main />
        <Footer />
      </Router>
  );

}

export default App;
