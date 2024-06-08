const { body, validationResult } = require("express-validator");

const validateVideo = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").optional().isString(),
  body("rating").optional().isFloat(),
  body("num_ratings").optional().isInt(),
  body("age_rating").optional().isString(),
  body("uhd").optional().isBoolean(),
  body("xray").optional().isBoolean(),
  body("hdr").optional().isBoolean(),
  body("userId")
    .notEmpty()
    .isInt()
    .withMessage("User ID is required and should be an integer"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateVideo;
