var router = require("express").Router();
var headlineController = require("../../controllers/headline");
//grabs the headline page and get/delete/put
router.get("/", headlineController.findAll);
router.delete("/:id", headlineController.delete);
router.put("/:id", headlineController.update);

module.exports = router;
