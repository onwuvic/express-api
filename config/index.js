import merge from 'lodash.merge'; // Use to merge our final configuration

// use the set NODE_ENV specified in the .env file, else use 'development'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// App port
const port = process.env.PORT;

// database url for development
const db = process.env.DEV_DATA_URL;

// store our environment state in an env variable
const env = process.env.NODE_ENV;

// create our default environment configuration, which is the development environment
const baseConfig = {
  port, // normally we should have use 'port: port' but es6 allow object shorthand
  database: {
    url: db
  }
};

// set an empty object to store the new set enviroment state
let envConfig = {};

/* eslint global-require: "off" */
switch (env) {
  // if env == development or dev, set envConfig to development environment
  // in order word, set our environment to development enviroment
  case 'development':
  case 'dev':
    envConfig = require('./dev.env').config;
    break;
    // if env == testing or test, set envConfig to testing environment
    // in order word, set our environment to testing enviroment
  case 'testing':
  case 'test':
    envConfig = require('./test.env').config;
    break;
    // if nothing is set use the development environment by default
  default:
    envConfig = require('./dev.env').config;
    break;
}

/**
 *  export the merge config.
 * it merges envConfig on top of baseConfig, overlaping what's on baseConfig
 */
export default merge(baseConfig, envConfig);
