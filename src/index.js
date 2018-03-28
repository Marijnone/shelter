'use strict'

/* eslint-env browser */

var moment = require('moment')

var times = document.getElementsByTagName('time')
var length = times.length
var index = -1
var time

while (++index < length) {
  time = times[index]
  time.textContent = moment(time.dateTime, 'YYYY-MM-DD').fromNow()
  time.title = time.dateTime
}

var remove = document.querySelector('.remove')

if (remove) {
  remove.addEventListener('click',onremove)
}
if (remove.length) {
  remove.forEach(function(button){
    button.addEventListener('click', onremove)
  })
}
//function te remove animals
function onremove(ev) {
  var node = ev.target
  var id = node.dataset.id

  fetch('/dier/' + id, {method: 'delete'})
  .then(onresponse)
  .then(onreload, onfail)

  function onresponse(res){
    return res.json()
  }

  function onreload() {
    window.location = '/'
  }
  function onfail(){
    throw new Error ('çould not delete')
  }
}
