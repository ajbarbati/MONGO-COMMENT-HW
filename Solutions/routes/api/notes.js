var router = require("express").Router();
var noteController = require("../../controllers/note");
//gets notes page as well as the get/post/delete
router.get("/:id", noteController.find);
router.post("/", noteController.create);
router.delete("/:id", noteController.delete);

module.exports = router;
