import { ChatroomService } from './chatroom.service';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Param,
} from '@nestjs/common';

@Controller('chatroom')
export class ChatroomController {
  constructor(private chatRoomService: ChatroomService) {}

  @Get(':roomCode') 
  async getMsgOfRoom(
      @Param("roomCode") roomCode: string
    ) {
    return this.chatRoomService.getMessageRoom(roomCode);
  }

  @Post('/user')
  async saveUserToRoom(@Body() bodyData: any) {
    const { roomCode, username } = bodyData;
    if (!roomCode) {
      throw new HttpException('Room code is required!', HttpStatus.BAD_REQUEST);
    }
    if (!username) {
      throw new HttpException('Username is required!', HttpStatus.BAD_REQUEST);
    }
    return this.chatRoomService.saveUserToRoom(roomCode, username);
  }

  @Post('msg')
  async saveMessage(@Body() bodyData: any) {
    const { roomCode, messageBody, sender } = bodyData;
    if (!roomCode) {
      throw new HttpException('Room code is required!', HttpStatus.BAD_REQUEST);
    }
    if (!messageBody) {
      throw new HttpException('messageBody is required!', HttpStatus.BAD_REQUEST);
    }
    if (!sender) {
      throw new HttpException('sender is required!', HttpStatus.BAD_REQUEST);
    }
    return this.chatRoomService.saveMessage(roomCode,messageBody, sender);
  }
}
