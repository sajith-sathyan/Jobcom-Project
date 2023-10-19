import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import {UserContext,UserContextType} from '../../context/userContext'
// import Navbar from "../../componet/navBar/nav-bar";
// import Cookies from 'js-cookie';

// function HomePage() {
//   const { user } = useContext(UserContext) as UserContextType;
//   const Navigate =useNavigate()
//   const moveToHashTagPage = ()=>{
//     Navigate("/add-hash-tag")
//   }
//   console.log(user?.userName)
//   console.log(user?.userId)
//   const cookieValue = Cookies.get('AcessToken');

//   console.log()
//   const navBarIndex  = 0
//   return (
//     <div>
//       <Navbar  navBarIndex={navBarIndex}/>
//       <div className="flex h-screen items-center justify-center">
//         <button onClick={moveToHashTagPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Start a mock interview
//         </button>
//       </div>
//     </div>
//   );
// }

// export default HomePage;
const resumeData = {
  _id: {
    $oid: "650e7c48076b5c65e23039b7",
  },
  resumeData: {
    personalInformation: {
      firstName: "sajith",
      lastName: "lal",
      jobTitile: "mern stack",
      dateOfBirth: "2023-09-13",
      email: "enail.@gamil.com",
      phone: "940953495943",
      country: "inida",
      nationality: "inida",
      postCode: "32432",
      identiyNumber: "",
    },
    personalSummary:
      "A resourceful individual with a proven track r A resourceful individual with a proven track record in implementing successful marketing strategies, boosting organic traffic, and improving search rankings seeks a position of Marketing Associate at ABC company to maximize brand awareness and revenue through integrated marketing communications. A resourceful individual with a proven track record in implementing successful marketing strategies, boosting organic traffic, and improving search rankings seeks a position of Marketing Associate at ABC company to maximize brand awareness and revenue through integrated marketing communications.",
    educationForm: [
      {
        Studes: "mcom",
        University: "kochi university",
        startData: "2023-09-07",
        endDate: "2023-09-26",
        city: "calicut",
        Discription:
          "Remember that the response you receive may vary, and the seller or provider may or may not be willing to reduce the price. Being respectful and professional in your communication increases the likelihood of a positive outcome.",
      },
      {
        Studes: "maharajas ",
        University: "mg university",
        startData: "2023-09-20",
        endDate: "2023-09-20",
        city: "kochi",
        Discription:
          "Remember that the response you receive may vary, and the seller or provider may or may not be willing to reduce the price. Being respectful and professional in your communication increases the likelihood of a positive outcome.",
      },
    ],
    skill: [
      {
        Skill: "html",
        Level: 50,
      },
      {
        Skill: "eract",
        Level: 43,
      },
      {
        Skill: "js",
        Level: 33,
      },
    ],
    employmentHistory: [
      {
        jobTitle: "mern",
        company: "banglore",
        startDate: "2023-09-06",
        endDate: "2023-09-13",
        city: "banglore",
        Discription:
          "Remember that the response you receive may vary, and the seller or provider may or may not be willing to reduce the price. Being respectful and professional in your communication increases the likelihood of a positive outcome.",
      },
      {
        jobTitle: "kenra ",
        company: "mumbi",
        startDate: "2023-10-04",
        endDate: "2023-09-13",
        city: "mumbi",
        Discription:
          "Remember that the response you receive may vary, and the seller or provider may or may not be willing to reduce the price. Being respectful and professional in your communication increases the likelihood of a positive outcome.",
      },
    ],
    practces: [
      {
        jobTitle: "js devloper",
        company: "borteoy[e",
        startDate: "2023-09-13",
        endDate: "2023-09-21",
        city: "kcohi",
        Discription:
          "Remember that the response you receive may vary, and the seller or provider may or may not be willing to reduce the price. Being respectful and professional in your communication increases the likelihood of a positive outcome.",
      },
    ],
    hobby:
      "Remember that the response you receive may vary, and the seller or provider may or may not be willing to reduce the price. Being respectful and professional in your communication increases the likelihood of a positive outcome.",
    lagnguges: [
      {
        lagnguges: "malyalal",
        level: 44,
      },
    ],
  },
  __v: 0,
};

// Now you can use the `resumeData` object in your TypeScript code.

function UserPage(): JSX.Element {
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
        {resumeData.resumeData.skill.map((item, index) => (
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
          {resumeData.resumeData.educationForm.map((item, index) => (
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
          {resumeData.resumeData.employmentHistory.map((item, index) => (
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
            {resumeData.resumeData.employmentHistory.map((item, index) => (
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
            A resourceful individual with a proven track r A resourceful
            individual with a proven track record in implementing successful
            marketing strategies, boosting organic traffic, and improving search
            rankings seeks a position of Marketing Associate at ABC company to
            maximize brand awareness and revenue through integrated marketing
            communications. A resourceful individual with a proven track record
            in implementing successful marketing strategies, boosting organic
            traffic, and improving search rankings seeks a position of Marketing
            Associate at ABC company to maximize brand awareness and revenue
            through integrated marketing communications.
          </h1>
          <br />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
