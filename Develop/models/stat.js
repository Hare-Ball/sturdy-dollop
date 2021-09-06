const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const statSchema = new Schema({
    name: {
        type:String,
        trim: true,
        required: "Enter a name for the stat"
    },
    value: {
        type:Number,
        required: "Enter a number amount"
    }
})

const Stat = mongoose.model("Stat", statSchema);

module.exports = Stat;