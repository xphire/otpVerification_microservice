const generateTemplate = (otp) => {
    return `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>OTP Email</title>
      <style>
        /* Global styles */
        body {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          background-color: #f2f2f2;
          margin: 0;
          padding: 0;
        }
        
        /* Container styles */
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        
        /* Heading styles */
        h1 {
          color: #b580d1;
          font-size: 30px;
          text-align: center;
          margin: 0;
          padding-bottom: 20px;
          border-bottom: 1px solid #eeeeee;
        }
        
        /* OTP styles */
        .otp {
          background-color: #f5f5f5;
          padding: 20px;
          font-size: 36px;
          color: #333333;
          font-weight: bold;
          text-align: center;
          margin-top: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        /* Text styles */
        p {
          font-size: 18px;
          color: #666666;
          line-height: 1.5;
          margin-top: 20px;
          text-align: center;
        }
        
        /* Footer styles */
        .footer {
          text-align: center;
          margin-top: 30px;
          font-size: 14px;
          color: #999999;
        }
        
        .footer-text {
          display: inline-block;
          background-color: #f2f2f2;
          padding: 5px 10px;
          border-radius: 4px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
      </style>
    </head>
    <body>
    
      <div class="container">
        <h1>OTP Verification</h1>
        <p>Use the following OTP to verify your account:</p>
        <div class="otp">${otp}</div>
        <p>Please enter this OTP in your application to complete the verification process.</p>
        <p style="font-weight: bold;">Note: The OTP expires in 10 minutes.</p>
      </div>
    
      <div class="footer">
        <div class="footer-text">
          &copy; Karagandy Technologies
        </div>
      </div>
    
    </body>
    </html>
    `
};

module.exports = generateTemplate;