const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
        },
        name: {
            type: String,
        },
        duration: {
            type: Number,
        },
        distance: Number,
        reps: Number,
        sets: Number,
        weight: Number
    }],
},
{
    toJSON: {
        virtuals:true
    }
});

workoutSchema.virtual("totalDuration").get(function() {
    const duration = this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
        return duration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;