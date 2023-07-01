// import "../styles/contact.css";
import { Container, Row } from "reactstrap";
import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";
import useFetch from "./../hooks/useFetch";
import Table from "react-bootstrap/Table";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";

const BookingList = () => {
  const { user } = useContext(AuthContext);
  // console.log(userId);
  //get booking
  let number1 = 0;
  let number2 = 0;
  const {
    data: bookings,
    // loading,
    // error,
  } = useFetch(`${BASE_URL}/booking/search/getUserBookings/${user._id}`);

  //delete booking
  const handleClick = async (booking) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa booking này không?")) {
      try {
        const res = await fetch(`${BASE_URL}/booking/${booking._id}`, {
          method: "delete",
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

        alert("Xóa booking thành công!");
        window.location.reload();
      } catch (err) {
        alert(err.message);
      }
    }
  };

  return (
    <>
      <div>
        <h3>Danh sách Tour</h3>
        <section className="pt-0">
          <Container>
            {/* {loading && (
                      <h4 className="text-center pt-5">Loading.....</h4>
                    )}
                    {error && <h4 className="text-center pt-5">{error}</h4>}
                    {!loading && !error && ( */}
            {!bookings.state ? (
              <Row>
                {/* content */}
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên Tour</th>
                      <th>Tên Khách Hàng</th>
                      <th>Thành Viên</th>
                      <th>Tổng Tiền</th>
                      <th>Thanh Toán</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings?.map((booking, index) => {
                      if (!booking.state) {
                        return (
                          <tr key={booking._id || index}>
                            <td>{++number1}</td>
                            <td>{booking.tourName}</td>
                            <td>{booking.fullName}</td>
                            <td>{booking.guestSize}</td>
                            <td>{booking.totalPrice}</td>

                            <td>
                              <PayPalScriptProvider
                                options={{
                                  "client-id":
                                    "AZzvnhG_hCUgzfUqYp6n9tsLLG2mytNOAKfOPmjcU0CVSIk4UPaSsCoGti1bN4y8yYKY5yZ5zH8OhOP6",
                                }}
                              >
                                <PayPalButtons
                                  createOrder={(data, actions) => {
                                    return actions.order.create({
                                      purchase_units: [
                                        {
                                          amount: {
                                            value: booking.totalPrice,
                                          },
                                        },
                                      ],
                                    });
                                  }}
                                  onApprove={(data, actions) => {
                                    return fetch(
                                      `${BASE_URL}/booking/${booking._id}`,
                                      {
                                        method: "put",
                                        body: JSON.stringify({
                                          orderID: data.orderID,
                                        }),
                                      }
                                    ).then(function (details) {
                                      // This function shows a transaction success message to your buyer.
                                      alert(
                                        "Bạn đã thanh toán thành công!!!"
                                        // details.payer.name.given_name +
                                        // "cong ne " +
                                        // test
                                      );
                                      window.location.reload();
                                    });
                                  }}
                                />
                              </PayPalScriptProvider>
                            </td>
                            <td>
                              <Button
                                variant="danger"
                                onClick={() => handleClick(booking)}
                              >
                                Xóa
                              </Button>{" "}
                            </td>
                          </tr>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </tbody>
                </Table>
                {/* content end */}
              </Row>
            ) : (
              <Button className="d-flex btn primary__btn w-25 align-items-center justify-content-center">
                <Link to="/tours">Đặt Tour</Link>
              </Button>
            )}
            {/* )} */}
          </Container>
        </section>
      </div>
      <div>
        <h3>Lịch sử đặt tour</h3>
        <section className="pt-0">
          <Container>
            {/* {loading && (
                        <h4 className="text-center pt-5">Loading.....</h4>
                      )}
                      {error && <h4 className="text-center pt-5">{error}</h4>}
                      {!loading && !error && ( */}
            <Row>
              {/* content */}
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên Tour</th>
                    <th>Tên Khách Hàng</th>
                    <th>Thành Viên</th>
                    <th>Tổng Tiền</th>
                    <th>Thanh Toán</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings?.map((booking, index) => {
                    if (booking.state) {
                      return (
                        <tr key={booking.id || index}>
                          <td>{++number2}</td>
                          <td>{booking.tourName}</td>
                          <td>{booking.fullName}</td>
                          <td>{booking.guestSize}</td>
                          <td>{booking.totalPrice}</td>
                          {/* <td>{booking.state}</td> */}
                          <td>
                            {booking.state ? (
                              <Button
                                style={{ width: "100%" }}
                                variant="success"
                              >
                                Đã Thanh toán
                              </Button>
                            ) : (
                              <Button
                                style={{ width: "100%" }}
                                variant="warning"
                              >
                                Thanh toán
                              </Button>
                            )}
                          </td>
                        </tr>
                      );
                    } else {
                      return null;
                    }
                  })}
                </tbody>
              </Table>
              {/* content end */}
            </Row>
            {/* )} */}
          </Container>
        </section>
      </div>
    </>
  );
};

export default BookingList;
