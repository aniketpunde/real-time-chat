const { encrypt } = require("../utils/encryption");

exports.handleMessage = (io, socket) => {
  socket.on("message", (msg) => {
    const encryptedMsg = encrypt(msg);
    io.emit("message", { user: socket.user.id, text: encryptedMsg });
  });

  socket.on("image", (imageData) => {
    io.emit("image", { user: socket.user.id, url: imageData.url });
  });
};
