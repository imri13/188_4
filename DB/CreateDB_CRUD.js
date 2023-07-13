const path = require('path');
const SQL = require('./DB');
const csv = require('csvtojson');

// Users Table
const createTableUsers = (req,res)=>{
    const Q1 = 'CREATE TABLE IF NOT EXISTS `Users` (name varchar(255) NOT NULL, email varchar(255) NOT NULL PRIMARY KEY, password Int NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8';    
    SQL.query(Q1, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.redirect("/insertUsers");
    })};

const insertDataUsers = (req,res)=>{
    const csvPath = path.join(__dirname, "users.csv");
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
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.redirect("/insertTypes");
    })};

const insertDataTypes = (req,res)=>{
    const csvPath = path.join(__dirname, "types.csv");
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
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.redirect("/insertAreas");
    })};

const insertDataAreas = (req,res)=>{
    const csvPath = path.join(__dirname, "areas.csv");
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

// Partners Table
const createTablePartners = (req,res)=>{
    const Q1 = 'CREATE TABLE IF NOT EXISTS `Partners` (partner varchar(255) NOT NULL PRIMARY KEY) ENGINE=InnoDB DEFAULT CHARSET=utf8';    
    SQL.query(Q1, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.redirect("/insertPartners");
    })};

const insertDataPartners = (req,res)=>{
    const csvPath = path.join(__dirname, "partners.csv");
    csv().fromFile(csvPath).then((jsonObj)=>{
        console.log(jsonObj);
        for (let i = 0; i < jsonObj.length; i++) {
            const element = jsonObj[i];
            console.log(element);
            const NewCsvData = {
                partner: element.partner
            }; 
            const Q4 = "insert into Partners set ?";
            SQL.query(Q4, NewCsvData, (err, mysqlres)=>{
            if (err) {
                throw err
            }
            });
        }    
    });
    res.send("Data inserted into table");
};

const dropTablePartners = (req,res)=>{
    const Q2 = 'drop TABLE `Partners`;';    
    SQL.query(Q2, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send("hi - table dropped");
        return;
    })};

// Places Table
const createTablePlaces = (req,res)=>{
    const Q1 = 'CREATE TABLE IF NOT EXISTS `Places` (placeID Int NOT NULL PRIMARY KEY, placeName varchar(255), area varchar(255), typeID Int, link varchar(255), image varchar(255) ) ENGINE=InnoDB DEFAULT CHARSET=utf8';    
    SQL.query(Q1, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.redirect("/insertPlaces");
    })};

const insertDataPlaces = (req,res)=>{
    const csvPath = path.join(__dirname, "places.csv");
    csv().fromFile(csvPath).then((jsonObj)=>{
        console.log(jsonObj);
        for (let i = 0; i < jsonObj.length; i++) {
            const element = jsonObj[i];
            console.log(element);
            const NewCsvData = {
                placeID: element.placeID,
                placeName: element.placeName,
                area: element.area,
                typeID: element.typeID,
                link: element.link,
                image: element.image
            }; 
            const Q4 = "insert into Places set ?";
            SQL.query(Q4, NewCsvData, (err, mysqlres)=>{
            if (err) {
                throw err
            }
            });
        }    
    });
    res.send("Data inserted into table");
};

const dropTablePlaces = (req,res)=>{
    const Q2 = 'drop TABLE `Places`;';    
    SQL.query(Q2, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send("hi - table dropped");
        return;
    })};

// PartnersInPlace Table
const createTablePartnersInPlace = (req,res)=>{
    const Q1 = 'CREATE TABLE IF NOT EXISTS `PartnersInPlace` (placeID Int NOT NULL, partner varchar(255) NOT NULL, PRIMARY KEY (placeID, partner) )  ENGINE=InnoDB DEFAULT CHARSET=utf8';    
    SQL.query(Q1, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.redirect("/insertPartnersInPlace");
    })};

const insertDataPartnersInPlace = (req,res)=>{
    const csvPath = path.join(__dirname, "PartnersInPlace.csv");
    csv().fromFile(csvPath).then((jsonObj)=>{
        console.log(jsonObj);
        for (let i = 0; i < jsonObj.length; i++) {
            const element = jsonObj[i];
            console.log(element);
            const NewCsvData = {
                placeID: element.placeID,
                partner: element.partner
            }; 
            const Q4 = "insert into PartnersInPlace set ?";
            SQL.query(Q4, NewCsvData, (err, mysqlres)=>{
            if (err) {
                throw err
            }
            });
        }    
    });
    res.send("Data inserted into table");
};

const dropTablePartnersInPlace = (req,res)=>{
    const Q2 = 'drop TABLE `PartnersInPlace`;';    
    SQL.query(Q2, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send("hi - table dropped");
        return;
    })};

// Favorites Table
const createTableFavorites = (req,res)=>{
    const Q1 = 'CREATE TABLE IF NOT EXISTS `Favorites` (email varchar(255) NOT NULL, placeID Int NOT NULL, PRIMARY KEY (email, placeID) ) ENGINE=InnoDB DEFAULT CHARSET=utf8';    
    SQL.query(Q1, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send("hi - table created");
    })};

const dropTableFavorites = (req,res)=>{
    const Q2 = 'drop TABLE `Favorites`;';    
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
    const Q5 = 'select * from `Favorites`;';    
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
                  createTableAreas, insertDataAreas, dropTableAreas,
                  createTablePartners, insertDataPartners, dropTablePartners,
                  createTablePlaces, insertDataPlaces, dropTablePlaces,
                  createTablePartnersInPlace, insertDataPartnersInPlace, dropTablePartnersInPlace,
                  createTableFavorites, dropTableFavorites, selectAll};