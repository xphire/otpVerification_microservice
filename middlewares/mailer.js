require('dotenv').config();

const emailTemplate = require('../template/emailTemplate');


const nodemailer = require('nodemailer');




const mailer = async (email,otp) => {

    //Create a transporter using Gmail's SMTP


    const transporter = nodemailer.createTransport(
        {
            service : 'gmail',
            auth : {
    
                user : process.env.EMAIL_ADDRESS,
                pass : process.env.EMAIL_PASSWORD
            }
        }
    );

    //Define the email content with HTML template

    const mailOptions = {
        from : 'Karagandy-Technologies',
        to : email,
        subject : 'OTP Verification',
        html : emailTemplate(otp),
    };

    await transporter.sendMail(mailOptions);

    console.log('mail sent successfully')


};


module.exports = mailer;




