const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const mongoSanitize = require("mongo-sanitize");
const helmet = require("helmet");
const dotenv = require("dotenv").config();
const loadTestData = require("./testData");
const app = express();

/* IMPORT ROUTES */
const productRoutes = require("./routes/product.routes");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use((req, res, next) => {
  mongoSanitize(req.body);
  next();
});

/* API ENDPOINTS */
app.use("/api", productRoutes);

/* API ERROR PAGES */
app.use((req, res) => {
  res.status(404).send("Not found...");
});

/* MONGOOSE */
mongoose.connect(
  `mongodb+srv://dzikdrums:${process.env.MONGO_PASS}@drumstore-d6v8f.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to the database");
  loadTestData();
});

db.on("error", err => console.log("Error: " + err));

/* START SERVER */
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
