import React from "react";
import "../styles/contact.css";
import { Container, Row, Col } from "reactstrap";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import ListGroup from "react-bootstrap/ListGroup";
// import { BASE_URL } from "../utils/config";
// import { useNavigate } from "react-router-dom";
// import useFetch from "./../hooks/useFetch";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ContactSection from "../shared/ContactSection";

const Contact = () => {
  return (
    <>
    <ContactSection title={"Contact"}/>
      <section>
        <Container>
          <Row className="container1">
            <Col lg="12" className="justify-content-center mb-5">
              <h4 className="mb-5">Let’s talk about your brand:</h4>
              <div className="d-flex align-items-center justify-content-center">
                <Form
                  onSubmit={(event) => {
                    event.preventDefault();
                    alert("Cảm ơn bạn đã gửi thông tin cần trợ giúp cho chúng tôi!");
                  }}
                >
                  <Form.Group className="mb-3">
                    <Form.Label className="text-lable">Name *</Form.Label>
                    <Form.Control type="text" required placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-lable">Email</Form.Label>
                    <Form.Control type="email" required placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-lable">
                      How can we help? *
                    </Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </Form.Group>

                  <Button className="btn" variant="success" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
            <Col lg="12" className="align-items-center justify-content-center">
              <h4 className="mb-1">Get to know Always Creative:</h4>
              <h3 className="mb-5">
                {" "}
                Được thiết kế bới Hoàng Anh và Hoàng Hiệp với 🧰 tâm huyết của mình
                , nhóm thực hiện những gì tốt nhất trong khả năng. 👇
              </h3>
            </Col>
            <div className="d-flex justify-content-center gap-5">
              <Col xs={6} md={4}>
                <Image
                  className="ima"
                  src="https://zpsocial-f53-org.zadn.vn/f4d242ca1781f6dfaf90.jpg"
                  rounded
                />
              </Col>
              <Col xs={6} md={4}>
                <Image
                  className="ima"
                  src="https://zpsocial-f54-org.zadn.vn/ac5c00be010bef55b61a.jpg"
                  rounded
                />
              </Col>
            </div>
          </Row>
          <Col lg="12" className="mt-5 accordion">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Hoàng Anh</Accordion.Header>
                <Accordion.Body>
                  Thiết kế trang web với những chức năng cơ bản nhất, đồng thời
                  sử dụng những công nghệ phù hợp cho hoạt động thiết kế trang
                  web.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Hoàng Hiệp</Accordion.Header>
                <Accordion.Body>
                  Thiết kế trang web với những chức năng cơ bản nhất, đồng thời
                  sử dụng những công nghệ phù hợp cho hoạt động thiết kế trang
                  web.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Container>
        
      </section>
    </>
  );
};

export default Contact;
