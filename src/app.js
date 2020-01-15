const express = require('express');
const app =  express();
const Task = require('./model/Task')

//settings

 app.set('views', __dirname +'/views');
 app.set('view engine','ejs');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.get('/', async (req,res) =>{
    const tasks = await Task.find();
    console.log(tasks)
    res.render('index',{tasks});
})

//Crear tarea
   app.post('/create', async (req,res)=>{
     const newTask =  new Task({
           task : req.body.task,
           descripcion : req.body.description
       })
       console.log(newTask);
       await newTask.save();
       res.redirect('/');
   })

//static file
app.use(express.static(__dirname +'/public'));

module.exports = app;