import './config/loadenv'; // this auto preload our environment variables
import config from './config'; // get our environment state variables
import mongoose from 'mongoose';

console.log(config.database.url);

export const connect = () => {
    return mongoose.connect(config.database.url)
        .then(connect => {
            console.log('connected to mongoDB');
        })
        .catch(error => {
            console.log(error.message);
        });
}
