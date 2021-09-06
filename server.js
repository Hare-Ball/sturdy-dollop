const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api.js")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(_dirname, "public")));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
    userNewUrlParser: true,
    useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});