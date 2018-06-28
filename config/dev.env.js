/**
 * This module set our environment for development
 * It export our development environment configuration
 * It get our development database url for .env file
 */
let db = process.env.DEV_DATA_URL;

export const config = {
  database: {
    url: db
  }
}
