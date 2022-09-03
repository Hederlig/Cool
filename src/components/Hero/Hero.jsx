import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <Container>
        <h1>This is Hero</h1>
        <Row>
          <Col sm={6}>
            <div
              style={{
                width: "505px",
                height: "320px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url("https://via.placeholder.com/505x320")`,
              }}
            >
              <div className="Buttons">
                <p className="heroText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores eveniet eaque impedit expedita iusto vero dolores
                  mollitia quibusdam voluptatem aliquam aut, hic labore ut
                  numquam. Facilis nihil soluta ut consequuntur?s
                </p>
                <Row>
                  <Col>
                    <Button variant="dark">Jeans</Button>
                  </Col>
                  <Col>
                    <Button variant="dark">Jeans</Button>
                  </Col>
                  <Col>
                    <Button variant="dark">Jeans</Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
