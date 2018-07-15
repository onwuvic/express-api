import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    required: true,
    type: String
  }
});

export const User = mongoose.model('User', userSchema);
