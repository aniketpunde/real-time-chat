const CryptoJS = require('crypto-js');

const secretKey = process.env.SECRET_KEY;

exports.encryptMessage = (message) => {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
};

exports.decryptMessage = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
