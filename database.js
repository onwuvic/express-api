import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const connect = () => {
    return mongoose.connect(process.env.DATA_URL)
        .then(connect => {
            console.log('connected to mongoDB');
        })
        .catch(error => {
            console.log(error.message);
        });
}