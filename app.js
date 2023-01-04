const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const tasksRoute = require("./routes/tasksRoute");

// listening

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => console.log("listenting requests on port " + process.env.PORT));
  })
  .catch((err) => console.log(err));


//middleware
app.use(express.json());
app.use("/api/v1/tasks", tasksRoute);

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get single task
// app. patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task
