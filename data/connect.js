require('dotenv').config();

const mongoose = require('mongoose');

const dbConnection = async () => {

    await mongoose.connect(process.env.CONNECTIONSTRING,{
    });

    console.log('successfully connected to the database');

};


module.exports = dbConnection;