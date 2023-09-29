import React, {useContext } from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/tour.png";
import { AuthContext } from "./../../context/AuthContext";

const quick__links = [
  {
    path: "/home",
    display: "Trang chủ",
  },
  {
    path: "/about",
    display: "Về chúng tôi",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/tours",
    display: "Tất cả tours",
  },
  {
    path: "/login",
    display: "Đăng nhập",
  },
  {
    path: "/register",
    display: "Đăng ký",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  // const headerRef = useRef(null);
  // const menuRef = useRef(null);
  // const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <footer className="footer">
      <Container>
        
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
              <b>HIAN TOUR</b> <br/> THƯƠNG HIỆU HÀNG ĐẦU VIỆT NAM
              </p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <a href="https://www.youtube.com/" target="blank">
                    <i className="ri-youtube-line"></i>
                  </a>
                </span>
                <span>
                  <a href="https://github.com/" target="blank">
                    <i className="ri-github-fill"></i>
                  </a>
                </span>
                <span>
                  <a href="https://facebook.com/" target="blank"> 
                    <i className="ri-facebook-circle-line"></i>
                  </a>
                </span>
                <span>
                  <a href="https://www.instagram.com/" target="blank">
                    <i className="ri-instagram-line"></i>
                  </a>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Khám phá</h5>

            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          
          {!user && (
            <>
            <Col lg="3">
            <h5 className="footer__link-title">Liên kết nhanh</h5>

            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col></>
          )}


          <Col lg="3">
            <h5 className="footer__link-title">Liên Hệ</h5>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Địa Chỉ:
                </h6>

                <p className="mb-0">Hoa Binh, Bạc Liêu City</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>

                <p className="mb-0">anhvh1412@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>

                <p className="mb-0">+0123456789</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year}, design and develop by Hoang Anh. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
