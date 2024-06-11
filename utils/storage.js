const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return {
      filename: `file_${Date.now()}_${file.originalname}`
    };
  }
});

const upload = multer({ storage });
module.exports = upload;
