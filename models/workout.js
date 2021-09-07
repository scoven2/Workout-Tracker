const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {

    },
    exercises: [{

    }],
})

workoutSchema.virtual("totalDuration").get(function() {

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;