const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// routes entering this folder will have '/' prepended to their route
// if the route contains '/api', then go to the next folder (apiRoutes)
router.use("/api", apiRoutes);

module.exports = router;
