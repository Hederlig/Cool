import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Container>
        <Col>
        <div className="topButtons">
          <Button variant="primary" size="lg">
            Nyheter{" "}
          </Button>
          <Button variant="primary" size="lg">
            REA{" "}
          </Button>
          </div>
        </Col>
        <Row>
          <Col sm={6}>
            <img src="https://via.placeholder.com/240x320" alt="Tshirt" />
            <p>Vit T-tröja</p>
          </Col>
          <Col sm={6}>
            <img src="https://via.placeholder.com/240x320" alt="Tshirt" />
            <p>Svart Hoodie</p>
          </Col>
          <Col sm={6}>
            <img src="https://via.placeholder.com/240x320" alt="Tshirt" />
            <p>Stentvättade Jeans</p>
          </Col>
          <Col sm={6}>
            <img src="https://via.placeholder.com/240x320" alt="Tshirt" />
            <p>Rosa Skor</p>
          </Col>
          <Col sm={6}>
            <img src="https://via.placeholder.com/240x320" alt="Tshirt" />
            <p>Lila Kjol</p>
          </Col>
          <Col sm={6}>
            <img src="https://via.placeholder.com/240x320" alt="Tshirt" />
            <p>Läder Jacka</p>
          </Col>
          <Col sm={6}>
            <img src="https://via.placeholder.com/240x320" alt="Tshirt" />
            <p>Svarta Skor</p>
          </Col>
          <Col sm={6}>
            <img src="https://via.placeholder.com/240x320" alt="Tshirt" />
            <p>Gant Piké</p>
          </Col>

          <Col sm={12}>
            <div className="moreButton">
              <Button variant="primary" size="lg">
                Visa mer
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
