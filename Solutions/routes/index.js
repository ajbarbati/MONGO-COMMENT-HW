var router = require("express").Router();
var apiRoutes = require("./api");
var viewRoutes = require("./view");

// this is just grabbing the routes or pages and putting them all in one place so that the express router can use them

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;
