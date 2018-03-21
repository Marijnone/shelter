"use strict";

var express = require("express");
var db = require("../db");
var helpers = require("./helpers");
var path = require("path");
var bodyParser = require("body-parser");
var mysql = require("mysql");
require("dotenv").config();

module.exports = express()
  .set("view engine", "ejs")
  .set("views", "view")
  .use(express.static("static"))
  .use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  .use("/image", express.static("db/image"))
  .use(bodyParser.json())
  // .post('/', form)
  .get("/form", form)
  .get("/dier/:id", showAnimal)
  .get("/", all)

  // TODO: Serve the images in `db/image` on `/image`.

  /* TODO: Other HTTP methods. */
  .post("/", addToDB)

  // .put('/:id', set)
  // .patch('/:id', change)
  .delete("/:id", remove)
  .listen(1902);

console.log(process.env.DB_NAME); //check if .env is working it iss
console.log(process.env.DB_HOST);

var connection = mysql.createConnection({
  // debug: true, //method to enable sql to print out debug info which is best thing 
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(function(err) {
  if (err) throw (err)
 else {
    console.log("Connected to MYSQL");
  }
});


  function all(req, res, next) {
    connection.query("SELECT * FROM animals", done);

    function done(err, data) {
      if (err) {
        next(err);
      } else {
        res.render("list.ejs", Object.assign({}, helpers, {data:data}));
      }
    }
  }


//   /* Support both a request for JSON and a request for HTML  */
//   res.format({
//     json: () => res.json(result),
//     html: () => res.render("list.ejs", Object.assign({}, result, helpers))
//   });
// }

// function dieren(req, res) {
//   console.log(req.params.id);
//   var id = req.params.id;
//   var anid;

//   try {
//     //function to make sure that if the url contains anything but a number it throws an 404
//     var anid = db.has(id);
//   } catch (error) {
//     notFound(400, res);
//   }
//   if (anid) {
//     var getId = {
//       data: db.get(id)
//     };
//     res.format({
//       json: () => res.json(getId),
//       html: () => res.render("detail.ejs", Object.assign({}, getId, helpers))
//     });
//   } else {
//     notFound(404, res);
//   }
// }
// // Function to bundle errors and then error.ejs sees what kind of error trough the first parameter
// function notFound(error, res) {
//   var errorObject = {
//     errors: [
//       {
//         id: error,
//         title: error
//       }
//     ]
//   };
//   res.status(error).render("error.ejs", errorObject);
// }

function remove(req, res) {
  //Function to remove sweet animals
  var id = req.params.id;

  try {
    db.remove(id);
    res.status(204);
  } catch (error) {
    if (db.removed(id)) {
      notFound(410, res);
    } else {
      notFound(404, res);
    }
  }
}

function form(req, res) {
  res.render("form.ejs");
}


  //function to show animals


  function showAnimal(req, res, next) {
    var id = req.params.id;

    connection.query("SELECT * FROM dier WHERE ID = ?", id, done); //function to shwo animal

    function done(err, data) {
    
      if (err) {
        next(err);
      } else if (data.length === 0) {
        next();
      } else {
         res.render("detail.ejs", Object.assign({}, helpers, {data:data}));
      }
    }
  }

  function addToDB(req, res, next) { //function to add input to sql
    var input;
    
    
    connection.query(
      "INSERT INTO dier SET ?",
        input = {
        name: req.body.name,
        type: req.body.type,
        place: req.body.place,
        description: req.body.description,
        sex: req.body.sex,
        age: parseInt(req.body.age, 10),
        size: req.body.size,
        length: req.body.length,
        vaccinated: req.body.vaccinated == 1,
        declawed: req.body.declawed == 1,
        primaryColor: req.body.primaryColor,
        secondaryColor: req.body.secondaryColor,
        weight: parseInt(req.body.weight, 10),
        intake: req.body.intake
      },done,)
      
  
  
    //thanks to Tim Ruiterkamp for explaining and helping
    if (input.type === "dog" || input.type === "rabbit") {
      console.log("dog or rabbit");
      input.declawed = undefined;
      console.log(input.declawed);
    } else if (input.type === "cat" && input.type != 0) {
      console.log("cat");
      input.declawed = true;
    } else {
      input.declawed = false;
    }

    if (input.secondaryColor === "" || input.secondaryColor === undefined) {
      input.secondaryColor = undefined;
    }

    function done(err, data) {
      if (err) {
        next(err);
      } else {
        // res.redirect("/dier/" + data.insertId);

        // res.render("detail.ejs", Object.assign({}, helpers, {data:data}));

      }
    }
  }

//     try {
//       var dier = addToDB(input);
      
//       res.redirect("/dier/" + data.insertId);
//       console.log("New animal..............................");
//       console.log(input);
//       console.log();
      
//     } catch (error) {
//       // notFound(422, res);
//       console.log(error);
//       // console.log(err);
//     }
//   }


