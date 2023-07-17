const path = require('path');
const SQL = require('./DB');
const cookie = require('cookie-parser');


const createNewUser = (req,res)=>{
    const NewSignUp = {
        name: req.body.userName,
        email: req.body.userEmail, 
        password: req.body.userPassword
    };
    const Q1 = "INSERT INTO Users SET ?";
    SQL.query(Q1, NewSignUp, (err, mysqlres)=>{
        if (err) {
            console.log(err);
            res.render("signUp", { V1: "Email already exists" });    
            return;
        }
        res.redirect("/login");
        return;
    });};

const validateUser = (req,res)=>{
    const loginUser = req.body.userEmail;
    const loginPassword = req.body.userPassword;
    const Q1 = "SELECT * FROM Users WHERE email = ?";
    SQL.query(Q1, loginUser, (err, mysqlres)=>{
        if (err) {
            console.log(err);
            res.send("something went wrong");    
            return;
        }
        if (mysqlres.length == 0 || loginPassword != mysqlres[0].password) {
            res.render("login", { V1: "Wrong Email or Password" });
            return;
        }
        res.cookie("userName", mysqlres[0].name);
        res.cookie("email", loginUser);
        res.redirect('/main');
        return;
    });};


const insertNewFavorite = (req,res)=>{
    const NewFav = {
        email: req.cookies.email, 
        placeID: req.cookies.placeID
    };
    console.log(NewFav.placeID);
    const Q1 = "INSERT INTO Favorites SET ?";
    SQL.query(Q1, NewFav, (err, mysqlres)=>{
        if (err) {
            console.log(err);
            res.send("something went wrong");    
            return;
        }
        console.log("favorite inserted", NewFav);
        res.clearCookie('placeID');
        return;
    });};

const removeFavorite = (req,res)=>{
    const NewFav = {
        email: req.cookies.email, 
        placeID: req.cookies.placeID
    };
    console.log(NewFav.placeID);
    const Q1 = "DELETE FROM Favorites WHERE email = ? AND placeID = ?";
    SQL.query(Q1, [NewFav.email, NewFav.placeID], (err, mysqlres)=>{
        if (err) {
            console.log(err);
            res.send("something went wrong");    
            return;
        }
        console.log("favorite removed", NewFav);
        res.clearCookie('placeID');
        res.redirect('/favorites');
        return;
    });};

const areaOptions = (req,res)=>{
    const Q1 = "SELECT * FROM Areas";
    SQL.query(Q1, (err, mysqlres)=>{
        if (err) {
            console.log(err);
            res.send("something went wrong");    
            return;
        }
        res.render('main', {V1:mysqlres});
        return;
    });};

const findPlaces = (req,res)=>{
    const searchData = [req.body.area, req.body.partners];
    const Q8 = "SELECT P.placeID, P.placeName, P.type, P.link, P.image FROM Places AS P JOIN PartnersInPlace AS X ON P.placeID=X.placeID WHERE P.area = ? AND X.partner = ?";
    const Q9 = "SELECT DISTINCT Types.type FROM (SELECT P.placeID, P.placeName, P.type, P.link, P.image FROM Places AS P JOIN PartnersInPlace AS X ON P.placeID=X.placeID WHERE P.area = ? AND X.partner = ?) AS Types"
    SQL.query(Q8, searchData, (err, mysqlres)=>{
        if (err) {
            console.log(err);
            res.send("something went wrong");    
            return;
        }
        var X1 = {V1:mysqlres, V2: ''};
        SQL.query(Q9, searchData, (err, mysqlres)=>{
            if (err) {
                console.log(err);
                res.send("something went wrong");    
                return;
            }
            X1.V2=mysqlres;
            console.log(X1);
            res.render('results', X1);
            return;
        });
        return;
    });};

const favorites = (req,res)=>{
    const searchData = req.cookies.email;
    const Q8 = "SELECT P.placeID, P.placeName, P.type, P.link, P.image FROM Places AS P WHERE P.placeID IN (SELECT placeID FROM Favorites WHERE email = ?)";
    const Q9 = "SELECT DISTINCT Types.type FROM (SELECT P.placeName, P.type, P.link, P.image FROM Places AS P WHERE P.placeID IN (SELECT placeID FROM Favorites WHERE email = ?)) AS Types"
    SQL.query(Q8, searchData, (err, mysqlres)=>{
        if (err) {
            console.log(err);
            res.send("something went wrong");    
            return;
        }
        var X1 = {V1:mysqlres, V2: ''};
        SQL.query(Q9, searchData, (err, mysqlres)=>{
            if (err) {
                console.log(err);
                res.send("something went wrong");    
                return;
            }
            X1.V2=mysqlres;
            console.log(X1);
            res.render('favorites', X1);
            return;
        });
        return;
    });};

const selectFavorites = (req,res)=>{
    const searchData = req.cookies.email;
    const Q1 = "SELECT placeID FROM Favorites WHERE email = ?";
    SQL.query(Q1, searchData, (err, mysqlres)=>{
        if (err) {
            console.log(err);
            res.send("something went wrong");    
            return;
        }
        res.json(mysqlres);
        return;
    });};

module.exports = {selectFavorites, insertNewFavorite, removeFavorite, createNewUser, validateUser, areaOptions, findPlaces, favorites};