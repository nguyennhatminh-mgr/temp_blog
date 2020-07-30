const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();

const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs',handlebars({
    extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources/views'))

app.get("/",(req,res,next) => {
    res.render('home');
});

app.get("/news",(req,res,next) => {
    res.render('news');
});

app.listen(port,() => {
    console.log("Server is running on port ... " ,port);
});