const path = require('path');
const SQL = require('./DB');

const insertNewFavorite = (req,res)=>{
    //res.send(req.query);
    // validate info exists

    // pull info from req.query to json object
    const NewSignUp = {
        email: req.query.UserEmail, 
        placeID: req.query.placeID
    };
    // run insert query
    const Q1 = "INSERT INTO Favorites SET ?";
    sql.query(Q1, NewSignUp, (err, mysqlres)=>{
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

module.exports = {insertNewFavorite};