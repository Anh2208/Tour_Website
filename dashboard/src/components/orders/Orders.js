import React from "react";
import "./order.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteBookings } from "../../Redux/Actions/BookingActions";
import Toast from "../LoadingError/Toast";
import { toast } from "react-toastify";

const Orders = (props) => {
  const ToastObjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };
  const { booking } = props;
  const dispatch = useDispatch();
  const deletehandler = (id) => {
    if (window.confirm("Bạn có thực sự muốn xóa???")) {
      dispatch(deleteBookings(id));
      toast.success("Booking Deleted Success", ToastObjects);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };
  const handleClick = (event) => {
    alert("Đã thanh toán, không thể xóa");
  };
  return (
    <>
      <Toast />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Tên Tour</th>
            <th scope="col">Tên KH</th>
            <th scope="col">Email</th>
            <th scope="col">Thành Viên</th>
            <th scope="col">Ngày đăng ký</th>
            <th>Phone</th>
            {/* <th scope="col" className="text-end">
            Xác nhận
          </th> */}
            <th scope="col">Tổng chi phí</th>
            <th scope="col">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.tourName}</td>
              <td>
                <div>{booking.fullName}</div>
              </td>
              <td>{booking.userEmail}</td>
              <td>{booking.guestSize}</td>
              <td>{moment(booking.createdAt).format("MMM Do YY")}</td>
              <td>
                {/* {booking.phone} */}
                {`${booking.phone}`.padStart(10, "0")}
              </td>
              {/* <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order/${booking._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td> */}
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
              <td>
                {booking.state ? (
                  <button className="delete" onClick={handleClick}>
                    Xóa
                  </button>
                ) : (
                  <button
                    className="delete"
                    onClick={() => deletehandler(booking._id)}
                  >
                    Xóa
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Orders;
