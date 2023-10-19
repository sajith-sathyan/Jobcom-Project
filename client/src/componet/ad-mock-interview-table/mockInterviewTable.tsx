import React, { useEffect, useState } from "react";
import { adminRoutes, axiosInstance } from "../../api/api";
import CandiateTable from "./candiateLiveTable";
import InterviewTable from "./interviewTable";
import { Int32 } from "mongodb";


function MockInterviewTable() {
  const [showInterviewLive, setShowInterviewLive] = useState<boolean>(true);
  const [showCandiateLive, setShowCandiateLive] = useState<boolean>(false);
  const showTale = () => {
    console.log("first")
    if (showInterviewLive) {
      setShowInterviewLive(false);
      setShowCandiateLive(true);
    } else {
      setShowInterviewLive(true);
      setShowCandiateLive(false);
    }
  };

  return (
    <>
      <br />
      <div className="flex justify-center">
        <div className="inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-blue-500 mx-2 hover:bg-blue-500 hover:text-white hover:cursor-pointer">
          <p onClick={showTale} className="whitespace-nowrap text-sm">
            Interview Details
          </p>
        </div>
        <div className="inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-blue-500 mx-2 hover:bg-blue-500 hover:text-white hover:cursor-pointer">
          <p onClick={showTale} className="whitespace-nowrap text-sm">
            Candidate Details
          </p>
        </div>
      </div>
      {showInterviewLive ? (
        <>
          <InterviewTable />
        </>
      ) : (
        <>
          {" "}
          <CandiateTable />
        </>
      )}
     
    </>
  );
}

export default MockInterviewTable;
