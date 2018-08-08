const router = require("express").Router();
const horsesController = require("../../controllers/horsesControllers");

// Matches with "/api/books"
router.route("/")
  .get(horsesController.findAll)
  .post(horsesController.create);

// Matches with "/api/horses/:id"
router.route("/:id")
  .get(horsesController.findById)
  .put(horsesController.update)
  .delete(horsesController.remove);

router.route("/name/:name")
  .get(horsesController.findByName);
router.route("/sire/:sire")
  .get(horsesController.findBySire);
router.route("/mare/:mare")
  .get(horsesController.findByMare);


module.exports = router;
 