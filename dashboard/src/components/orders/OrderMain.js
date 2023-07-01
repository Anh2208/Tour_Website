import React, { useEffect, useState } from "react";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Orders from "./Orders";
import { useSelector, useDispatch } from "react-redux";
// import { listOrders } from "../../Redux/Actions/OrderActions";
import { listBooking } from "../../Redux/Actions/BookingActions";

const OrderMain = () => {
  const dispatch = useDispatch();

  const bookingList = useSelector((state) => state.bookingList);
  const { loading, error, booking } = bookingList;
  useEffect(() => {
    dispatch(listBooking());
  }, [dispatch]);
  //state
  const [status, setStatus] = React.useState("all");
  //search booking
  const [searchKeyword, setSearchKeyword] = useState("");
  //sort total price
  const [sortBooking, setSortBooking] = useState("asc");
  //page
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [itemsPerPage] = useState(10); // Số item trên mỗi trang
  const totalPages = Math.ceil(booking.length / itemsPerPage);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Đơn hàng</h2>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Search by Name"
                className="form-control p-2"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="all">Hiển thị tất cả</option>
                <option value="confirmed">Đã xác nhận</option>
                <option value="rejected">Từ chối</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select
                className="form-select"
                value={sortBooking}
                onChange={(e) => setSortBooking(e.target.value)}
              >
                <option disabled>Chi Phí</option>
                <option value="asc">Tăng dần</option>
                <option value="desc">Giảm dần</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              // <Orders booking={booking} />
              <>
                <Orders
                  booking={booking
                    .filter((item) => {
                      if (status === "confirmed" && item.state) return true;
                      if (status === "rejected" && !item.state) return true;
                      if (status === "all") return true;
                      return false;
                    })
                    .filter((item) =>
                      item.fullName
                        .toLowerCase()
                        .includes(searchKeyword.toLowerCase())
                    )
                    .sort((a, b) => {
                      if (sortBooking === "asc") {
                        return a.totalPrice - b.totalPrice;
                      } else if (sortBooking === "desc") {
                        return b.totalPrice - a.totalPrice;
                      } else {
                        return 0;
                      }
                    })
                    .slice(
                      (currentPage - 1) * itemsPerPage,
                      currentPage * itemsPerPage
                    )} // Lấy ra phần tử của trang hiện tại
                />

                <div className="d-flex justify-content-between">
                  <div className="align-self-center">
                    Hiển thị {(currentPage - 1) * itemsPerPage + 1} -{" "}
                    {Math.min(currentPage * itemsPerPage, booking.length)} của{" "}
                    {booking.length} đơn hàng
                  </div>
                  <div className="align-self-center">
                    <ul className="pagination mb-0">
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(currentPage - 1)}
                        >
                          Trang trước
                        </button>
                      </li>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <li
                            key={page}
                            className={`page-item ${
                              page === currentPage ? "active" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </button>
                          </li>
                        )
                      )}
                      <li
                        className={`page-item ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(currentPage + 1)}
                        >
                          Trang kế tiếp
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderMain;
