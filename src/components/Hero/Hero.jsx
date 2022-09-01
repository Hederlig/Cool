import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Hero = () => {
    return (
      <div>
        <Container>
          <h1>This is Hero</h1>
          <Row>
            <Col sm={6}>
              <img src="https://via.placeholder.com/240x320" alt="Tshirt" />
              Bild 1
            </Col>
     
  
            
          </Row>
        </Container>
      </div>
    );
  };
  
  export default Hero;