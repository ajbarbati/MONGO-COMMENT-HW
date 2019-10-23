var router = require("express").Router();
var fetchController = require("../../controllers/fetch");
// allows the rrouter to get the fetch page
router.get("/", fetchController.scrapeHeadlines);

module.exports = router;
