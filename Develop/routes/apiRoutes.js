const router = require("express").Router();
const db = require('../models')

//add more here

router.get("/api/workouts", (req , res) => {
    console.log("message")
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }

            }
        }
    ])
    .then (data => {
        res.json(data);
    })
    .catch (error => {
        res.json(error)
    })
    
});


module.exports = router;