<!-- lint disable no-html -->

# Storage  

1. ```npm install mysql``` run trough the installer and dont forget your password
2. ```npm install dotenv --save``` this will install dotenv
3. ```require("dotenv").config(); ```  add .env to your gitignore
4. In order to get the DB working you need to use a .ENV file including
```
DB_HOST=
DB_USER=
DB_NAME=
DB_PASSWORD=
```
5. then Open the terminal navigate to shelter run ```npm start```, open up another tab and run ```sudo service mysql start``` to start mysql

I found it pretty hard to debug sql and after googling around found the ```debug:true``` option which makes it easier to debug your sql queries. With that turned on i could see which table names where incorrect or had the wrong data types. Got the delete function working which was kinda complex but looking at the slides and working with classmates. Only thing i could not figure out was how to get my db working with a second table using left joins. Also could not manage to export my db?? tried the example as given in de assingment. But ofcourse SQL keeps giving me errors. I do have this image ![db](https://imgur.com/lLpcpNI.jpg)

[link to repo](https://github.com/Marijnone/shelter)

# Shelter

> A partially working Express server.
> Can you fix and finish it?

![](screenshot.png)

![](screenshot-detail.png)

## Install

Fork this repository, `cd` into it, and:

```bash
npm install
npm run build # build and minify static files
npm start # runs server on `localhost:1902`
```

## Todo

There’s a lot of things left to do.
See the [assignment][] description for more info.

## Brief description of code

```txt
build.js - crawls new data (probably not needed)
db/data.json - raw data in json format
db/image/ - images for all animals
db/index.js - interface for accessing data
db/readme.md - docs for `db`
server/ - web server
server/helpers.js - utility functions used in the views to render animals
server/index.js - express server
src/index.css - unprocessed styles
src/index.js - unprocessed scripts
static/ - output of `src` after processing (these are sent to the browser)
view/detail.ejs - ejs template for one animal
view/list.ejs - ejs template for all animals
view/error.ejs - ejs template for errors
```

## Brief description of npm scripts

*   `npm start` — Start the server (on port 1902)
*   `npm test` — Tests the database
*   `npm run lint` — Check browser code and node code for problems
*   `npm run build` — Build browser code

## Data

Data is crawled (by `build.js`) from [nycacc][].
If you have the means to do so, you should consider becoming a foster parent,
volunteering at your local animal shelter, or donating!

## License

[MIT][] © [Titus Wormer][author]

[mit]: license

[author]: http://wooorm.com

[assignment]: https://github.com/cmda-be/course-17-18/blob/master/week-4.md#shelter

[nycacc]: http://nycacc.org
