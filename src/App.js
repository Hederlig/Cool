
import './App.css';
import Sidebar from "./components/Header/Sidebar";
import Main from "./components/Main/Main"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  
  return (
       <Router>
        <Sidebar />
        <Hero />
        <Main />
        <Footer />
      </Router>
  );

}

export default App;
