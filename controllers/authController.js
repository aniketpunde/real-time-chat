require("dotenv").config();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send("User created");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send("Invalid credentials");
    }
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
