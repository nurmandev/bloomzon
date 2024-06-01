const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

require("dotenv").config();

const bucket = "test";

const s3 = new AWS.S3({
  endpoint: process.env.S3_URL,
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  sslEnabled: false,
  s3ForcePathStyle: true,
});

const storage = multerS3({
  s3,
  bucket,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: "public-read",
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname });
  },
  key: (req, file, cb) => {
    // const name = Date.now().toString();
    const name = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, name);
  },
});

exports.bucket = bucket;
exports.s3 = s3;
exports.upload = multer({ storage });
