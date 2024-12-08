const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((err, req, res, next) => {
  console.error("Error occurred:", err.message);
  next(err); // Chuyển lỗi tiếp tới các handler khác
});

const userRoutes = require("./routes/user.route");
const protectedRoutes = require("./routes/protectedData.route");
app.use("/api/users", userRoutes);
app.use("/api", protectedRoutes);

// Kết nối đến MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
