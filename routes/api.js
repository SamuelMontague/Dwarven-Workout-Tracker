const router = require("express").Router();
const Workout = require("../models/workout.js");

//Render last workout
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
    
})

//Update by ID
router.put("/api/workouts/:id", ({ body }, res) => {
    Workout.create({}) 
    .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true }))
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Get the last 7 workouts
router.get("api/workouts/range", ({body},  res) =>{
    Workout.find().limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

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

















