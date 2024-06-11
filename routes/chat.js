const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, (req, res) => {
  res.status(200).send("Chat endpoint");
});

module.exports = router;
