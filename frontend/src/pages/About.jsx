import React from "react";
import "../styles/about.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import AboutSection from "../shared/AboutSection";
import Image from "react-bootstrap/esm/Image";
import Accordion from "react-bootstrap/Accordion";

const About = () => {
  return (
    <>
      <AboutSection title={"About us"} />
      <section>
        <Container>
          <Row>
            <Col lg="8" className="content-left">
              <Image
                className="img-class"
                src="https://preview.colorlib.com/theme/tralive/assets/img/gallery/about.png"
                alt=""
              />
            </Col>
            <Col lg="4" className="right d-block my-5">
              <span className="about">About us</span>
              <h2>Hãy sẵn sàng cho cuộc phiêu lưu thời gian thực</h2>
              <p className="my-4">
                Hãy bắt đầu cuộc hành trình của bạn với chúng tôi, ước mơ của
                bạn sẽ thành hiện thực. Mỗi khách hàng đối với chúng tôi đều rất
                quan trọng, các tour du lịch với giá cả, chất lượng phục vụ và
                quy trình tốt nhất.
              </p>
              <Button variant="success" className="p-3">
                <Link className="link-book" to="/home">
                  Đặt Tour Ngay
                </Link>
              </Button>
            </Col>
            <Col
              lg="12"
              className="customer mt-5 mb-5 d-flex align-items-center justify-content-center flex-column"
            >
              <h2>Khách Hàng nói gì?</h2>
              <p className="content-customer">
                "Tôi bất ngờ với chất lượng dịch vụ của chương trình và quy
                trình của công ty tất cả đều được thực hiện với quy trình chặt
                chẽ. Các thông tin từ bên lề đến chi tiết đều rất rõ ràng khi
                khách hàng cần tìm hiểu, thật sự rất hài lòng về điều đó."
              </p>
            </Col>
            <Col
              lg="12"
              className="content2 d-flex align-items-center justify-content-center flex-column"
            >
              <span className="about">FAQ</span>
              <h2>Câu Hỏi Thường Gặp</h2>
            </Col>
            <Col lg="6" className="mt-5">
              <Accordion>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Thông tin cá nhân của tôi có được giữ kín không?
                  </Accordion.Header>
                  <Accordion.Body>
                    Tất nhiên. Chúng tôi không tiết lộ bất kỳ thông tin của bạn
                    ngoại trừ một số thông tin cần thiết cho các đối tác khách
                    sạn để họ thực hiện việc đặt tour.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Thay Đổi Thông Tin Đặt Tour
                  </Accordion.Header>
                  <Accordion.Body>
                    Tất nhiên. Bạn có thể chuyển tên hoặc các thông tin khách
                    nhận tour mà không phải chịu bất kỳ chi phí nào. Hãy liên hệ
                    với bộ phận Chăm Sóc Khách Hàng của chúng tôi!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Thanh Toán</Accordion.Header>
                  <Accordion.Body>
                    Quý khách hàng vui lòng thanh toán trực tiếp với văn tour
                    đặt tour để có quyền lợi tốt nhất.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Chúng tôi có thể đặt cọc trước 50% số tiền cần thanh toán
                    được không?
                  </Accordion.Header>
                  <Accordion.Body>
                    Rất tiếc, bạn sẽ phải thanh toán 100% tiền tour cho HIAN để
                    đảm bảo đặt tour. Đến khi nhận tour, bạn sẽ không phải trả
                    thêm khoản phí nào (trừ các dịch vụ cá nhân).
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Dịch vụ có thanh toán trực tuyến không?
                  </Accordion.Header>
                  <Accordion.Body>
                    Bạn có thể thanh toán trực tuyến thông qua Paypal.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col lg="6" className="mt-2">
              <Image
                className="img-class"
                src="https://preview.colorlib.com/theme/tralive/assets/img/gallery/about2.png"
                alt=""
              />
            </Col>
            <Col
              lg="12"
              className="d-flex align-items-center justify-content-center mt-5"
            >
              <Button variant="success" className="p-3">
                <Link className="link-book" to="/home">
                  Đặt Tour Ngay
                </Link>
              </Button>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center mt-5">
            <Col lg="3" >
              <a href="/home">
                <Image
                  className="img-class2"
                  src="https://preview.colorlib.com/theme/tralive/assets/img/gallery/instra4.jpg.webp"
                  alt=""
                />
              </a>
            </Col>{" "}
            <Col lg="3" >
              <a href="/home">
                <Image
                  className="img-class2"
                  src="https://preview.colorlib.com/theme/tralive/assets/img/gallery/instra1.jpg.webp"
                  alt=""
                />
              </a>
            </Col>{" "}
            <Col lg="3" >
              <a href="/home">
                <Image
                  className="img-class2"
                  src="https://preview.colorlib.com/theme/tralive/assets/img/gallery/instra3.jpg.webp"
                  alt=""
                />
              </a>
            </Col>
            <Col lg="3" >
              <a href="/home">
                <Image
                  className="img-class2"
                  src="https://preview.colorlib.com/theme/tralive/assets/img/gallery/instra1.jpg.webp"
                  alt=""
                />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
