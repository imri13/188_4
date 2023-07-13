// import and set up
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const DB_CRUD = require('./DB/CreateDB_CRUD');
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
app.get('/createTableUsers', DB_CRUD.createTableUsers);
app.get('/insertUsers', DB_CRUD.insertDataUsers);
app.get('/dropTableUsers', DB_CRUD.dropTableUsers);

//Types table
app.get('/createTableTypes', DB_CRUD.createTableTypes);
app.get('/insertTypes', DB_CRUD.insertDataTypes);
app.get('/dropTableTypes', DB_CRUD.dropTableTypes);

//Areas table
app.get('/createTableAreas', DB_CRUD.createTableAreas);
app.get('/insertAreas', DB_CRUD.insertDataAreas);
app.get('/dropTableAreas', DB_CRUD.dropTableAreas);

//Partners table
app.get('/createTablePartners', DB_CRUD.createTablePartners);
app.get('/insertPartners', DB_CRUD.insertDataPartners);
app.get('/dropTablePartners', DB_CRUD.dropTablePartners);

//Places table
app.get('/createTablePlaces', DB_CRUD.createTablePlaces);
app.get('/insertPlaces', DB_CRUD.insertDataPlaces);
app.get('/dropTablePlaces', DB_CRUD.dropTablePlaces);

//PartnersInPlace table
app.get('/createTablePartnersInPlace', DB_CRUD.createTablePartnersInPlace);
app.get('/insertPartnersInPlace', DB_CRUD.insertDataPartnersInPlace);
app.get('/dropTablePartnersInPlace', DB_CRUD.dropTablePartnersInPlace);

//Favorites table
app.get('/createTableFavorites', DB_CRUD.createTableFavorites);
app.get('/dropTableFavorites', DB_CRUD.dropTableFavorites);

app.get('/selectAll', DB_CRUD.selectAll);


//set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});