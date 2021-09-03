var express = require('express');

var bodyParser = require('body-parser');

const cors = require('cors');

var path = require('path');

var mongoose = require('mongoose');

var port = 3000;

var app = express();

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

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: 'http://localhost:4200' }));

app.use(bodyParser.json());

//Declaring Other Routes
var formRoute = require('./routes/formData.routes');

app.use('/form', formRoute);

//Default route Setup
app.use('/', (req, res)=>{
    res.send('Welcome to Server');
});

app.listen(port, function () {
    console.log('Server started on port ' + port);
});