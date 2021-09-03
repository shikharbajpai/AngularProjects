const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 5000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/',function(req,res){
    res.send("Hello to Server");
})

app.post('/enroll',function(req,res){
    console.log(req.body);
    res.status(401).send({"message":"Data Received"})
    // res.status(200).send({"message":"Data Received"})
})

app.listen(port,function(){
    console.log("Server is running on localhost:"+port);
})