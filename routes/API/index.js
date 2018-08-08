const router = require("express").Router();
const horseRoutes = require("./horses");

// Horse routes
router.use("/horses", horseRoutes);

module.exports = router;
