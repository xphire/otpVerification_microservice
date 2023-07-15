const {decrypt} = require('../middlewares/crypt');

function emailChecker(email){

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

};

async function validator(email, otpReq , token , otpExists){


    //check if email, otp and verification token was sent in the request body

    if(!email || !token || !otpReq){
        return [false,`Verification failed.Kindly ensure that the email, otp and token fields are all supplied.`];
    };

    //check if email is of type email

    if(!emailChecker(email)){
        return [false,`Verification failed.Kindly supply a valid email address.`];
    };

     //check length of OTP:

     if(otpReq.length !== 6){
        return [false,`Verification Failed. Invalid OTP length`];
    };


     //check token length:

     if(token.length !== 96){
        return [false,`Verification failed.Invalid token, LENGTH less than 96.`];
    };



     //check if OTP is available in the Database


     if(otpExists === null){
         return [false,`Verification failed. OTP Invalid,not existing in DB.`] ;
     };


      //check if OTP has not expired

      if(new Date() > otpExists.verificationExpiryTime){
       return [false,`Verification failed. OTP has expired`];
    };


      //check if Token sent is for the given OTP and thus exists in the database


      if(otpExists.hash !== token){
          return [false,`Verification failed. Invalid token, supplied token is not what is associated with OTP.`];
      };



    //check if otp was sent to the supplied email address


    const decrypted = await decrypt(token);


    if(email.toLowerCase() !== decrypted.toLowerCase()){
        return [false,`Verification failed. The supplied OTP was not sent to the supplied email address.`];
    };


     //check if OTP has already been used

     if(otpExists.verified){
        return [false,`Verification failed. OTP already used.`];
    };


    return [true,`OTP successfully verified`];




};

module.exports = validator;