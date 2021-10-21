import { Document } from 'mongoose';

export interface Room extends Document {
  roomCode: string;

  users: [];

  createdAt: Date;
}
 