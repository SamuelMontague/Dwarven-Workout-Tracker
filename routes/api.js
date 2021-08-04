const router = require("express").Router();
const Workout = require("../models/workout.js");

//Render last workout
router.get("/api/workouts", (req, res) => {
    console.log("route hit")
    Workout.aggregate([{$addFields: {totalDuration: {$sum: '$exercises.duration' }}}])
  
        .then(dbWorkout => {
            console.log("workout", dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log('error', err)
            res.status(400).json(err);
        });
});

//Update by ID
router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log(body)
    Workout.findOneAndUpdate(
        {_id: params.id}, 
        { $push: { exercises: body } }, 
        { new: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Get the last 7 workouts
router.get("/api/workouts/range", (req,  res) => {
    Workout.aggregate([{$addFields: {"totalDuration": {$sum:"$exercises.duration"}}}])
    .sort({_id: -1}).limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Create a workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;

















