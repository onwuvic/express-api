/**
 * This module set our environment for testing
 * It export our testing environment configuration
 * It get our testing database url for .env file
 */
let db = process.env.TEST_DATA_URL;

export const config = {
  database: {
    url: db
  }
};
