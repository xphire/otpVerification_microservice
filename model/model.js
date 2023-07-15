const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    otp: {
           type : String
           
    },


    verificationExpiryTime : {
        type : Date

    },

    verified : {
        type : Boolean,
        default : false
    },

    hash : {
        type : String
    }

}
);

module.exports = mongoose.model('Schema',schema)