const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Lấy token từ header
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_ACCESS_TOKEN); // Xác thực token
    const user = await User.findById(decoded._id); // Tìm user dựa trên token

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; // Gắn thông tin user vào request
    next(); // Tiếp tục xử lý
  } catch (err) {
    res.status(401).json({ message: "Invalid token", error: err.message });
  }
};

module.exports = isAuth;
