import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { axiosInstance, userRoutes } from "../../api/api";
import { useSocket } from "../../context/socketContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import Navbar from "../../componet/navBar/nav-bar";

function HashTagPage() {
  const [hashTag, setHasTag] = useState<string>("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  //   const [roomId, setRoomId] = useState<string | null>(null);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const Navigate = useNavigate();
  const socket = useSocket();

  function generateHashtag(word: string): string {
    let modifiedWord = word.trim();
    if (modifiedWord.length === 0) {
      return "";
    }
    if (modifiedWord.startsWith("#")) {
      modifiedWord = modifiedWord.slice(1);
    }
    const hashtag = `#${modifiedWord}`;
    return hashtag;
  }

  const addHashTag = useCallback(() => {
    const generatedHashtag = generateHashtag(hashTag);
    if (generatedHashtag.length > 0) {
      setHashtags((prevHashtags) => [...prevHashtags, generatedHashtag]);
      setHasTag("");
    }
  }, [hashTag]);

  const removeHashTag = (index: number) => {
    setHashtags((prevHashtags) => {
      const updatedHashtags = [...prevHashtags];
      updatedHashtags.splice(index, 1);
      return updatedHashtags;
    });
  };
  const AcessToken = Cookies.get("AcessToken");

  const handleSubmit = (email: any, room: string) => {
    console.log("email---->", email);
    console.log("room---->", room);
    setShowLoading(false);
    socket?.emit("room:join", { email, room });
  };

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
  const handleInterViewer = async (
    AcessToken: string | undefined,
    hashtags: string[]
  ) => {
    setShowLoading(true);
    const response = await axiosInstance.post(
      `${userRoutes}/send-data-to-interviewerLive-database`,
      { Token: AcessToken, HashTags: hashtags }
    );
    // const data: string = response.data.saveRoomId;
    if (response?.data) {
      console.log(response.data);
      setShowLoading(false);
      const roomId = response.data.saveRoomId;
      const email = response.data.email;
      handleSubmit(email, roomId);
    }
  };

  const handleCandidate = async (
    AcessToken: string | undefined,
    hashtags: string[]
  ) => {
    setShowLoading(true);
    const response = await axiosInstance.post(
      `${userRoutes}/send-data-to-candidateLive-database`,
      { Token: AcessToken, HashTags: hashtags }
    );
    const data: any = response.data;
    if (response?.data) {
      const roomId = response.data.roomId;
      const email = response.data.email;
      handleSubmit(email, roomId);
    }
  };
  const navBarIndex  = 1
  return (
    <>
      <Navbar navBarIndex={navBarIndex} />
      <div className="bg-gray-100 min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <h1
          tabIndex={0}
          role="heading"
          aria-label="profile information"
          className="focus:outline-none text-3xl font-bold text-gray-800 "
        >
          Add #Tags for the Mock Interview
        </h1>
        <p
          role="contentinfo"
          className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4"
        >
          Boost your interview confidence with our #Tags feature! Highlight key
          skills and experiences during the interview, prioritize what matters
          most, and stand out as the perfect candidate for your dream job. Ace
          your mock interview and boost your chances of success!{" "}
        </p>
        <br />
        <br />
        <br /> 
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <h1>Add Hash Tag</h1>
              <div className="space-y-4 relative">
                <div className="flex items-center">
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-500 p-3 text-sm pr-8"
                    placeholder=" #hashtag"
                    value={hashTag}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const alphabeticRegex = /^[A-Za-z]+$/;
                      if (
                        inputValue.match(alphabeticRegex) ||
                        inputValue === ""
                      ) {
                        setHasTag(inputValue);
                      }
                    }}
                    type="text"
                    id="name"
                  />
                  <div className="ml-2">
                    <button
                      className="bg-blue-700 text-white font-bold py-3 px-3 rounded"
                      type="button"
                      onClick={addHashTag}
                    >
                      Add
                    </button>
                  </div>
                </div>
                <br />
                <br />
                {hashtags.length > 0 && (
                  <div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                      {hashtags.map((tag, index) => (
                        <li key={index}>
                          <span className="inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-blue-500">
                            <p className="whitespace-nowrap text-sm">{tag}</p>

                            <button
                              className="-me-1 ms-1.5 inline-block rounded-full bg-gray-200 p-0.5 text-gray-800 transition hover:bg--300"
                              onClick={() => removeHashTag(index)}
                            >
                              <span className="sr-only">Remove badge</span>

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-3 w-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <br />
                <br />
                {showLoading ? (
                  <button
                    type="button"
                    className="inline-flex items-center px-5 py-3  font-medium text-whiteleading-6 text-white transition duration-150 ease-in-out bg-black rounded-md shadow cursor-not-allowed hover:bg-indigo-400"
                    disabled
                  >
                    <svg
                      className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading...
                  </button>
                ) : (
                  <>
                    {hashtags.length !== 0 && (
                      <>
                        <div className="mt-4 flex justify-center flex-col items-center md:flex-row md:items-start">
                          <div className="w-full md:w-auto mb-4 md:mb-0">
                            <button
                              onClick={() =>
                                handleInterViewer(AcessToken, hashtags)
                              }
                              type="submit"
                              className="w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                              Join as interviewer
                            </button>
                          </div>
                          <div className="w-full md:w-auto md:ml-4">
                            <button
                              onClick={() =>
                                handleCandidate(AcessToken, hashtags)
                              }
                              type="submit"
                              className="w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                              Join as candidate
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HashTagPage;
