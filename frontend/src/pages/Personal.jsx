import React, { useState, useContext } from "react";
// import "./booking.css";
import { Container, Row, Col } from "reactstrap";
import Form from "react-bootstrap/Form";
// import { PayPalButton } from "react-paypal-button-v2";
import { AuthContext } from "../context/AuthContext";
import ListGroup from "react-bootstrap/ListGroup";
import { BASE_URL } from "../utils/config";
// import useFetch from "./../hooks/useFetch";
// import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import BookingList from "./BookingList";

const Personal = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("#link1");
  // console.log(userId);
  const { dispatch } = useContext(AuthContext);
  const handleSelect = (selectedKey, e) => {
    e.preventDefault();
    setActiveTab(selectedKey);
  };
  //get booking
  // const {
  //   data: bookings,
  //   // loading,
  //   // error,
  // } = useFetch(`${BASE_URL}/booking/search/getUserBookings/${user._id}`);

  //test
  const [credentials, setCredentials] = useState({
    username: user.username,
    email: user.email,
    phone: user.phone,
    address: user.address,
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  //hanle info user
  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);
      if (result) alert(result.message);
      dispatch({ type: "CHANGEPASS_SUCCESS", payload: result.message });
      // navigate(``);
      window.location.reload();
    } catch (err) {
      dispatch({ type: "CHANGEPASS_FAILURE", payload: err.message });
    }
  };
  //pay tour

  //handle pass
  const handleClickPass = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/users/pass/${user._id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);
      if (result) alert(result.message);
      dispatch({ type: "CHANGEPASS_SUCCESS", payload: result.message });
      // navigate(``);
      window.location.reload();
    } catch (err) {
      dispatch({ type: "CHANGEPASS_FAILURE", payload: err.message });
    }
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="4">
              <ListGroup activeKey={activeTab} onSelect={handleSelect}>
                <ListGroup.Item variant="light" action href="#link1">
                  Danh sách tour
                </ListGroup.Item>
                <ListGroup.Item variant="light" action href="#link2">
                  Thông tin tài khoản
                </ListGroup.Item>
                <ListGroup.Item variant="light" action href="#link3">
                  Đổi mật khẩu
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col lg="8">
              {activeTab === "#link1" && <BookingList />}
              {activeTab === "#link2" && (
                <>
                  <div>
                    <Form onSubmit={handleClick}>
                      <Form.Group controlId="username">
                        <Form.Label>Khách Hàng(*)</Form.Label>
                        <Form.Control
                          type="input"
                          defaultValue={user.username}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Email(*)</Form.Label>
                        <Form.Control
                          disabled
                          type="email"
                          onChange={handleChange}
                          defaultValue={user.email}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Điện Thoại</Form.Label>
                        <Form.Control
                          type="text"
                          id="phone"
                          defaultValue={user.phone}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Địa Chỉ</Form.Label>
                        <Form.Control
                          type="text"
                          id="address"
                          defaultValue={user.address}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Col
                        lg="12"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <Button
                          className="mt-3"
                          type="submit"
                          size="lg"
                          variant="success"
                        >
                          Thay đổi
                        </Button>
                      </Col>
                    </Form>
                  </div>
                </>
              )}
              {activeTab === "#link3" && (
                <div>
                  <h3>Đổi mật khẩu</h3>
                  <Form onSubmit={handleClickPass}>
                    <Form.Group controlId="formOldPassword">
                      <Form.Label>Mật khẩu hiện tại</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Nhập mật khẩu hiện tại"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formNewPassword">
                      <Form.Label>Mật khẩu mới</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Nhập mật khẩu mới"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formConfirmPassword">
                      <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Xác nhận mật khẩu mới"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Col
                      lg="12"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Button
                        className="mt-3"
                        type="submit"
                        size="lg"
                        variant="success"
                      >
                        Thay đổi
                      </Button>
                    </Col>
                  </Form>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Personal;
