import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  roomCode : String,
  messageBody: { type: String },
  sender: String,
  createdAt: { type: Date, default: Date.now },
});
