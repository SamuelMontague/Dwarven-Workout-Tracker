const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {type: Date, default: () => new Date()},
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
                weight: Number,
                reps: Number,
                sets: Number, 
                distance: Number,
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
)
// adds a dynamically created prop to schema
WorkoutSchema.virtual("totalDuration").get(function () {
    // reduces exercises to just show the sum of the duration
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
        
    }, 0);
});

const Workout= mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;