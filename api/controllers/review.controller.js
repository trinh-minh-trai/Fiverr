import createError from "../utils/createError.js";
import Review from "../models/review.model.js";
import Gig from "../models/gig.model.js";

// Tạo review mới
export const createReview = async (req, res, next) => {
  // Kiểm tra nếu người dùng là seller
  if (req.isSeller)
    return next(createError(403, "Sellers can't create a review!"));

  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    // Kiểm tra nếu người dùng đã tạo review cho gig này
    // const review = await Review.findOne({
    //   gigId: req.body.gigId,
    //   userId: req.userId,
    // });

    // if (review)
    //   return next(createError(403, "You have already created a review for this gig!"));

    // Lưu review mới
    const savedReview = await newReview.save();

    // Cập nhật số sao và số lượng review của gig
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });

    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

// Lấy danh sách các review theo gigId
export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ gigId: req.params.gigId });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};

// Xóa review (đang để trống, bạn cần thêm logic nếu cần)
export const deleteReview = async (req, res, next) => {
  try {
    // Thêm logic xóa review nếu cần
  } catch (err) {
    next(err);
  }
};
