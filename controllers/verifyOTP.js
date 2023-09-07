const {StatusCodes} = require('http-status-codes');


const Schema = require('../model/model');

const validator = require('../middlewares/validator');

const verifyOTP = async (req,res,next) => {

    try {

        //define validator function parameters to use
 
        const email = req.body.email;

        const token = req.body.token;

        const otpReq = req.body.otp;

        const otpExists = await Schema.findOne({otp : otpReq}).exec();

        //invoke validate function

        const validate = await validator(email,otpReq,token,otpExists);

        //use its result in the response body

        if(!validate[0]){
            return res.status(StatusCodes.BAD_REQUEST).send({status: 'failed',statusCode: StatusCodes.BAD_REQUEST, message: validate[1]});
        };


        await Schema.findByIdAndUpdate(otpExists._id,{ verified : true},{new : true});



        return res.status(StatusCodes.OK
            ).send({status: 'success', statusCode : StatusCodes.OK,message : validate[1]});



    } catch (error) {
        
        console.error(error);

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({status: 'failed',statusCode: StatusCodes.INTERNAL_SERVER_ERROR, message: `something went wrong`})
    }




};



module.exports = verifyOTP;

