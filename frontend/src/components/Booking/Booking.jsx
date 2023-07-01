import React, { useState, useContext, useEffect } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title, tax = 0, maxGroupSize } = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const moment = require("moment");
  const datenew = moment(tour.date).format("yyyy-MM-DD");
  const [booking, setBooking] = useState({
    tourId: tour && tour._id,
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: datenew,
    totalPrice: 1,
  });

  const [phoneError, setPhoneError] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "guestSize" && value <= 0) {
      // Nếu người dùng nhập số lượng khách nhỏ hơn hoặc bằng 0 thì không cho phép
      setBooking((prev) => ({ ...prev, [id]: 1 }));
    } else if (id === "guestSize" && value > maxGroupSize) {
      // Nếu người dùng nhập số lượng khách lớn hơn giới hạn thì chỉ cho phép nhập tối đa maxGroupSize
      setBooking((prev) => ({ ...prev, [id]: maxGroupSize }));
    } else if (id === "phone") {
      const phoneRegex = /^((\+84)|0)(9[0-9]|1[2-9])+([0-9]{7})$/g; // điện thoại có 10 chữ số
      if (!phoneRegex.test(value)) {
        // Nếu người dùng nhập số điện thoại không đúng cú pháp thì reset giá trị ô input
        setBooking((prev) => ({ ...prev, [id]: "" }));
        setPhoneError(true);
        return;
      }
      setPhoneError(false);
      setBooking((prev) => ({ ...prev, [id]: value }));
    } else {
      setBooking((prev) => ({ ...prev, [id]: value }));
    }
  };

  const totalPrice =
    Number(price) * Number(booking.guestSize) * Number(tax) +
    Number(price) * Number(booking.guestSize);
  useEffect(() => {
    const totalPrice =
      Number(price) * Number(booking.guestSize) * Number(tax) +
      Number(price) * Number(booking.guestSize);
    setBooking((prev) => ({ ...prev, totalPrice }));
  }, [booking.guestSize, price, tax]);

  //   send data to the server
  const handleClick = async (e) => {
    e.preventDefault();

    console.log(booking);

    try {
      if (!user || user === undefined || user === null) {
        return alert("Please sign in");
      }

      const res = await fetch(`${BASE_URL}/booking/`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/thank-you");
    } catch (err) {
      alert(err.message);
    }
  };
  //test
  // console.log(datenew);
  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          {price} VND<span>/ người</span>
        </h3>
        <span className="tour__rating d-flex align-items-center ">
          <i class="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* ========== booking form ============= */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="phone"
              id="phone"
              required
              onChange={handleChange}
            />
              {phoneError && <div className="error phone">(*)Số điện thoại không hợp lệ</div>}
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              disabled
              value={booking.bookAt}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Số người tham gia"
              min={1}
              id="guestSize"
              max={tour.maxGroupSize}
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* ========== booking end ============= */}

      {/* ========= booking bottom ============ */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5>Số Thành Viên</h5>
            <span> {booking.guestSize} Người</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              {price} VND<i class="ri-close-line"></i> 1 người
            </h5>
            <span> {price} VND</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Thuế</h5>
            <span> {tax} %</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span id="totalPrice" required onChange={handleChange}>
              {" "}
              {totalPrice} VND
            </span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Đặt Tour
        </Button>
      </div>
    </div>
  );
};

export default Booking;
