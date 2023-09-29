import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    // after creating a new review now update the reviews array of the tour
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: savedReview });
  } catch (err) {
    res.status(500).json({ success: false, message: "Chưa đánh giá?" });
  }
};

// import express from 'express';
// import csdl2ReviewModel from '../models/Review.js';

// const router = express.Router();

// // Tạo một đánh giá mới
// router.post('/', async (req, res) => {
//   try {
//     const newReview = new csdl2ReviewModel(req.body);
//     const savedReview = await newReview.save();
    
//     res.status(200).json({ success: true, message: 'Review submitted', data: savedReview });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Chưa đánh giá?' });
//   }
// });

// // Lấy tất cả đánh giá
// router.get('/', async (req, res) => {
//   try {
//     const reviews = await csdl2ReviewModel.find();
    
//     res.status(200).json({ success: true, data: reviews });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Không thể lấy đánh giá' });
//   }
// });

// // Lấy một đánh giá cụ thể bằng ID
// router.get('/:reviewId', async (req, res) => {
//   const reviewId = req.params.reviewId;

//   try {
//     const review = await csdl2ReviewModel.findById(reviewId);
    
//     if (!review) {
//       return res.status(404).json({ success: false, message: 'Không tìm thấy đánh giá' });
//     }

//     res.status(200).json({ success: true, data: review });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Không thể lấy đánh giá' });
//   }
// });

// // Cập nhật đánh giá bằng ID
// router.put('/:reviewId', async (req, res) => {
//   const reviewId = req.params.reviewId;

//   try {
//     const updatedReview = await csdl2ReviewModel.findByIdAndUpdate(reviewId, req.body, { new: true });
    
//     if (!updatedReview) {
//       return res.status(404).json({ success: false, message: 'Không tìm thấy đánh giá' });
//     }

//     res.status(200).json({ success: true, message: 'Đánh giá đã được cập nhật', data: updatedReview });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Không thể cập nhật đánh giá' });
//   }
// });

// // Xóa đánh giá bằng ID
// router.delete('/:reviewId', async (req, res) => {
//   const reviewId = req.params.reviewId;

//   try {
//     const deletedReview = await csdl2ReviewModel.findByIdAndDelete(reviewId);
    
//     if (!deletedReview) {
//       return res.status(404).json({ success: false, message: 'Không tìm thấy đánh giá' });
//     }

//     res.status(200).json({ success: true, message: 'Đánh giá đã được xóa' });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Không thể xóa đánh giá' });
//   }
// });

// export default router;

