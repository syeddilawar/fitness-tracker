const router = require("express").Router();
const {
  getAllWorkouts,
  updateWorkouts,
  createWorkouts,
  statsWorkouts,
} = require("./../../../controllers/workoutsController");

// routes entering this folder will have '/api/workouts' prepended to them

// if '/api/workouts/'
// GET request:  query MongoDB and find all the workouts
// POST request:  create a new workout and add to the database
router.route("/").get(getAllWorkouts).post(createWorkouts);

// if '/api/workouts/:id'
// PUT request:  query MongoDB and find a particular workout by its id and update the exercises
router.put("/:id", updateWorkouts);

// if '/api/workouts/range'
// GET request (for stats): query MongoDB and find all the workouts, then limit
router.get("/range", statsWorkouts);

module.exports = router;
