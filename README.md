# Chat-app

> A real-time chat application built using React, Node.js, Express, and Socket.io which allows for communciation between multiple users inside of a chatroom

## Table of contents

- [General info](#general-info)
- [Setup](#setup)
- [Technologies](#technologies)
  - [Server](#server)
  - [Client](#client)
- [Features](#features)
  - [To-do list](#to-do-list)
- [Status](#status)

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

- Node: v12.16.1
- Nest: 8.1.1
- mongodb: 4.1.3
- @nestjs/platform-express: 8.1.1
- @nestjs/platform-socket.io: 8.1.1
- @nestjs/mongoose: 9.0.1

### Client

- React: ^17.0.2
- react-router-dom: ^5.3.0
- socket.io-client: v4.3.2
- tailwindcss: v2.2.17

## Features

- Support multiple user connections
- Support UI Mobile
- Create various chatrooms with different users
- Chat in real-time


