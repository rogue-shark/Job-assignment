const dotenv = require('dotenv');

dotenv.config();

const env = process.env.NODE_ENV || 'development';

const dbUrl =
  env === 'production'
    ? process.env.MONGODB_URI 
    : 'mongodb://127.0.0.1/assignment-proj';

module.exports = dbUrl;
