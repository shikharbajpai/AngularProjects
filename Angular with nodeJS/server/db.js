const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shikhar:Shikhar@1@cluster0.xtqm3.mongodb.net/test',{useNewUrlParser: true},(err) => {
if(!err)
     console.log('mongodb connection succeded.');
     else
        console.log('error in DB connection: '+JSON.stringify(err,undefined,2));
});
module.exports = mongoose;
