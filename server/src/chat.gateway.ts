import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatroomService } from './modules/chatroom/chatroom.service';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly chatService: ChatroomService) {}

  @SubscribeMessage('send_message')
  listenForMessages(@MessageBody() data: any) {
    const { roomCode, messageBody, sender } = data.body;
    if (data) {
      this.chatService.saveMessage(roomCode, messageBody, sender);
    }
    this.server.sockets.emit('receive_message', data);
  }

  @SubscribeMessage('request_all_messages')
  async requestAllMessages(
    @ConnectedSocket() socket: Socket,
    @MessageBody() data: any,
  ) {
    console.log(data)
    if (socket) {
      const messages = await this.chatService.getMessageRoom(
        data.body.roomCode,
      );
      socket.emit('send_all_messages', messages);
    }
  }
}
