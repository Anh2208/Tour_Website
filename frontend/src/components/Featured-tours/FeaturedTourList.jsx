import React from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  // Tạo biến lưu trữ ngày hiện tại
  const currentDate = new Date();

  // Lọc các tour có tour.date nhỏ hơn ngày hiện tại
  const filteredTours = featuredTours?.filter(
    (tour) => new Date(tour.date) >= currentDate
  );
  return (
    <>
      {loading && <h4>Loading...........</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        // featuredTours?.map(tour => (
        filteredTours?.map((tour) => (
          <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedTourList;
