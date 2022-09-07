import Sidebar from "../../components/Header/Sidebar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/Header/TopBar/TopBar";
import Form from 'react-bootstrap/Form';



const ContactPage = () => {
  return (
    <div>
        <TopBar />
        <Sidebar />
        <Hero />
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Footer />
    </div>
    
  );
};

export default ContactPage;
