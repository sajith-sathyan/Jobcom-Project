import React, { useState } from "react";
import ReactPlayer from "react-player";
import InterviewTips from "../interview-tips/interviewTips";
import TutorialNavBar from "../tutorial-nav-bar/TutorialNavBar";
import ConverLetter from "../cover-letter/ConverLetter";
import PhoneCall from "../phone-call/PhoneCall";

const TutorialQuestion = () => {
  const [showNav, setShowNav] = useState(1);
  const handleChildCountChange = (navCount: number) => {
    setShowNav(navCount);
  };

  return (
    <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
      <TutorialNavBar handleChildCountChange={handleChildCountChange} />
      {showNav === 1 && <InterviewTips />}
      {showNav === 2 && <ConverLetter/>}
      {showNav === 3 && <PhoneCall/>}

    </div>
  );
};

export default TutorialQuestion;
