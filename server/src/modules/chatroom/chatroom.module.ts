import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatroomService } from './chatroom.service';
import { ChatroomController } from './chatroom.controller';
import { Room } from 'src/models/room.schema';
import { MessageSchema } from 'src/models/message.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Room', schema: Room },
      { name: 'Message', schema: MessageSchema },
    ]),
  ],
  providers: [ChatroomService],
  controllers: [ChatroomController],
  exports: [ChatroomService]
})
export class ChatroomModule {}
