require('dotenv').config();
const express = require('express');
const { sendMessage, getMessages } = require('./controllers/chatController');
const authMiddleware = require('./middlewares/authMiddleware');
const upload = require('./utils/storage');

const router = express.Router();

router.post('/message', authMiddleware, sendMessage);
router.get('/messages', authMiddleware, getMessages);
router.post('/upload', authMiddleware, upload.single('file'), (req, res) => {
  res.status(201).json({ file: req.file });
});

module.exports = router;
