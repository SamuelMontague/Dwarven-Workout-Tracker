const router = require("express").Router();
const Workout = require("../models/workout.js");
//Render last workout
router.get("/api/workouts", (req, res) => {
})
//Update by ID
router.put("/api/workouts/:id", ({ body }, res) => {
    db.Workout.create(body) 
    .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true }))
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});
//Example exercise 15 -- exercise 14 according to Gary ** lines 31 and down
// app.post("/submit", ({ body }, res) => {
//     db.Note.create(body)
//       .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
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

















