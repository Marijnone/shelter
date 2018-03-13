'use strict'

var express = require('express')
var db = require('../db')
var helpers = require('./helpers')
var path = require('path')
var bodyParser = require('body-parser')


module.exports = express()
    .set('view engine', 'ejs')
    .set('views', 'view')
    .use(express.static('static'))
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use('/image', express.static('db/image'))
    // .post('/', form)
    .get('/form', form)
    .get('/dier/:id', dieren) //thanks to Rijk van Zanten 
    .get('/', all)


    // TODO: Serve the images in `db/image` on `/image`.

    /* TODO: Other HTTP methods. */
    .post('/', add)



    // .put('/:id', set)
    // .patch('/:id', change)
    .delete('/:id', remove)
    .listen(1902)




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
        age: req.body.age,
        size: req.body.size,
        length: req.body.length,
        vaccinated: req.body.vaccinated,
        primaryColor: req.body.primaryColor,
        secondaryColor: req.body.secondaryColor,
        weight: req.body.weight,
        intake: req.body.intake
    }

    try {
        var dier = db.add(dier)
        // db.add(input) //add the inputed data to the db
        res.redirect('/' + dier.id)
        console.log("New data..............................");
        console.log(input);
    } catch (error) {
        console.log(error)
       notFound(422,res)
       
        

    }
//login the filled in form
    console.log(req.body);
    console.log("New data..............................");
    console.log(input);
    
    
}