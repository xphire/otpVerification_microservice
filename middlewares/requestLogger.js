const logger = require('morgan');

const fs = require('fs');

const path = require('path');

const { v4: uuidv4} = require('uuid');


//create id token

logger.token('id', function(){
    return uuidv4();
});

//create time token

logger.token('time',function(){
    return new Date();
})


//logger file stream
const fileStream = fs.createWriteStream(path.join(__dirname,'access.log'),{ flags: 'a'})



const requestLogger = () => {
         

    return logger((':id :time :method :url :response-time'),{stream : fileStream})
     
     };

module.exports = requestLogger;








