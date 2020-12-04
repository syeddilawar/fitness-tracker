const router = require("express").Router();
const workoutsRoutes = require("./workoutsRoutes");

// routes entering this folder will have '/api' prepended to their route
// if the route contains '/workouts', then go to the next folder (workoutsRoutes)
router.use("/workouts", workoutsRoutes);

module.exports = router;
