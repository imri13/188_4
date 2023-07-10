const path = require('path');
const SQL = require('./DB');
const csv = require('csvtojson');

// Users Table
const createTableUsers = (req,res)=>{
    const Q1 = 'CREATE TABLE IF NOT EXISTS `Users` (name varchar(255) NOT NULL, email varchar(255) NOT NULL PRIMARY KEY, password Int NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8';    
    SQL.query(Q1, (err,mysqlres)=>{
        //console.log("in query");
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.redirect("/insertUsers");
    })};

const insertDataUsers = (req,res)=>{
    const csvPath = path.join(__dirname, "users.csv");
    /// this is new
    csv().fromFile(csvPath).then((jsonObj)=>{
        console.log(jsonObj);
        for (let i = 0; i < jsonObj.length; i++) {
            const element = jsonObj[i];
            console.log(element);
            const NewCsvData = {
                name: element.name,
                email: element.email,
                password: element.password
            }; 
            const Q4 = "insert into Users set ?";
            SQL.query(Q4, NewCsvData, (err, mysqlres)=>{
            if (err) {
                throw err
            }
            });
        }    
    });
    res.send("Data inserted into table");
 };

const dropTableUsers = (req,res)=>{
    const Q2 = 'drop TABLE `Users`;';    
    SQL.query(Q2, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send("hi - table dropped");
        return;
    })};

// Types Table
const createTableTypes = (req,res)=>{
    const Q1 = 'CREATE TABLE IF NOT EXISTS `Types` (typeID Int NOT NULL PRIMARY KEY, typeName varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8';    
    SQL.query(Q1, (err,mysqlres)=>{
        //console.log("in query");
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.redirect("/insertTypes");
    })};

const insertDataTypes = (req,res)=>{
    const csvPath = path.join(__dirname, "types.csv");
    // this is new
    csv().fromFile(csvPath).then((jsonObj)=>{
        console.log(jsonObj);
        for (let i = 0; i < jsonObj.length; i++) {
            const element = jsonObj[i];
            console.log(element);
            const NewCsvData = {
                typeID: element.typeID,
                typeName: element.typeName
            }; 
            const Q4 = "insert into Types set ?";
            SQL.query(Q4, NewCsvData, (err, mysqlres)=>{
            if (err) {
                throw err
            }
            });
        }    
    });
    res.send("Data inserted into table");
};

const dropTableTypes = (req,res)=>{
    const Q2 = 'drop TABLE `Types`;';    
    SQL.query(Q2, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send("hi - table dropped");
        return;
    })};

// Areas Table
const createTableAreas = (req,res)=>{
    const Q1 = 'CREATE TABLE IF NOT EXISTS `Areas` (area varchar(255) NOT NULL PRIMARY KEY) ENGINE=InnoDB DEFAULT CHARSET=utf8';    
    SQL.query(Q1, (err,mysqlres)=>{
        //console.log("in query");
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.redirect("/insertAreas");
    })};

const insertDataAreas = (req,res)=>{
    const csvPath = path.join(__dirname, "areas.csv");
    // this is new
    csv().fromFile(csvPath).then((jsonObj)=>{
        console.log(jsonObj);
        for (let i = 0; i < jsonObj.length; i++) {
            const element = jsonObj[i];
            console.log(element);
            const NewCsvData = {
                area: element.area
            }; 
            const Q4 = "insert into Areas set ?";
            SQL.query(Q4, NewCsvData, (err, mysqlres)=>{
            if (err) {
                throw err
            }
            });
        }    
    });
    res.send("Data inserted into table");
};

const dropTableAreas = (req,res)=>{
    const Q2 = 'drop TABLE `Areas`;';    
    SQL.query(Q2, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send("hi - table dropped");
        return;
    })};


//בינתיים לבדיקות    
const selectAll = (req,res)=>{
    const Q5 = 'select * from `Areas`;';    
    SQL.query(Q5, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send(mysqlres);
        return;
    })};

module.exports = {createTableUsers, insertDataUsers, dropTableUsers,
                  createTableTypes, insertDataTypes, dropTableTypes,
                  createTableAreas, insertDataAreas, dropTableAreas, selectAll};