// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require
const express = require('express');
const env = require('dotenv');
const lessMiddleware = require('less-middleware');

const inputGetView = require("./routes/views/inputGet.js");
const inputPostView = require("./routes/views/inputPost.js");

//constants
const app = express();
const port = process.env.PORT || 3000;

//to allow POST request 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//ROUTING
//views
app.get('/',(req,res)=>{res.render("index");});
app.get('/timeline',(req,res)=>{res.render("timeline");});
app.get('/cards',(req,res)=>{res.render("cards");});
app.get('/photos',(req,res)=>{res.render("photos");});
app.get('/input/ajax',(req,res)=>{res.render("inputAjax");});
app.get('/input/get',inputGetView);
app.all('/input/post',inputPostView);

//app.set, app.use
app.set("view engine","pug");
app.set('views','templates/views/');

//css, js
app.use(lessMiddleware('dist'));
app.use(express.static('dist'));

//404 not found
app.get("*",(req,res)=>{res.render("errors/404");});

//start
app.listen(port, () => console.log(`Web app listening at http://localhost:${port}`));