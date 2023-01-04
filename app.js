const express = require('express');
const app = express();
const tasksRoute = require('./routes/tasksRoute');

// listening
const port = 3000;
app.listen(port, ()=> console.log("listenting requests on port "+ port));

//middleware 
app.use(express.json());
app.use('/api/v1/tasks', tasksRoute)

//routes 
app.get('/hello',(req,res)=>{
    res.send("Task Manager App");
})

// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get single task
// app. patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task

