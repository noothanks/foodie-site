const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");
const blogRoutes = require("./blog-routes.js");
const aboutRoutes = require("./about-routes.js");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);
router.use("/blog", blogRoutes);
router.use("/about", aboutRoutes);

module.exports = router;
