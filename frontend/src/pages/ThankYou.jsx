import React, {useContext} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/thank-you.css";
import { AuthContext } from "../context/AuthContext";

const ThankYou = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <span>
                <i class="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Thank You</h1>
              <h3 className="mb-4">Tour của bạn đã được đặt.</h3>
              <h3 className="mb-4">Vui lòng đến trang cá nhân để thanh toán.</h3>

              <Button className="btn primary__btn w-25">
                <Link to="/home">Back to Home</Link>
              </Button><br/><br/>
              <Button className="btn primary__btn w-25 align-items-center">
                <Link to={`/users/${user._id}`}>Thanh Toán</Link>    
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;
