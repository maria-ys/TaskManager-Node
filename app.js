const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const tasksRoute = require("./routes/tasksRoute");
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/errorHandler');
//middleware
app.use(express.json());
app.use(express.static('./public'));

//routes
app.use("/api/v1/tasks", tasksRoute);
app.use(notFound);
app.use(errorHandlerMiddleware);

// listening & connected to DB
const port = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log("listenting requests on port " + port));
  })
  .catch((err) => console.log(err));