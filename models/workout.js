const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Recording the workouts and exercises
const WorkoutSchema = new Schema(
    {
        day: {type: Date, default: Date.now},
        exercises: [
            {
                type: {
                    type: String,
                    required: "Type of exercise is required"
                },
                name: { 
                    type: String,
                    required: "Name of exercise is required"
                },
                duration: {
                    type: Number,
                    required: "Duration is required"
                },
                weight: Number,
                reps: Number,
                sets: Number, 
                distance: Number,
            },
        ],
    },  
)

const Workout= mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;