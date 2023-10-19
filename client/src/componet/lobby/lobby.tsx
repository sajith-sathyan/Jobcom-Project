import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../context/socketContext";
import axios from "axios";
import {axiosInstance,userRoutes} from '../../api/api'
function Lobby() {
  const [email, setEmail] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const Navigate = useNavigate();
  const socket = useSocket();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      socket?.emit("room:join", { email, room });
    },

    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data: any) => {
      const { email, room } = data;
      console.log(email, room);
      Navigate(`/room/${room}`);
    },
    [Navigate]
  );

  useEffect(() => {
    socket?.on("room:join", handleJoinRoom);

    return () => {
      if (socket) {
        socket.off("room:join", handleJoinRoom);
      }
    };
  }, [socket]);
  

  

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Id</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="room">Room Id</label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br /> <br />
        <button type="submit">Join</button>
      </form>
     
    </div>
  );
}

export default Lobby;
