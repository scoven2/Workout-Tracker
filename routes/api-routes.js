const Workout = require("../models/workout.js");
const mongoose = require("mongoose");
const db = require("../models");
const express = require("express");
const router = express.Router();

//create workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});

//add exercise
router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log("PARAMS", body, params);
    Workout.findOneAndUpdate({ _id: params.id }, { $push: { exercises: body } }, { new: true })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

//get workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

//get workouts in range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .limit(10)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;