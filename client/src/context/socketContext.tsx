  import React, { createContext, useMemo, useContext } from "react";
  import { Socket,io } from "socket.io-client";

  interface SocketContextProps {
    socket: Socket | null;
  }

  const SocketContext = createContext<SocketContextProps>({ socket: null });

  export const useSocket = (): Socket | null => {
    const { socket } = useContext(SocketContext);
    return socket;
  };

  export const SocketProvider:  React.FC<{ children: React.ReactNode }> = (props) => {
    const socket = useMemo(() => io("http://eeventcom.online"), []);

    return (
      <SocketContext.Provider value={{ socket }}>
        {props.children}
      </SocketContext.Provider>
    );
  };
