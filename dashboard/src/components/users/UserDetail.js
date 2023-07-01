import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Toast from "../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { listBooking } from "../../Redux/Actions/BookingActions";
import { listTours } from "../../Redux/Actions/TourActions";
import { listUser } from "../../Redux/Actions/userActions";

const UserDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // get id from URL params
  const [user, setUser] = useState({});
  const [bookings, setBookings] = useState([]);

  const bookingList = useSelector((state) => state.bookingList);
  const { loading, error, booking } = bookingList;
  // const tourList = useSelector((state) => state.tourList);
  // const { tour = [] } = tourList;
  const userList = useSelector((state) => state.userList);
  const { users = [] } = userList;

  useEffect(() => {
    dispatch(listTours());
    dispatch(listBooking());
    dispatch(listUser());
  }, [dispatch]);

  useEffect(() => {
    const foundUser = users.find((u) => u._id === id);
    // const foundBooking = booking.find((b) => b.userId === id);
    const foundBooking = booking.filter((b) => b.userId === id);
    if (foundUser && foundBooking) {
      setUser(foundUser);
      setBookings(foundBooking);
    } else {
      console.log("error found user or booking");
    }
  }, [id, users, booking]);

  console.log("start");
  console.log(bookings);
  console.log(users);
  console.log(id);
  console.log(user);
  console.log(booking);
  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <div>
          <div className="content-header">
            <h2 className="content-title">Chi tiết khách hàng</h2>
            <Link to="/users" className="btn btn-primary text-white">
              Quay lại danh sách Users
            </Link>

            {/* <div>
              <button type="submit" className="btn btn-primary">
                Thêm mới tour
              </button>
            </div> */}
          </div>

          <div className="row mb-4 mt-5">
            <div className="col-xl-8 col-lg-8">
              <h3>Thông tin Tour</h3>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : bookings.length === 0 ? (
                    <div>Người dùng chưa Booking</div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Tên KH</th>
                            {/* <th scope="col">Email</th> */}
                            <th scope="col">Số Lượng</th>
                            <th scope="col">Tổng chi phí</th>
                            <th scope="col">Ngày đăng ký</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Tên Tour</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bookings.map((booking) => (
                            <tr key={booking._id}>
                              <td>
                                <div>{booking.fullName}</div>
                              </td>
                              {/* <td>{booking.userEmail}</td> */}
                              {/* <td>{booking.totalPrice} VND</td> */}
                              <td>{booking.guestSize}</td>
                              {/* <td>{`${booking.phone}`.padStart(10, "0")}</td> */}
                              <td>{booking.totalPrice} VND</td>
                              <td>
                                {moment(booking.createdAt).format("MMM Do YY")}
                              </td>
                              <td>
                                {booking.state ? (
                                  <button className="pay title" disabled>
                                    Đã Thanh toán
                                  </button>
                                ) : (
                                  <button className="dispay title" disabled>
                                    Chưa Thanh toán
                                  </button>
                                )}
                              </td>
                              <td className="title">{booking.tourName}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
            <h3>Thông tin khách hàng</h3>

              {loading ? (
                <Loading />
              ) : error ? (
                <Message variant="alert-danger">{error}</Message>
              ) : user ? (
                <form className="form title">
                  <div className="mb-3">
                    <h5 className="form-label">Tên User:</h5>
                    <span className="user">{user.username}</span>
                  </div>
                  <hr />
                  <div className="mb-3">
                    <h5 className="form-label">Role:</h5>
                    <span className="user">{user.role}</span>
                  </div>
                  <hr />
                  <div className="mb-3 title">
                    <h5 className="form-label ">Email:</h5>
                    <span className="user">{user.email}</span>
                  </div>
                  <hr />
                  <div className="mb-3">
                    <h5 className="form-label">Phone:</h5>
                    <span className="user">{user.phone}</span>
                  </div>
                  <hr />
                  <div className="mb-3 title">
                    <h5 className="form-label">Địa chỉ:</h5>
                    <span className="user title">{user.address}</span>
                  </div>
                </form>
              ) : (
                <Message variant="alert-danger">
                  Không tìm thấy khách hàng
                </Message>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDetail;
