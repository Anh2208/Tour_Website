import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listTours } from "../../Redux/Actions/TourActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const MainProducts = () => {
  const dispatch = useDispatch();

  const tourList = useSelector((state) => state.tourList);
  const { loading, error, tours } = tourList;

  const tourDelete = useSelector((state) => state.tourDelete);
  const { error: errorDelete, success: successDelete } = tourDelete;

  useEffect(() => {
    dispatch(listTours());
  }, [dispatch, successDelete]);

  //list featured, not featured and all tour
  const [featured, setFeatured] = useState([]);
  const [status, setStatus] = React.useState("all");
  const [sortOrder, setSortOrder] = useState("desc");
  const [expiredTours, setExpiredTours] = useState([]);

  const sortByTime = (tours, order) => {
    return tours.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return order === "asc" ? dateA - dateB : dateB - dateA;
    });
  };

  useEffect(() => {
    let featuredTours = [];
    if (tours && status === "all") {
      featuredTours = sortByTime(tours, sortOrder);
    }
    if (tours && status === "featured") {
      featuredTours = sortByTime(
        tours.filter((tour) => tour.featured),
        sortOrder
      );
    }
    if (tours && status === "disfeatured") {
      featuredTours = sortByTime(
        tours.filter((tour) => !tour.featured),
        sortOrder
      );
    }
    if (tours && status === "ood") {
      setExpiredTours(
        sortByTime(
          tours.filter((tour) => new Date(tour.date) < new Date()),
          sortOrder
        )
      );
    }

    setFeatured(featuredTours);
  }, [tours, status, sortOrder]);

  //search tour
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTours = featured.filter((tour) =>
    tour.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //phân trang
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [toursPerPage] = useState(8); // Số tour trong 1 trang
  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredTours.length / toursPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Tour</h2>
        <div>
          <Link to="/addtour" className="btn btn-primary">
            Thêm Tour
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto ">
              <input
                type="search"
                placeholder="Search..."
                className="form-control p-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="all">Hiển thị tất cả</option>
                <option value="featured">Tour Đặc Sắc</option>
                <option value="disfeatured">Tour Thường</option>
                <option value="ood">Tour Quá Hạn</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select
                className="form-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option disabled>Sắp Xếp theo ngày</option>
                <option value="asc">Mới đến cũ</option>
                <option value="desc">Cũ đến mới</option>
              </select>
            </div>
          </div>
        </header>

        <div className="card-body">
          {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <>
              {status === "ood" && expiredTours.length > 0 ? (
                <div className="row">
                  {expiredTours.map((tour) => (
                    <Product tour={tour} key={tour._id} />
                  ))}
                </div>
              ) : (
                <div className="row">
                  {currentTours.map((tour) => (
                    <Product tour={tour} key={tour._id} />
                  ))}
                </div>
              )}
              <div className="d-flex justify-content-center mt-4">
                <ul className="pagination">
                  {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                      <button
                        className="page-link"
                        onClick={() => paginate(number)}
                      >
                        {number}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Trước
                </button>
              </li>
              {pageNumbers.map((pageNumber) => (
                <li
                  className={`page-item ${
                    currentPage === pageNumber && "active"
                  }`}
                  key={pageNumber}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage ===
                    Math.ceil(filteredTours.length / toursPerPage) && "disabled"
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Tiếp theo
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
