const express = require("express");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlRoutes")
const logger = require('morgan');
const apiRoutes = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(apiRoutes);
app.use(htmlRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

    
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});