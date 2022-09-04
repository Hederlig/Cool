import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <article className="hero">
      <div className="background">
        <h1 className="text1">Clothes with attitude</h1>
          <form className="buttons">
            <a href="#jeans">JEANS</a>
            <a href="#trojor">TRÖJOR</a>
            <a href="#shorts">SHORTS</a>
          </form>
          </div>
      </article>
    </div>
  );
};

export default Hero;
