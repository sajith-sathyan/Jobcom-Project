import React, { useState } from "react";
import PersonalInfo from "../personal-Info/personalInfo";
import ResumeInfo from "../resume-info/ResumeInfo";
import { axiosInstance, userRoutes } from "../../api/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

function AccountComponts() {
  const Navigate = useNavigate()
  const [clickStatus, setClickStatus] = useState<number | null>(null);
const logOut = ()=>{
  Cookies.remove('AcessToken');
  Navigate("/login")
}
  return (
    <div>
      {clickStatus === null && (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button
            onClick={() => {
              setClickStatus(1);
            }}
            className="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            style={{ width: "300px" }}
          >
            Personal Information
          </button>
          <br />
          <br />
          <button
            onClick={() => {
              setClickStatus(2);
            }}
            className="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            style={{ width: "300px" }}
          >
            Resume
          </button>
          <br />
          <br />
          <button
          onClick={logOut}
            className="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            style={{ width: "300px" }}
          >
            Log Out
          </button>
        </>
      )}
      {clickStatus === 1 && <PersonalInfo />}
      {clickStatus === 2 && <ResumeInfo />}
    </div>
  );
}

export default AccountComponts;
