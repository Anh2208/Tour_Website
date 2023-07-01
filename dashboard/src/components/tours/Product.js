import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTours } from "../../Redux/Actions/TourActions";
// import { toast } from "react-toastify";
import Toast from "../LoadingError/Toast";
import "./tour.css";

const Product = (props) => {
  // const ToastObjects = {
  //   pauseOnFocusLoss: false,
  //   draggable: false,
  //   pauseOnHover: false,
  //   autoClose: 2000,
  // };
  const { tour } = props;
  const dispatch = useDispatch();
  const deletehandler = (id) => {
    if (window.confirm("Bạn có thực sự muốn xóa???")) {
      dispatch(deleteTours(id));
    }
  };
  // nếu tour.date bé hơn ngày hiện tại
  const isExpired = new Date(tour.date) < new Date();
  return (
    <>
      <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
        <Toast />
        <div className="card card-product-grid shadow-sm">
          <div className="card tour__img">
            <Link to={`/tour/${tour._id}/edit`} className="img-wrap">
              <img src={tour.photo} alt="Product" />
            </Link>
            {isExpired && <span className="">Quá Hạn</span>}
          </div>
          <div className="info-wrap">
            <Link to={`/tour/${tour._id}/edit`} className="title text-truncate">
              {tour.title}
            </Link>
            <div><i class="fa fa-location"></i>{tour.city}</div>
            <div className="row price mb-4">
              <div className="col-8">
                <i class="fa fa-dollar-sign"> </i>
                {tour.price} VND
              </div>
              <div className="col-4">
                <i class="fa fa-user"> </i>
                <span> {tour.maxGroupSize}</span>
              </div>
            </div>

            <div className="row">
              <Link
                to={`/tour/${tour._id}/edit`}
                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
              >
                <i className="fas fa-pen"></i>
              </Link>
              <Link
                to="#"
                onClick={() => deletehandler(tour._id)}
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
              >
                <i className="fas fa-trash-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
