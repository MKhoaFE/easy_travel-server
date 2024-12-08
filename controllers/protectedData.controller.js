exports.getProtectedData = (req, res) => {
    try {
      // Trả về dữ liệu bảo vệ kèm thông tin người dùng từ req.user
      res.status(200).json({
        message: "Access granted to protected data!",
        user: {
          id: req.user._id,
          name: req.user.name,
          email: req.user.email,
        },
      });
    } catch (err) {
      // Trả về lỗi nếu có sự cố
      res.status(500).json({
        message: "An error occurred while accessing protected data",
        error: err.message,
      });
    }
  };