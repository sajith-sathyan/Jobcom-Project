
import React, { useState } from "react";
type FreeResumeProps = {
    resumeData: any;
  };
  
function FreeResume({resumeData}:FreeResumeProps): JSX.Element {
  return (
    <div className="flex items-center justify-center mt-5">
    <div className="bg-white w-1/8 p-10 h-auto flex flex-col justify-between">
      <div>
        <div className="flex items-center flex-col">
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/originals/a8/bc/90/a8bc90ea196737604770aaf9c2d56a51.jpg"
              alt=""
              className="rounded-full w-24 border-2 border-gray-300"
            />
          </div>
          <h1 className="text-black uppercase tracking-widest text-sm font-bold mt-4">
            {resumeData.resumeData.personalInformation.jobTitile}
          </h1>
        </div>
        <hr className="my-5" />
        <h1 className="text-gray-600 mt-2 uppercase tracking-widest text-lg font-bold text-left">
          Contact
        </h1>
        <div className="flex flex-col items-start">
          <h1 className="text-black text-sm mb-2">
            {resumeData.resumeData.personalInformation.email}
          </h1>
          <h1 className="text-black text-sm mb-2">
            {resumeData.resumeData.personalInformation.phone}
          </h1>
          <h1 className="text-black text-sm mb-2">
            {resumeData.resumeData.personalInformation.country},
            {resumeData.resumeData.personalInformation.nationality}
          </h1>
        </div>
        <hr className="my-5" />
        <h1 className="text-gray-600 mt-2 uppercase tracking-widest text-lg font-bold text-left">
          Birth Date
        </h1>
        <h1 className="text-gray-500 text-sm uppercase font-semibold tracking-wider text-left">
          {resumeData.resumeData.personalInformation.dateOfBirth}
        </h1>
        <br />
        <h1 className="text-gray-600 mt-2 uppercase tracking-widest text-lg font-bold text-left">
          Nationality
        </h1>
        <h1 className="text-gray-500 text-sm uppercase font-semibold tracking-wider text-left">
          {resumeData.resumeData.personalInformation.nationality}
        </h1>
        <br /> <br />
      </div>
      <hr className="my-5" />
      <h1 className="text-gray-600 mt-2 uppercase tracking-widest text-lg font-bold text-left">
        Skills
      </h1>
      <br />
      {resumeData.resumeData.skill.map((item:any, index:number) => (
        <>
          <div className="mb-1 text-base font-medium text-blue-700 dark:text-gray-500 text-left">
            {item.Skill}
          </div>
          <div className="flex items-center">
            <div className="flex flex-grow ml-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200 relative">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width:item.Level+"%"  }}
                ></div>
              </div>
              <div className="ml-2.5 text-sm text-gray-500 dark:text-gray-600">
                {item.Level}%
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
    {/* 
      <div className="bg-white w-7/12 p-10 h-auto">
        <h1 className="text-gray-500">
          A resourceful individual with a proven track record in implementing
          successful marketing strategies, boosting organic traffic, and
          improving search rankings seeks a position of Marketing Associate at
          ABC company to maximize brand awareness and revenue through integrated
          marketing communications.
        </h1>
      </div> */}
    <div className="bg-white w-7/12 p-10 h-auto flex items-start">
      <div className="text-left">
        <h1 className="text-blue-500 text-lg font-bold mb-4">About Me</h1>
        <h1 className="text-gray-500">
          {resumeData.resumeData.personalSummary}   
        </h1>
        <br />
        <h1 className="text-blue-500 text-lg font-bold mb-4">Education</h1>
        {resumeData.resumeData.educationForm.map((item:any, index:number) => (
          <div key={index}>
            <h1 className="text-gray-500">
              <h1 className="text-gray-500 text-lg font-bold ">
                {item.Studes} - {item.University}
              </h1>
              {item.city} | {item.startData} - {item.endDate}
            </h1>
            <br />
          </div>
        ))}
        <h1 className="text-blue-500 text-lg font-bold mb-4">
          Empoyment History
        </h1>
        {resumeData.resumeData.employmentHistory.map((item:any, index:number) => (
          <div key={index}>
            <h1 className="text-gray-500">
              <h1 className="text-gray-500 text-lg font-bold ">
                {item.jobTitle} - {item.company}
              </h1>
              {item.city} | {item.startDate} - {item.endDate}
            </h1>
            <br />
          </div>
        ))}
        <br />
        <h1 className="text-blue-500 text-lg font-bold mb-4">Internship </h1>
        <h1 className="text-gray-500">
          {resumeData.resumeData.employmentHistory.map((item:any, index:number) => (
            <div key={index}>
              <h1 className="text-gray-500">
                <h1 className="text-gray-500 text-lg font-bold ">
                  {item.jobTitle} - {item.company}
                </h1>
                {item.city} | {item.startDate} - {item.endDate}
              </h1>
              <br />
            </div>
          ))}
        </h1>
        <br />
        <h1 className="text-blue-500 text-lg font-bold mb-4">Hobby</h1>
        <h1 className="text-gray-500">
        {resumeData.resumeData.hobby}
        </h1>
        <br />
      </div>
    </div>
  </div>
  );
}

export default FreeResume;