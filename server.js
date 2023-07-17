// import and set up
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const DB_CRUD = require('./DB/CreateDB_CRUD');
const CRUD = require('./DB/CRUD');
const cookie = require('cookie-parser');
//const SQL = require('./DB/DB');
const port = 3000;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookie());
app.set('views',path.join(__dirname, "views"));
app.set('view engine', 'pug');


//routing
app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/signUp', (req,res)=>{
    res.render('signUp');
});

app.get('/login', (req,res)=>{
    res.render('login');
});

app.get('/logOut', (req,res)=>{
    res.clearCookie('email');
    res.clearCookie('userName');
    res.clearCookie('placeID');
    res.redirect('/');
});

app.post('/formLogin', CRUD.validateUser);

app.get('/main', CRUD.areaOptions);

app.get('/favorites', CRUD.favorites);

app.post('/formSignup', CRUD.createNewUser);
app.post('/mainForm', CRUD.findPlaces);

app.get('/insertFavorite', CRUD.insertNewFavorite);
app.get('/removeFavorite', CRUD.removeFavorite);
app.get('/selectFavorites', CRUD.selectFavorites);



//create DB
app.get('/createAll', (req,res)=>{
    res.redirect('/createTableUsers');
});
app.get('/dropAll', (req,res)=>{
    res.redirect('/dropTableUsers');
});
//Users table
app.get('/createTableUsers', DB_CRUD.createTableUsers);
app.get('/insertUsers', DB_CRUD.insertDataUsers);
app.get('/dropTableUsers', DB_CRUD.dropTableUsers);

//Areas table
app.get('/createTableAreas', DB_CRUD.createTableAreas);
app.get('/insertAreas', DB_CRUD.insertDataAreas);
app.get('/dropTableAreas', DB_CRUD.dropTableAreas);

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