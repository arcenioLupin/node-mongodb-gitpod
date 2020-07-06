const express = require('express');
const app =  express();
const Task = require('./model/Task')
const Usuario = require('./model/Usuario')

//settings

 app.set('views', __dirname +'/views');
 app.set('view engine','ejs');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
/*app.get('/', async (req,res) =>{
    const tasks = await Task.find();
    console.log(tasks)
    res.render('index',{tasks});
})*/

app.get('/', async (req,res) =>{
    const usuarios = await Usuario.find();
    console.log('avc -usuarios:',usuarios)
    res.render('index',{usuarios});
})
// Buscar Objeto usuario
app.post('/loginUser', async (req,res) =>{
    console.log('avc-,req.body.usuario',req.body.usuario);
    console.log('avc-,req.body.password',req.body.password);
    const usuario = req.body.usuario;
    const password = req.body.password;
    const usuarios = await Usuario.find({"usuario":usuario,"password":password});
    console.log('avc -usuarios:',usuarios)
    //res.render('index',{usuarios});
     res.render('RegistroDatosAdicionales',{usuarios});
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