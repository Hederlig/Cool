import "./Main.css";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Main = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="main-container">
      <form className="top-buttons">
        <a href="#news">NYHETER</a>
        <a href="#mer">REA</a>
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
          <img src="https://gyazo.com/e79438e950406bf7c91b101daa9574c3.jpg" alt="toppar" />
          <p>Toppar - 2 pack</p>
        </div>
        <div>
          <img src="https://i.gyazo.com/0170b0147c0a67f40487d4797889a4f5.jpg" alt="Ljacka" />
          <p>Jacka - Läder</p>
        </div>
      </div>
      <form className="bottom-buttons">
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Mer
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Här kommer fler produkter att visas när man trycker på knappen.
        </div>
      </Collapse>
      </form>
    </div>
  );
};

export default Main;
