const Schema = require('../model/model');

const otpGenerator = require('otp-generator');

const {StatusCodes} = require('http-status-codes');

const {encrypt} = require('../middlewares/crypt');


const mailer = require('../middlewares/mailer');





const generateOTP = async (req,res,next) =>{
   try {

    const email = req.body.email;

    //encrypt email

    const encrypted = await encrypt(email);


   //create otp instance in database

    const databasePayload = {
        otp : otpGenerator.generate(6,{upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false}),
        verificationExpiryTime : setOtpExpiry(10),
        hash : encrypted,
    };



    //save otp to database

     await Schema.create(databasePayload)


    //send mail here


    await mailer(email,databasePayload.otp);



    //send response


    res.status(StatusCodes.OK
        ).send({status: 'success', statusCode : StatusCodes.OK,data : {verificationToken : databasePayload.hash},message : `OTP generated and sent to ${email}`})

    
   } catch (error) {
      console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({status: 'failed',statusCode: StatusCodes.INTERNAL_SERVER_ERROR, data: null , message: `something went wrong`})
   }
};



module.exports = generateOTP;


//generate OTP expiry date and time with this



function setOtpExpiry (minutes) {
    
    const current = new Date();

    return current.setMinutes(current.getMinutes() + minutes);

}