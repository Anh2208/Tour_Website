import React from "react";

const TopTotal = (props) => {
  const { booking, tours } = props;
  let totalSale = 0;
  // if (booking) {
  //   // booking.map((tour) =>
  //   //   tour.isPaid === true ? (totalSale = totalSale + tour.price) : null
  //   // );
  //   booking.map((booking) => totalSale = totalSale + booking.totalPrice);
  // }
  if (booking) {
    booking.map((booking) => booking.state === true ? (totalSale = totalSale + booking.totalPrice) : null);
  }
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-primary">
              <i className="text-primary fas fa-usd-circle"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Thu nhập</h6>{" "}
              <span>{totalSale.toFixed(0)} VND</span>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-success">
              <i className="text-success fas fa-bags-shopping"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Số đơn hàng</h6>
              {booking ? <span>{booking.length}</span> : <span>0</span>}
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-warning">
              <i className="text-warning fas fa-shopping-basket"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Số Lượng Tour</h6>
              {tours ? <span>{tours.length}</span> : <span>0</span>}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopTotal;
