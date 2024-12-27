// backend/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, "secret_key");  // Replace "secret_key" with your actual secret
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = verifyAdmin;
