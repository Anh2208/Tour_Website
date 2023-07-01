import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";

import "./tour-card.css";

const TourCard = ({ tour }) => {
  const {
    _id,
    title,
    city,
    photo,
    price,
    day,
    date,
    maxGroupSize,
    featured,
    reviews,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const formattedDate = date.substring(0, 10); // Lấy ra chuỗi "2023-05-01"
  const [y, m, d] = formattedDate.split("-"); // Tách chuỗi thành mảng ["2023", "05", "01"]
  const displayDate = `${d}/${m}/${y}`; // Format lại thành "01/05/2023"

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img style={{ minHeight: "225px" }} src={photo} alt="tour-img" />
          {featured && <span>Đặc Sắc</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i class="ri-star-s-fill"></i>
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews?.length})</span>
              )}
            </span>
          </div>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i class="ri-time-line"></i>
              {day}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              Số lượng: {maxGroupSize}
              <i class="ri-account-circle-fill"></i>
            </span>
          </div>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
            <i class="ri-time-fill"></i> {displayDate}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              {/* Số lượng: {maxGroupSize}
              <i class="ri-account-circle-fill"></i> */}
            </span>
          </div>
          <h5 className="tour__title title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              {price} <span>VND / người</span>
            </h5>

            <button className="btn booking__btn">
              <Link to={`/tours/${_id}`}>Đặt Tour Ngay</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
