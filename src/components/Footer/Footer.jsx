import "./Footer.css";
import styled from 'styled-components';
import * as BsIcons from 'react-icons/bs';


const SocialBar = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-between;
    margin: 20px 30%;
    font-size: 1.7rem;
    color: white;
    cursor: pointer;
`

const Footer = () => {
    return (
        <div>
            <div className="newsLetter">
              <h1>PRENUMERERA PÅ VÅRT NYHETSBREV</h1>
              <p>OCH FÅ EXKLUSIVA ERBJUDANDE OCH RABATTER</p>
                <div className="sign-up">
                  <input type="text" className="button1" name="email" id="email" placeholder="Email adress"/>
                  <input type="submit" className="button2" id="submit" value="SIGN UP" />
                </div>
            </div>
            <b className="social-text">Följ oss</b>
            <SocialBar>
              <BsIcons.BsFacebook></BsIcons.BsFacebook>
              <BsIcons.BsTwitter></BsIcons.BsTwitter>
              <BsIcons.BsInstagram></BsIcons.BsInstagram>
              <BsIcons.BsPinterest></BsIcons.BsPinterest>
              <BsIcons.BsReddit></BsIcons.BsReddit>
            </SocialBar>    
            <div className="info">
              <b>OM OSS</b>
              <b>KÖPVILLKOR</b>
              <b>FRAKTINFO</b>
              <b>KONTAKT</b>
            </div>
            <div className="paymethods">
              <img className="klarna" src={require('./logos/Klarnalogo.png')} alt="klarna" />
              <img className="mastercard" src={require('./logos/mastercardlogo.png')} alt="mastercard" />
              <img className="visa" src={require('./logos/visalogo.png')} alt="visa" />
              <img className="postnord" src={require('./logos/Postnordlogo.png')} alt="postnord" />
            </div>
        </div>
    );
  };
  
  export default Footer;