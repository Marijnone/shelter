## Documentation & progesss

1. How to serve static images 

I've looked up the express doc and learned alot about the .use function.

  ```.use('/image', express.static('db/image'))```
  
2. Implement GET /:id by rendering an animal with the view/detail.ejs template (tip: db.get()). Look at the implementation of GET / (the all function in the server) for inspiration.

``` javascript function dieren(req, res) {
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
```



THis was one of the hardest things during the assigment, but Titus gist on try and catch helped me alot to understand this kind of function
helped me build alot of the other functions in the exersice.



