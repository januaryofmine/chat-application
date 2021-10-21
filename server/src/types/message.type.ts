import { Document } from 'mongoose';

export interface Message extends Document {
  roomCode: string;

  messageBody: string;
  
  sender: string;
  
  createdAt: Date;
}
