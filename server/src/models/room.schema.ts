import * as mongoose from 'mongoose';

export const Room = new mongoose.Schema({
  roomCode: String,
  users : [],
  createdAt: { type: Date, default: Date.now },
});
