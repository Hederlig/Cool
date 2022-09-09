import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'
import "./Hero.css";
import Jeans from '../../pages/Hero/Jeans'

const Hero = () => {
  return (
    <div>
      <article className="hero">
        <div className="background">
          <h1 className="text1">Clothes with attitude</h1>
          <form className="buttons">
            <Link to="/Jeans">JEANS</Link>
            <Link to="/Shirts">TRÖJOR</Link>
            <Link to="/Shorts">SHORTS</Link>
          </form>
        </div>
      </article>
    </div>
  );
};

export default Hero;
