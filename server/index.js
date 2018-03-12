'use strict'

var express = require('express')
var db = require('../db')
var helpers = require('./helpers')
var path = require('path')

module.exports = express()
  .set('view engine', 'ejs')
  .set('views', 'view')
  .use(express.static('static'))
  .use('/image', express.static('db/image'))


  // TODO: Serve the images in `db/image` on `/image`.
  .get('/', all)
  /* TODO: Other HTTP methods. */
  // .post('/', add)
  .get('/:id', dieren)


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

