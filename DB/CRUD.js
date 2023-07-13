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
            res.send("something went wrong");    
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
        res.cookie("userName", mysqlres[0].name);
        if (loginPassword == mysqlres[0].password) {
            res.redirect('/main');
        }
        res.render("login", {V1: "Wrong Email or Password"});
        return;
    });};


const insertNewFavorite = (req,res)=>{
    //res.send(req.query);
    // validate info exists

    // pull info from req.query to json object
    const NewFav = {
        email: req.query.UserEmail, 
        placeID: req.query.placeID
    };
    // run insert query
    const Q1 = "INSERT INTO Favorites SET ?";
    sql.query(Q1, NewFav, (err, mysqlres)=>{
        if (err) {
            console.log(err);
            res.send("something went wrong");    
            return;
        }
        //res.send("thank you!");
        //res.sendFile(path.join(__dirname, "../views/search.html"));
        //res.cookie("nameUser", req.query.UserName);
        res.redirect("/activUser");
        return;
    });};

module.exports = {insertNewFavorite, createNewUser, validateUser};