const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const userRoutes = require("./routes/user.routes");
// Middleware
app.use(express.json());
app.use("/api/users", userRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });