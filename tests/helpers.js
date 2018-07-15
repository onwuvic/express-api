import '../models/User';
import mongoose from 'mongoose';
import config from '../config';

mongoose.Promise = global.Promise;

export const removeModel = (modelName) => {
  const model = mongoose.model(modelName);
  return new Promise((resolve, reject) => {
    if(!model) {
      return resolve();
    }
    model.remove((error) => {
      if(error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

export const dropDb = () => {
  return mongoose.connect(config.database.url)
    .then(() => Promise.all(mongoose.modelNames().map(removeModel)));
}
