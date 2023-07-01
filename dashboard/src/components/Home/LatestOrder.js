import moment from "moment";
import React from "react";
// import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const LatestOrder = (props) => {
  const { loading, error, booking } = props;
  booking.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="card-body">
      <h4 className="card-title">Đơn mới</h4>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Tên</th>
                <th scope="col">Email</th>
                <th scope="col">Thành Viên</th>
                <th scope="col">Ngày đăng ký</th>
                <th>Phone</th>
                <th scope="col">Tổng chi phí</th>
                <th scope="col">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {booking
                .slice(0, 10) // chỉ lấy 10 phần tử đầu tiên của mảng booking
                .map((booking) => (
                  <tr key={booking._id}>
                    <td>
                      <div>{booking.fullName}</div>
                      <b>{booking.title}</b>
                    </td>
                    <td>{booking.userEmail}</td>
                    <td>{booking.totalPrice} VND</td>
                    {/* <td>{booking.guestSize}</td> */}
                    <td>{moment(booking.createdAt).format("MMM Do YY")}</td>
                    <td>{`${booking.phone}`.padStart(10, "0")}</td>
                    <td>{booking.totalPrice} VND</td>
                    <td>
                      {booking.state ? (
                        <button className="pay" disabled>
                          Đã Thanh toán
                        </button>
                      ) : (
                        <button className="dispay" disabled>
                          Chưa Thanh toán
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LatestOrder;
