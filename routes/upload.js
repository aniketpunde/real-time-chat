const express = require("express");
const multer = require("multer");
const path = require("path");
const uploadController = require("../controllers/uploadController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post(
  "/",
  [authMiddleware, upload.single("image")],
  uploadController.uploadImage
);

module.exports = router;
