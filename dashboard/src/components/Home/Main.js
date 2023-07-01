import React, { useEffect } from "react";
import TopTotal from "./TopTotal";
import LatestOrder from "./LatestOrder";
import SaleStatistics from "./SalesStatistics";
import ToursStatistics from "./ToursStatistics";
import { useDispatch, useSelector } from "react-redux";
import { listBooking } from "../../Redux/Actions/BookingActions";
import { listTours } from "../../Redux/Actions/TourActions";

const Main = () => {
  const dispatch = useDispatch();

  const bookingList = useSelector((state) => state.bookingList);
  const { loading, error, booking } = bookingList;
  const tourList = useSelector((state) => state.tourList);
  const { tours } = tourList;

  useEffect(() => {
    dispatch(listTours());
    dispatch(listBooking());
  }, [dispatch]);
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
  }
  // Lấy userid từ localStorage
  // const userInfoString = localStorage.getItem("userInfo");
  // const userInfo = JSON.parse(userInfoString);
  // const userId = userInfo.data._id;

  // // In ra id
  // console.log(userId);

  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> Dashboard </h2>
        </div>
        {/* Top Total */}
        <TopTotal booking={booking} tours={tours} />

        <div className="row">
          {/* STATICS */}
          <SaleStatistics />
          <ToursStatistics />
        </div>

        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm">
          <LatestOrder booking={booking} loading={loading} error={error} />
        </div>
      </section>
    </>
  );
};

export default Main;
