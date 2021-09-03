// Import mongoose. 
const mongoose = require('mongoose');

// Connect to Mongodb
mongoose.connect("mongodb://localhost:27017/contactList");

// Inside this event we can detect if database is connected. 
// event is called as () =>{} 

mongoose.connection.on('connected', () => {
    console.log("Mongodb Connection is successful");
});

// error event that will be fired if any error occurs during database communication. 
mongoose.connection.on('error', err => {
    console.log("Error in Mongodb Connection" + err);
})

// module.exports --  so that we can import this configuration file into others. 
module.exports = mongoose;