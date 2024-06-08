const multer = require("multer");
const path = require("path");

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Multer upload instance
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /mp4|mkv|avi/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Video files only!");
    }
  },
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB limit
}).single("file");

// Middleware function
const uploadMiddleware = (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ errors: [{ msg: err.message }] });
    } else if (err) {
      return res.status(400).json({ errors: [{ msg: err }] });
    }
    next();
  });
};

module.exports = { uploadMiddleware };
