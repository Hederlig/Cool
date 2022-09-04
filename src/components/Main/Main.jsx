import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <form className="top-buttons">
        <a href="#news">NYHETER</a>
        <a href="#mer">SE MER</a>
      </form>
      <div className="front-page-grid">
        <div>
          <img src="https://i.gyazo.com/3a38bbc133ccfe999750c5caa1b139ea.png" alt="Tshirt" />
          <p>T-Shirt - Vit</p>
        </div>
        <div>
          <img src="https://i.gyazo.com/ed8d789c394fa1926942e2a6c061755e.png" alt="Shoodie" />
          <p>Hoodie - Svart</p>
        </div>
        <div>
          <img src="https://i.gyazo.com/992aa4bfce97653e42f7ae13384b9f76.png" alt="Sjeans" />
          <p>Jeans - Stentvättade</p>
        </div>
        <div>
          <img src="https://i.gyazo.com/8aba6b2d2ed617fe460f5081966c8e57.jpg" alt="Rskor" />
          <p>Skor - Rosa</p>
        </div>
        <div>
          <img src="https://i.gyazo.com/e3068cf4fd58dfbe25c0e72bfd30ee8a.png" alt="Lkjol" />
          <p>Kjol - Lila</p>
        </div>
        <div>
          <img src="https://i.gyazo.com/0170b0147c0a67f40487d4797889a4f5.jpg" alt="Ljacka" />
          <p>Jacka - Läder</p>
        </div>
      </div>
      <form className="bottom-buttons">
        <a href="#more">MER</a>
      </form>
    </div>
  );
};

export default Main;
