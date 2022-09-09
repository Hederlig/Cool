import Sidebar from "../../components/Header/Sidebar";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/Header/TopBar/TopBar";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "./ContactPage.css";

<<<<<<< HEAD:src/Pages/Contact/ContactPage.jsx
const ContactPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const [count, setCount] = useState(0);
  
//   changeValue(text) {
//    this.setState({ Subject: text });
//  };

  // this.state = {
  //   dropDownValue: "Select Subject"
  // };
  const handleSelect=(e)=>{
    console.log(e);
  }
  return (
    <div>
      <TopBar />
      <Sidebar />
      <Hero />
      <DropdownButton
        id="dropdown-basic-button"
        title="Subject"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Dropdown.Item as="button">
          <div onClick={(e) => this.changeValue(e.target.textContent)}>
            Question
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="button">
          <div onClick={(e) => this.changeValue(e.target.textContent)}>
            Business
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="button">
          <div onClick={(e) => this.changeValue(e.target.textContent)}>
            Shipping
          </div>
        </Dropdown.Item>
      </DropdownButton>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <InputGroup hasValidation>
            <Form.Group as={Col} md="4" controlId="validationEmail">
              <Form.Control
                required
                type="text"
                placeholder="Enter e-mail adress here"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a E-mail.
              </Form.Control.Feedback>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label
                  style={{
                    display: "block",
                  }}
                >
                  Whats on your mind?
                </Form.Label>

                <Form.Control
                  className="form-control"
                  id="message"
                  placeholder="Whats on your mind?"
                  aria-label="Message"
                  rows="3"
                  maxLength="400"
                  onChange={(e) => setCount(e.target.value.length)}
                  required
                  as="textarea"
                  
                  
                />
                <p>{count}/400</p>
               
              </Form.Group>
            </Form.Group>
          </InputGroup>
        </Row>

        <Form.Group className="mb-3">
          <InputGroup hasValidation>
            <Form.Check
              required
              label="Im not a robot"
              feedback="You must agree before submitting."
              feedbackType="invalid"
              pattern="[0-5]*"
            />
          </InputGroup>
          <InputGroup>
            <Button type="submit" onSelect={handleSelect}>Submit form</Button>
          </InputGroup>
        </Form.Group>
      </Form>

      {/* <Form>
=======
const Contact = () => {
  return (
    <div>
        <TopBar />
        <Sidebar />
        <Form>
>>>>>>> fa0bfb95713b18611c543d407ffb0ea2c71572cd:src/pages/Footer/Contact.js
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form> */}

      <Footer />
    </div>
  );
};

export default Contact;
