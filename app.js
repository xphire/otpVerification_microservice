require('dotenv').config();


const express = require('express');

const requestLogger = require('./middlewares/requestLogger');

const {StatusCodes} = require('http-status-codes');

const app = express();

const port = process.env.PORT;

const dbConnection = require('./data/connect');

const router = require('./routers/router');


//middlewares

app.use(express.urlencoded({extended : true}));

app.use(express.json());


app.use(requestLogger());


//Generate OTP Route


app.use('/api/v1',router);



//test route
app.get('/',(req, res,next)=>{
    
    res.status(StatusCodes.OK).send(`Live and kicking at ${new Date()}`);
});

//start function

const start = async () => {

        try {

            await dbConnection();
      
            app.listen(port,()=> {console.log(`Server is running on port ${port}`)})
            
        } catch (error) {
            console.log(error);
            console.error('database connection failed')
        }

       
  
};

start();


