const { body, validationResult } = require("express-validator");

const validateEpisode = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").optional().isString(),
  body("episode_number")
    .notEmpty()
    .isInt()
    .withMessage("Episode number is required and should be an integer"),
  body("season_number")
    .notEmpty()
    .isInt()
    .withMessage("Season number is required and should be an integer"),
  body("video_url").notEmpty().isString().withMessage("Video URL is required"),
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

module.exports = validateEpisode;
