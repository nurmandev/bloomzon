const { version } = require("../package.json");
require("dotenv").config();

const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "bloozom api",
    version,
    license: {
      name: "MIT",
      url: "",
    },
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}/v1`,
    },
  ],
};

module.exports = swaggerDef;
