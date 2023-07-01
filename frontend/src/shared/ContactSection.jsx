import React from "react";
import "./contact-section.css";
import { Container, Row, Col } from "reactstrap";

const ContactSection = ({ title }) => {
  return (
    <section className="contact__section">
      <Container>
        <Row>
          <Col lg="12">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
