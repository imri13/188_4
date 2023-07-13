// import and set up
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const CRUD = require('./DB/CRUD');
//const SQL = require('./DB/DB');
const port = 3000;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('views',path.join(__dirname, "views"));
app.set('view engine', 'pug');


//routing
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get('/signUp', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/signUp.html"));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/login.html"));
});

app.post('/formLogin', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/main.html"));
});

app.get('/main', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/main.html"));
});

app.get('/myPlaces', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/myPlaces.html"));
});

app.post('/formSignup', (req,res)=>{
    res.redirect('/login');
});

app.post('/mainForm', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/results.html"));
});


//create DB

//Users table
app.get('/createTableUsers', CRUD.createTableUsers);
app.get('/insertUsers', CRUD.insertDataUsers);
app.get('/dropTableUsers', CRUD.dropTableUsers);

//Types table
app.get('/createTableTypes', CRUD.createTableTypes);
app.get('/insertTypes', CRUD.insertDataTypes);
app.get('/dropTableTypes', CRUD.dropTableTypes);

//Areas table
app.get('/createTableAreas', CRUD.createTableAreas);
app.get('/insertAreas', CRUD.insertDataAreas);
app.get('/dropTableAreas', CRUD.dropTableAreas);

app.get('/selectAll', CRUD.selectAll);


//set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});