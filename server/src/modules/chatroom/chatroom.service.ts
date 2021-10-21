import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from 'src/types/room.type';
import { Message } from 'src/types/message.type';
import { ObjectId } from 'mongodb';

@Injectable()
export class ChatroomService {
  constructor(
    @InjectModel('Room')
    private roomModel: Model<Room>,
    @InjectModel('Message')
    private messageModel: Model<Message>,
  ) {}

  async getMessageRoom(roomCode) {
    const room: any = await this.roomModel.findOne({
        roomCode,
    });
    if (room) {
      const listUsr: string[] = room.users;

      const msgAll = await this.messageModel.find({
        users: {
          $in: [listUsr],
        },
      }).sort({'createddAt': -1});

      return msgAll;
    } 
  }

  async saveUserToRoom(roomCode, sender: any) {
    const isRoomExist: any = await this.roomModel.exists({
      roomCode: roomCode,
    });

    if (!isRoomExist) {
      throw new HttpException(
        'roomcode is not exists!',
        HttpStatus.BAD_REQUEST,
      );
    } 
    
    else {
      const room: any = await this.roomModel.findOne({
        roomCode,
      });
      const userOfRoom: any = await room.users.find((user) => user === sender);
      if (userOfRoom) {
        throw new HttpException('username is exists', HttpStatus.BAD_REQUEST);
      } else {
        room.users.push(sender);

        return room.save();
      }
    }
  }

  async saveMessage(roomCode, messageBody, sender) {
    const msgData = new this.messageModel({
      roomCode,
      messageBody,
      sender,
      _id: new ObjectId(),
    });
    
    return msgData.save();
  }
}
