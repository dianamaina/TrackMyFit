const e = require("express");
const express = require("express");
const { Db } = require("mongodb");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect
(process.env.MONGODB_URI || "mongodb://locahost/trackMyFit",
 { useNewUrlParser: true, useUnifiedTopology: true });

 const connection = mongoose.connection;

 connection.on("connected", () => {
   console.log("Mongoose successfull connected.");
 });

connection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});

app.get("/api/config", (req,res) => {
  res.json({
    success: true,
  });
});

app.get("/api/workout" , (req, res) => {
  db.workout.find({}).then(foundWorkout => {
    res.json(foundWorkout);
  });

});

app.get("/api/workout/:id", (req, res) => {
  db.workout.find({_id: req.params.id}).then(foundWorkout => {
    res.json(foundWorkout);
  });

app.post("/api/workout", (req, res) => {
  db.workout.create(req.body).then((newWorkout) => {
    res.json(newWorkout);
  });
});

app.put("/api/workout/:id", (req, res) => {
  db.workout.update({_id: req.params.id}, req.body).then((updateWorkout) => {
    res.json(updateWorkout);
  });
});

app.delete("/api/workout/:id", (req, res) => {
  db.workout.findByIdAndupdate(req.params.id, req.body, {new: true}).then{(result) => {
    res.json(result);
  }
  };

});

app.listen(PORT, () => {
  console.log( `App is running on http://localhost${PORT}`);
