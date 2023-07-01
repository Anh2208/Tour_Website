import Booking from "../models/Booking.js";
import Tour from "../models/Tour.js";
import path from "path";

// create new booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  const tourId = newBooking.tourId;
  try {
    const { guestSize } = req.body;
    // Lấy thông tin tour từ database
    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }
    // Kiểm tra số lượng khách đặt có vượt quá maxGroupSize của tour không
    if (guestSize > tour.maxGroupSize) {
      return res.status(400).json({
        success: false,
        message: "Number of people exceeds maximum group size",
      });
    }
    // Tạo booking mới
    const savedBooking = await newBooking.save();
    // Cập nhật lại giá trị maxGroupSize của tour
    tour.maxGroupSize -= guestSize;
    await tour.save();
    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    // console.error(err);
    res.status(500).json({
      success: false,
      message: "Vui lòng nhập đúng và đầy đủ dữ liệu!!!",
    });
  }
};

//delete booking
export const deleteBooking = async (req, res) => {
  const id = req.params.id;
  const book = await Booking.findById(id);
  const tour = await Tour.findById(book.tourId);
  try {
    await Booking.findByIdAndDelete(id);

    tour.maxGroupSize += book.guestSize;
    await tour.save();

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to delete",
    });
  }
};
// get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Booking.findById(id);

    res.status(200).json({
      success: true,
      message: "successful",
      data: book,
    });
  } catch (err) {
    res.status(404).json({ success: true, message: "not found" });
  }
};

// get all booking
export const getAllBooking = async (req, res) => {
  const booking = await Booking.find({});
  // .sort({ _id: -1 })
  // .populate("userName", "id name email");
  try {
    // const books = await Booking.find();
    res.json(booking);
  } catch (err) {
    res.status(500).json({ success: true, message: "internal server error" });
  }
};

// get user booking
export const getUserBooking = async (req, res) => {
  try {
    // const userId = "6429de32d3bdb7de34f0b4db";
    const userId = req.params.id;
    const booking = await Booking.find({ userId });
    // console.log(booking);
    res.status(200).json({
      success: true,
      message: "Successful",
      data: booking,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

//update booking
export const updateBooking = async (req, res) => {
  const id = req.params.id;
  // const {username} = req.body;
  // console.log(id)
  // console.log(req.body);
  // console.log("update booking start!!!");
  // console.log(id);
  try {
    const state = "true";
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      {
        $set: { state },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message:
        "Thông tin đã được sửa đổi, vui lòng đăng nhập lại để được cập nhật!",
      data: updatedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};
