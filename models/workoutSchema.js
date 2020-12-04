const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    // day: new Date().setDate(new Date().getDate()),
    day: { type: Date, default: Date.now },
    exercises: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
        },
        duration: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true, // indicate to Mongoose, we're going to use virtuals
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  // using the workoutSchema, create a 'totalDuration' virtual property getter
  return this.exercises.reduce((total, exercise) => {
    // for each element in the 'exercises' array, perform the following function:
    return total + exercise.duration; // get the exercise duration ('exercise.duration') and give it to the accumulator ('total')
  }, 0); // with each iteration, the exercise duration gets added to the 'total' and return it
}); // 'totalDuration' will then equal the total amount of time spent on exercising

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

// virtuals:  https://mongoosejs.com/docs/guide.html#virtuals, https://mongoosejs.com/docs/tutorials/virtuals.html
