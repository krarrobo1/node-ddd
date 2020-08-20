require('dotenv').config();

const PRODUCTION = require('./production');
const DEVELOPMENT = require('./development');
const STAGING = require('./staging');

const { NODE_ENV } = process.env;

let currentEnvironment = DEVELOPMENT;

if(NODE_ENV === 'production'){
    currentEnvironment = PRODUCTION;
}else if (NODE_ENV === 'staging'){
    currentEnvironment = STAGING;
}

module.exports = currentEnvironment;