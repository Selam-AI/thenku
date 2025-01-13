const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");

// rouths path
const authRoutes = require("./routes/authRoutes");

//dotenv
dotenv.config();
//mongo connection
connectDB();

// rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

//API routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/huggingface", require("./routes/chatbotRoutes"));
app.use("/api/v1/shop", require("./routes/shopRoutes"));

//listen server
app.listen(8080, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white,
  );
});
