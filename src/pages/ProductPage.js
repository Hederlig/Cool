import Sidebar from "../components/Header/Sidebar";
import Footer from "../components/Footer/Footer";
import TopBar from "../components/Header/TopBar/TopBar";
import LoginForm from "../components/Header/LoginForm/LoginForm";
import '../App.css'

const ProductPage = () => {
  return (
    <div>
      <TopBar />
      <Sidebar />
      <div className="product-container">
        <img
          src="https://gyazo.com/d702ce5b4ea86c9adc0f496273b3622d.png"
          alt="product"
        />
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec hendrerit sed tellus vitae commodo.</p>
          <label for="color">Färg:</label>
          <select name="color" id="color">
            <option disabled selected value> -- Välj Färg -- </option>
            <option value="white">Vit</option>
            <option value="black">Svart</option>
            <option value="red">Röd</option>
            <option value="pink">Lila</option>
            <option value="yellow">Gul</option>
            <option value="blue">Blå</option>
            <option value="gray">Grå</option>
          </select>
          <label for="size">Storlek:</label>
          <select name="size" id="size">
            <option disabled selected value> -- Välj Storlek -- </option>
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
            <option value="xl">XL</option>
            <option value="2xl">2XL</option>
          </select>
          <b>Pris: 299kr</b>
          <button>Lägg till i kundvagn</button>
        </div>
      </div>
      <LoginForm />
      <Footer />
    </div>
  );
};

export default ProductPage;
