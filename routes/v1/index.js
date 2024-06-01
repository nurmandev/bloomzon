const express = require("express");

const userRoute = require("./user.route");
const videoRoute = require("./video.route");
const docsRoute = require("./docs.route");

const router = express.Router();

const Routes = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/videos",
    route: videoRoute,
  },
  {
    path: "/docs",
    route: docsRoute,
  },
];

Routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
