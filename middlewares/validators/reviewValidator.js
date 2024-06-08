const { body, validationResult } = require("express-validator");

const validateReview = [
  body("rating")
    .notEmpty()
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating is required and should be between 1 and 5"),
  body("review_text").optional().isString(),
  body("videoId")
    .notEmpty()
    .isInt()
    .withMessage("Video ID is required and should be an integer"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateReview;
