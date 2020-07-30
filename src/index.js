const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();

const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars',handlebars());
app.set('view engine');

app.get("/",(req,res,next) => {
    res.send("Hello Express");
});

app.listen(port,() => {
    console.log("Server is running on port ... " ,port);
});