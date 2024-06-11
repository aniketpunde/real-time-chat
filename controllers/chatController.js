const Message = require('../models/Message');
const { encryptMessage, decryptMessage } = require('../utils/encryption');

exports.sendMessage = async (req, res) => {
  try {
    const { content } = req.body;
    const encryptedContent = encryptMessage(content);
    const message = new Message({ sender: req.user.userId, content: encryptedContent });
    await message.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().populate('sender', 'username');
    const decryptedMessages = messages.map(msg => ({
      ...msg._doc,
      content: decryptMessage(msg.content)
    }));
    res.status(200).json(decryptedMessages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
