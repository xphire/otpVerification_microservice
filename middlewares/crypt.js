require ('dotenv').config();

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';


const key = crypto.createHash('sha256').update(process.env.CRYPT_PASSWORD).digest();



const encrypt = async (email) => {

    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm,key,iv);

    let encrypted = cipher.update(email,'utf-8','hex');


    encrypted += cipher.final('hex');

    const encryptedData = iv.toString('hex') + encrypted;

    return encryptedData;

    
};


const decrypt = async (encryptedText) => {
   
    const iv = Buffer.from(encryptedText.slice(0,32),'hex');

    const encryptedData = encryptedText.slice(32);

    const decipher = crypto.createDecipheriv(algorithm,key,iv);

    let decrypted = decipher.update(encryptedData,'hex','utf-8');

    decrypted += decipher.final('utf8');

    return decrypted;
};


module.exports = {encrypt,decrypt};

