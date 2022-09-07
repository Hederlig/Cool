import "./App.css";
import Home from "./components/Home.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/ContactPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/contacts" element={<Contact />}  />
        <Route path="/test" element={( <div><h1>Hello</h1></div>)}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
