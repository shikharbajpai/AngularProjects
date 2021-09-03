// express --- to set up the server. 
// require is used to import any modules. 

var express = require('express');

var bodyParser = require('body-parser');

const cors = require('cors');

var path = require('path');

var mongoose = require('mongoose');
var config = require('./config');

// connect to mongoDB 
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl);
mongoose.connection.on('connected', () => {
    console.log('connected to mongo database');
});

mongoose.connection.on('error', err => {
    console.log('Error at mongoDB: ' + err);
});

//Declaring Routes for the Application -- route -- index
var index = require('./routes/index');

//Declaring Other Routes
var userRoute = require('./routes/user.routes');
var videoRoute = require('./routes/video.routes');


var port = 3000;

// Initializing express 
var app = express();

// Declaring and Setting "public" Resources Folders
//EXPRESS SPECIFIC/CONFIGURATION

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));

//Add Middleware
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:4200' }));

// Setting First Route 
app.use('/index', index);

//Setting Other Routes
app.use('/users', userRoute);
app.use('/videoplayer', videoRoute);

//ENDPOINTS
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    // res.send('Hello NodeJS and Nodemon');
});

//START THE SERVER
app.listen(port, function () {
    console.log('Server started on port ' + port);
});