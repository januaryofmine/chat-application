import React, { useState, useEffect } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import axios from "axios";
import useChat from "./useChatHook";
import { CONFIG } from "./contants";

const RoomChat = (props) => {
  const roomCode = props.match.params.id;
  const { messages, sendMessage } = useChat(roomCode);
  const [sender] = useState(localStorage.getItem("username"));
  const [newMessage, setNewMessage] = useState("");
  const [dataMsg, setDataMsg] = useState([]);

  useEffect(() => {
    axios.get(`${CONFIG.baseUrl}/chatroom/${roomCode}`, {
      headers: {"Access-Control-Allow-Origin": "*"}
    }).then((res) => {
      const newArr = [...res.data, ...messages];
      setDataMsg(newArr);
    });
    const newArr = [...dataMsg, ...messages];
    setDataMsg(newArr);
  }, []);

  useEffect(() => {
    const newArr = [...dataMsg, ...messages];
    setDataMsg(newArr);
  }, [roomCode, messages]);

  const handleNewMessageChange = (value) => {
    setNewMessage(value);
  };

  const handleSendMessage = () => {
    const messageBody = {
      roomCode,
      messageBody: newMessage,
      sender: sender,
    };
    sendMessage(messageBody);
    setNewMessage("");
  };
  return (
    <div className="App">
      <h1 class="inline-block text-3xl font-extrabold text-gray-900 tracking-tight">
        {sender}
      </h1>
      <div style={{ position: "relative", height: "500px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {dataMsg.map((item, index) => {
                return (
                  <div key={item.id}>
                    <a
                    href="#/"
                      className={
                        item.sender === sender
                          ? "cs-message cs-message--outgoing cs-message__sender-name"
                          : "cs-message cs-message--incoming cs-message__sender-name"
                      }
                    >
                      {item.sender}
                    </a>
                    <Message
                      model={{
                        message: item.messageBody,
                        sentTime: item.createdAt,
                        sender: item.sender,
                        direction:
                          item.sender === sender ? "outgoing" : "incoming",
                      }}
                    />
                  </div>
                );
              })}
            </MessageList>
            <MessageInput
              value={newMessage}
              placeholder="Type message here"
              onSend={handleSendMessage}
              onChange={handleNewMessageChange}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default RoomChat;
