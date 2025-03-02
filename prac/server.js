const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB=require("./config/db");
const authRoutes = require("./routes/auth.route");
const yogaRoutes = require("./routes/yoga.route");
// const ratingRoutes = require("./routes/ratingRoutes");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

connectDB();
app.use("/auth", authRoutes);
app.use("/yoga", yogaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
