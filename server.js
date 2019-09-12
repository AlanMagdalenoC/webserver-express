//requiring express to turn on the server functions
const express = require('express');
const app = express();
//require hbs to use handlebars
const hbs = require('hbs');
//including helpers file
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//funcion de express que indica en que ruta obtenedra los archivos a mostrar
app.use(express.static(__dirname + '/public'));

//Express HBS - Handle bars to build the site
//Adding partial views with hbs
hbs.registerPartials(__dirname + '/views/partials/');
app.set('view engine', 'hbs');


//Defining routes of web application
// first view to render, second - parameters are allowed as json object
//res.send shows a message on screen
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'aLAn',
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        imagen: 'assets/img/test.jpg',
    });

});

app.get('/data', (req, res) => {

    res.send('salida data');

});

//set the port to use on server application
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});

// on package.json can declare some script to execute from terminal,
// if uses protected words jus use npm start, if uses any other word needs npm run "nombre del script"