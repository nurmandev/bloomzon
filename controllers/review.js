const { Review } = require("../models");
const httpStatus = require("http-status");

// Review Controller
const createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(httpStatus.CREATED).json(review);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to create review" });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { videoId: req.params.videoId },
    });
    res.status(httpStatus.OK).json(reviews);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to get reviews" });
  }
};

const getReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.reviewId);
    if (review) {
      res.status(httpStatus.OK).json(review);
    } else {
      res.status(httpStatus.NOT_FOUND).json({ error: "Review not found" });
    }
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to get review" });
  }
};

const updateReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.reviewId);
    if (review) {
      await review.update(req.body);
      res.status(httpStatus.OK).json(review);
    } else {
      res.status(httpStatus.NOT_FOUND).json({ error: "Review not found" });
    }
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to update review" });
  }
};

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.reviewId);
    if (review) {
      await review.destroy();
      res.status(httpStatus.NO_CONTENT).json();
    } else {
      res.status(httpStatus.NOT_FOUND).json({ error: "Review not found" });
    }
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to delete review" });
  }
};

module.exports = {
  createReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
};
