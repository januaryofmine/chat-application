import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { CONFIG } from "./contants";

const SEND_MESSAGE = "send_message";

const SOCKET_SERVER_URL = CONFIG.baseUrl;

const useChat = (roomCode) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomCode },
    });

    socketRef.current.on('receive_message', (data) => {
      const incomingMessage = data.body;
      setMessages((message) => [incomingMessage]);
    });
    
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomCode]);

  const sendMessage = (messageBody) => {
    socketRef.current.emit(SEND_MESSAGE, {
      body: messageBody
    });
  };

  return { messages, sendMessage };
};

export default useChat;