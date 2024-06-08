const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes/v1");

const { sequelize, syncDatabase } = require("./models");

// Configurations
dotenv.config();
const app = express();

// set security HTTP headers
app.use(helmet());

// set logger
app.use(morgan("tiny"));

// enable cors
app.use(cors());
app.options("*", cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// v1 api routes
app.use("/v1", routes);

// Setup Server
const PORT = process.env.PORT || 5001;

syncDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
