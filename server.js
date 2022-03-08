// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require
const express = require('express');
const env = require('dotenv');
const lessMiddleware = require('less-middleware');
const { auth } = require('express-openid-connect');

const checkUser = require("./routes/api/checkUser.js");
const questionnaireView = require("./routes/views/questionnaire.js");
const indexView = require("./routes/views/index.js");
const tasksView = require("./routes/views/tasks.js");
const reportView = require("./routes/views/report.js")
//constants
const app = express();
const port = process.env.PORT || 3000;

//to allow POST request 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_CLIENT_SECRET,
    baseURL: process.env.EXPRESS_PATH,
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_DOMAIN
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

//ROUTING
//views
// req.isAuthenticated is provided from the auth router
app.get('/',indexView);
app.get('/login', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.all('/questionnaire',questionnaireView);
app.get('/tasks',checkUser,tasksView);
app.all('/tasks/:taskId',checkUser,reportView);
app.get("/500",(req,res)=>{res.render("errors/500");});

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