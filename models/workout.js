const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
        },
        name: {
            type: String,
            trim: TransformStreamDefaultController,
            required: "Enter an exercise name"
        },
        duration: {
            type: Number,
            required: "Enter your exercise duration in minutes"
        },
        distance: {
            type: Number,
            default: 0
        },
        reps: {
            type: Number,
            default: 0
        },
        sets: {
            type: Number,
            default: 0
        },
        weight: {
            type: Number,
            default: 0
        },
    }],
})

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;