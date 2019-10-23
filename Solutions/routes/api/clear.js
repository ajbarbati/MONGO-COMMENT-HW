var router = require("express").Router();
var clearController = require("../../controllers/clear");
// allows the router to get to the clear page.
router.get("/", clearController.clearDB);

module.exports = router;
