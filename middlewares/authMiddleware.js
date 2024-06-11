require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, secret);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
