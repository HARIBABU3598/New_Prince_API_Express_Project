const mongoose = require('mongoose');//mongoose is a library used to connect with mongoDB

const connectDatabase = () => {
   mongoose.connect(process.env.DB_URL).then((con) => {
    console.log("MongoDB connect to host: " + con.connection.host);
    
   }) 
};

module.exports = connectDatabase;//exporting module