const router = require("express").Router();
const db = require('../models')

//add more here

router.get("/api/workouts", (req , res) => {
    //console.log("message")
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

router.post ("/api/workouts", ({body}, res) => {
    db.Workout.create(body)
    .then (data => {
        res.json(data);
    })
    .catch (error => {
        res.json(error)
    })
    
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        {_id: req.params.id },
        { $push: { exercises: req.body }},
        { new: true })
        .then (data => {
            res.json(data);
        })
        .catch (error => {
            res.json(error)
        })
});

// Range

router.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
    .sort({_id: -1})
    .limit(7)
    .then(data => {
        res.json(data);
    })
    .catch (error => {
        res.json(error)
    })
});


module.exports = router;

