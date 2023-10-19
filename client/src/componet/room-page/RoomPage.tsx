import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../../context/socketContext";
import peer from "../../service/peer";
import ReactPlayer from "react-player";

function RoomPage() {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState<string | null>(null);
  const [myStream, setMyStream] = useState<any | null>(null);
  const [remoteStream, setRemoteStream] = useState<any | null>(null);
  const [error, setError] = useState<any>();

  const handleCallUser = useCallback(async () => {
    console.log("handleCallUser---called");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      const offer = await peer.getOffer();
      console.log("offer---->", offer);
      socket?.emit("user:call", { to: remoteSocketId, offer });
      setMyStream(stream);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }, [remoteSocketId, socket]);

  const handleUserJoined = useCallback(
    ({ email, id }: { email: string; id: string }) => {
      console.log(`Email ${email} Joined Room`);
      setRemoteSocketId(id);
    },
    []
  );

  const handleIncommingCall = useCallback(
    async ({ from, offer }: { from: string; offer: any }) => {
      console.log(`Incoming Call `, from, offer);
      setRemoteSocketId(from);
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });
        setMyStream(stream);
        const ans = await peer.getAnswer(offer);
        socket?.emit("call:accepted", { to: from, ans });
      } catch (error) {
        console.log(error);
      }
    },
    [socket]
  );

  const sendStream = useCallback(() => {
    if (myStream) {
      for (const track of myStream.getTracks()) {
        peer.peer.addTrack(track, myStream);
      }
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    async ({ from, ans }: { from: any; ans: any }) => {
      try {
        await peer.setLocalDescription(ans);
        console.log("Call Accepted!!");
        sendStream();
      } catch (error) {
        console.log(error);
      }
    },
    [sendStream]
  );

  const handleNegotiationNeeded = useCallback(async () => {
    try {
      const offer = await peer.getOffer();
      socket?.emit("peer:negotiation:needed", { offer, to: remoteSocketId });
    } catch (error) {
      console.log(error);
    }
  }, [remoteSocketId, socket]);

  const handleNagotiationIncomming = useCallback(
    async ({ from, offer }: { from: string; offer: any }) => {
      try {
        const ans = await peer.getAnswer(offer);
        socket?.emit("peer:negotiation:done", { to: from, ans });
      } catch (error) {
        console.log(error);
      }
    },
    [socket]
  );

  const handleNagotiationFinal = useCallback(({ ans }: { ans: any }) => {
    peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegotiationNeeded);
    return () => {
      peer.peer.removeEventListener(
        "negotiationneeded",
        handleNegotiationNeeded
      );
    };
  }, [handleNegotiationNeeded]);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      console.log("--remoteStream----->", remoteStream);
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket?.on("user:joined", handleUserJoined);
    socket?.on("incomming:call", handleIncommingCall);
    socket?.on("call:accepted", handleCallAccepted);
    socket?.on("peer:negotiation:needed", handleNagotiationIncomming);
    socket?.on("peer:negotiation:final", handleNagotiationFinal);
    return () => {
      socket?.off("user:joined", handleUserJoined);
      socket?.off("incomming:call", handleIncommingCall);
      socket?.off("call:accepted", handleCallAccepted);
      socket?.off("peer:negotiation:final", handleNagotiationFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleCallAccepted,
    handleIncommingCall,
    handleNagotiationFinal,
  ]);
  console.log("myStream----->", myStream);
  console.log("remoteSocketId----->", remoteSocketId);
  return (
    <div>
      RoomPage
      <h4>{remoteSocketId ? "Connected" : "No one in Room"}</h4>
      <br />
      <div className="mt-4 flex justify-center flex-col items-center md:flex-row md:items-start space-x-0">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          {myStream && (
            <>
              <h1 className="text-xl font-bold mb-4">My Stream</h1>

              <ReactPlayer
                playing
                muted
                height={"300px"}
                width={"500px"}
                url={myStream}
              />
            </>
          )}
          {remoteSocketId && <button onClick={handleCallUser}>Call</button>}
        </div>
        <div className="w-full md:w-auto md:ml-4">
          {remoteStream && (
            <>
              <h1 className="text-xl font-bold mb-4">Remote Stream</h1>

              <ReactPlayer
                playing
                muted
                height={"300px"}
                width={"500px"}
                url={remoteStream}
              />
              {myStream && (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
                  onClick={sendStream}
                >
                  Send Stream
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RoomPage;
