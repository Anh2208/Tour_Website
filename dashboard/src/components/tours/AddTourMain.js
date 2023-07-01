import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TOUR_CREATE_RESET } from "../../Redux/Constants/TourConstants";
import { createTours } from "../../Redux/Actions/TourActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import "../tours/tour.css"

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const AddTourMain = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  //
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState(0);
  //
  const [photo, setPhoto] = useState("");
  const [date, setDate] = useState(new Date());
  // const [countInStock, setCountInStock] = useState(0);
  const [day, setDay] = useState("");
  const [desc, setDesc] = useState("");
  const [tax, setTax] = useState(0);
  const [featured, setFeatured] = useState("true");

  const dispatch = useDispatch();

  const tourCreate = useSelector((state) => state.tourCreate);
  const { loading, error, tour } = tourCreate;
  useEffect(() => {
    if (tour) {
      alert("add success");
      toast.success("Tour Added Success", ToastObjects);
      dispatch({ type: TOUR_CREATE_RESET });
      setTitle("");
      setDesc("");
      setPhoto("");
      setPrice(0);
      setDate("");
      setDay("");
      setTax(0);
      setFeatured("");
      setMaxGroupSize(0);
      setAddress("");
      setCity("");
    }
  }, [tour, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newDate = new Date(date);
    dispatch(
      createTours(
        title,
        city,
        address,
        photo,
        desc,
        price,
        newDate,
        day,
        tax,
        featured,
        maxGroupSize
      )
    );
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  const handleSelectChange = (event) => {
    setFeatured(event.target.value);
    alert(featured);
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/tours" className="btn btn-primary text-white">
              Quay lại danh sách tour
            </Link>
            <h2 className="content-title">Thêm Tour</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Thêm mới tour
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
                  <div className="mb-4">
                    <label htmlFor="tour_title" className="form-label">
                      Tiêu đề
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="tour_title"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tour_city" className="form-label">
                      Thành Phố
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="tour_city"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tour_address" className="form-label">
                      Các địa điểm tham quan
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="tour_address"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tour_price" className="form-label">
                      Chi Phí
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="tour_price"
                      required
                      value={price}
                      // onChange={(e) => setPrice(e.target.value)}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        if (newValue < 0) {
                          setPrice(0);
                        } else {
                          setPrice(newValue);
                        }
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tour_maxgroupsize" className="form-label">
                      Số Lượng
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="tour_maxgroupsize"
                      required
                      value={maxGroupSize}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value >= 0) {
                          setMaxGroupSize(value);
                        }
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tour_date" className="form-label">
                      Ngày bắt đầu
                    </label>
                    <input
                      required
                      type="date"
                      className="form-control"
                      rows="7"
                      id="tour_date"
                      min={new Date().toISOString().substr(0, 10)} // set giá trị min là ngày hiện tại
                      value={date.toISOString().substr(0, 10)}
                      onChange={(e) => setDate(new Date(e.target.value))}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tour_day" className="form-label">
                      Số ngày tour
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="tour_day"
                      required
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Mô tả</label>
                    <textarea
                      placeholder="Type here"
                      className="form-control"
                      rows="7"
                      required
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tour_tax" className="form-label">
                      Thuế
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="tour_tax"
                      required
                      value={tax}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        if (newValue < 0) {
                          setTax(0);
                        } else {
                          setTax(newValue);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <select
                      id="featured"
                      class="form-select form-select-sm featured"
                      aria-label=".form-select-sm example"
                      required
                      value={featured}
                      onChange={handleSelectChange}
                    >
                      <option value="true">Có</option>
                      <option value="false">Không</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Hình ảnh</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      value={photo}
                      required
                      onChange={(e) => setPhoto(e.target.value)}
                    />
                    <input className="form-control mt-3" type="file" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <h2>Image Tour</h2>
              <a href={photo} target="_blank" rel="noreferrer">
                <img
                  src={photo}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </a>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddTourMain;
