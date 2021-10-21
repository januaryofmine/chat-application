import React, { useState } from "react";
import { Link } from "react-router-dom";

const JoinRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleUserNameChange = (event) => {
    localStorage.setItem("username", event.target.value);
    setUserName(event.target.value);
  };

  const joinRoom = (e) => {
    
    return <Link to={`/${roomName}`} />;
  };

  return (
    <React.Fragment>
      <div class="flex justify-center items-center mt-64">
        <form className="w-full max-w-sm" onSubmit={joinRoom}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                User Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={userName}
                onChange={handleUserNameChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Room Code
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="text"
                value={roomName}
                onChange={handleRoomNameChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <Link
                to={`/${roomName}`}
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                Join room
              </Link>
            </div>
          </div>
        </form>
      
      </div>
      <div className="absolute top-5 left-20">
          <p className="font-bold">List rooms (copy here)</p>
          <ul class="list-none">
            <li>xPs28qw</li>
            <li>PiSqkj2</li>
            <li>8TrSpwM</li>        
        </ul>
      </div>
    </React.Fragment>
  );
};

export default JoinRoom;
