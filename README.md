<h1 align="center">
  <br>
  Chat Application
  <br>
</h1>


> A real-time chat application built using React, Nestjs, MongoDB, and Socket.io which allows for communciation between multiple users inside of a chatroom

## Table of contents

- [General info](#general-info)
- [Setup](#setup)
- [Technologies](#technologies)
  - [Server](#server)
  - [Client](#client)
- [Structure](#structure)
- [Features](#features)

## General info

Chat-Application is a real-time chat application built using React, Nest.js, and Socket.io which allows for communciation between multiple users inside of a chatroom.

## Setup

Clone project into desired directory and ensure [Node.js](https://nodejs.org/en/download/) is installed.

```bash
cd server
npm install
cd client
npm install

```

Once the dependencies have been installed, initialize the server, followed by the client:

```bash
cd server
npm run start:dev
cd client
npm start
```

## Technologies

### Server

- [Node: v12.16.1 ](https://nodejs.org/en/)
- [Nest: 8.1.1](https://nestjs.com/)
- [mongodb: 4.1.3](https://www.mongodb.com/)
- [nestjs/platform-express: 8.1.1](https://www.npmjs.com/package/@nestjs/platform-express)
- [nestjs/platform-socket.io: 8.1.1](https://www.npmjs.com/package/@nestjs/platform-socket.io)
- [@nestjs/mongoose: 9.0.1](https://www.npmjs.com/package/@nestjs/mongoose)

### Client

- [React: ^17.0.2](https://reactjs.org/)
- [react-router-dom: ^5.3.0](https://reactrouter.com/web/guides/quick-start)
- [socket.io-client: v4.3.2](https://www.npmjs.com/package/socket.io-client)
- [tailwindcss: v2.2.17](https://tailwindcss.com/docs/)


## Structure
```
root/
└── 📔 client
└── 📒 server
└── README.md
```

## Features

- Support multiple user connections
- Support UI Mobile
- Create various chatrooms with different users
- Chat in real-time


