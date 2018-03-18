'use strict'

var express = require('express')
var db = require('../db')
var helpers = require('./helpers')
var path = require('path')
var bodyParser = require('body-parser')
var mysql = require('mysql')
require('dotenv').config()


module.exports = express()
    .set('view engine', 'ejs')
    .set('views', 'view')
    .use(express.static('static'))
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use('/image', express.static('db/image'))
    .use(bodyParser.json())
    // .post('/', form)
    .get('/form', form)
    .get('/dier/:id', dieren) 
    .get('/', all)
    // TODO: Serve the images in `db/image` on `/image`.

    /* TODO: Other HTTP methods. */
    .post('/', add)



    // .put('/:id', set)
    // .patch('/:id', change)
    .delete('/:id', remove)
    .listen(1902)


    console.log(process.env.DB_NAME) //check if .env is working it iss
    console.log(process.env.DB_HOST);
    
    var connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
    connection.connect(function(err) {
      if (err) throw err;
      else {
        console.log("Connected to MYSQL");
      }
    });
    
    //   console.log(connection);
      

function all(req, res) {
    var result = {
        errors: [],
        data: db.all()
    }
    /* Support both a request for JSON and a request for HTML  */
    res.format({
        json: () => res.json(result),
        html: () => res.render('list.ejs', Object.assign({}, result, helpers))
    })
}


function dieren(req, res) {
    console.log(req.params.id)
    var id = req.params.id
    var anid

    try { //function to make sure that if the url contains anything but a number it throws an 404
        var anid = db.has(id)
    } catch (error) {
        notFound(400, res)
    }
    if (anid) {
        var getId = {
            data: db.get(id)
        }
        res.format({
            json: () => res.json(getId),
            html: () => res.render('detail.ejs', Object.assign({}, getId, helpers))
        })

    } else {
        notFound(404, res)
    }
}
// Function to bundle errors and then error.ejs sees what kind of error trough the first parameter
function notFound(error, res) {
    var errorObject = {
        errors: [{
            id: error,
            title: error
        }]
    }
    res.status(error).render('error.ejs', errorObject)
}

function remove(req, res) { //Function to remove sweet animals
    var id = req.params.id

    try {
        db.remove(id)
        res.status(204)
    } catch (error) {
        if (db.removed(id)) {
            notFound(410, res)
        } else {
            notFound(404, res)
        }
    }
}

function form(req, res) {
    res.render('form.ejs')
}

function add(req, res) {
   
    var input = {
        name: req.body.name,
        type: req.body.type,
        place: req.body.place,
        description: req.body.description,
        sex: req.body.sex,
        age: parseInt(req.body.age, 10),
        size: req.body.size,
        length: req.body.length,
        vaccinated: req.body.vaccinated == 1,
        declawed : req.body.declawed,
        primaryColor: req.body.primaryColor,
        secondaryColor: req.body.secondaryColor,
        weight: parseInt(req.body.weight, 10),
        intake: req.body.intake
       

    }
    console.log(input);
    
    
    
 //thanks to Tim Ruiterkamp for explaining and helping
    if (add.type === 'dog' || add.type === 'rabbit') {
        console.log('dog or rabbit')
        add.declawed = undefined
        console.log(add.declawed)
      }  else if (add.type === 'cat' || add.type != undefined) {
        console.log('cat')
        add.declawed = 'true'
      } else {
        add.declawed = undefined
      }
    
      if (add.secondaryColor === '' || add.secondaryColor === undefined) {
        add.secondaryColor = undefined
      }
   

    try {
        var dier = db.add(input)
        // db.add(input) //add the inputed data to the db
        res.redirect('/dier/' + dier.id)
        console.log("New animal..............................");
        console.log(input)
    } catch (error) {
        console.log(error)
        
       notFound(422,res)
    
    }

     
      
}