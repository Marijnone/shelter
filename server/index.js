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
   .get('/:id',animals)

  
  // .put('/:id', set)
  // .patch('/:id', change)
  // .delete('/:id', remove)
  .listen(1902)

function all(req, res) {
  var result = {errors: [], data: db.all()}


  /* Use the following to support just HTML:  */
  res.render('list.ejs', Object.assign({}, result, helpers))

  /* Support both a request for JSON and a request for HTML  */
  // res.format({
  //   json: () => res.json(result),
  //   html: () => res.render('list.ejs', Object.assign({}, result, helpers))
  // })
}

function animals(req, res) {
  console.log(req.params.id)
  var id = req.params.id
  var anid

  try {
    var anid = db.has(id)
  } catch (error) {
    notFound(error,res)
  }
  if (anid){

  res.render('detail.ejs', {data: db.all()})
  } else{
    notFound(404,res)
  }
 }
// Function to bundle errors and pass them to the error.ejs
 function notFound(error, res){
   var errorObject = {
     errors: [{
       id: error,
       title: error
     }]
   }
 }
 res.status(error).render('error.ejs',errorObject)

 }
