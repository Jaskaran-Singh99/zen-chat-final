const jwt = require("jsonwebtoken");
const secret = 'secret'

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || secret, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
