# otpVerification_microservice

#### Hi there!!!

Thank you for your interest.

This is a microservice app that allows you to generate and verify OTPs

There are two routes POST {{BASE_URL}}/api/v1/generateOTP to generate OTP and POST {{BASE_URL}}/api/v1/verifyOTP to verify OTP

The first route has the email field in the request body

The second route has the email, the token, and the otp fields in its request body

##################################################################################

It uses the crypto in-built node module for tokenization

The Nodemailer package is used to send an email to the specified email address using a specified template

The Morgan package helps in logging requests. The log can be found in the access.log file

The Mongoose package helps to interact with the MongoDB database

The OTP-generator package helps to randomize the OTP value generation

The UUID package helps to randomize the ID for each request logged





