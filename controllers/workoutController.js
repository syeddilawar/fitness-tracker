const Workout = require("./../models/workoutSchema");

// create functions to export
module.exports = {
  // GET request:  query MongoDB and find all the workouts
  getAllWorkouts: (req, res) => {
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  // PUT request:  query MongoDB and find a particular workout by its id and update the exercises
  updateWorkouts: ({ body, params }, res) => {
    // find workout by id (req.params.id; from wildcard)
    // push into the exercises array, the exercise (from req.body)
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // POST request:  create a new workout and add to the database
  createWorkouts: (req, res) => {
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  // GET request (for stats): query MongoDB and find all the workouts, then limit
  statsWorkouts: (req, res) => {
    Workout.find({})
      .limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
