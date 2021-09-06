const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
        type:String,
        trim: true,
        required: "Enter a name for the exercise"
    },

    //need more here
    
})

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;