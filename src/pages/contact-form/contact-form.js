import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:fozilov_otabek@mail.ru" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="akjha96@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/anand-kumar-jha-745798a4/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div> 
            <div className="m-2">
              <a href="https://t.me/FozilovOtabek" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my Telegram">
                  <i class="fab fa-telegram"></i> Telegram
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/akjha96" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
           
                       <div className="m-2">
              <a href="https://www.instagram.com/otabek.fozilov22/?hl=ru" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on Instagram">
                  <i class="fab fa-instagram"></i> Instagram
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/otabek.fozilov.39" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> Facebook
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
