import React, { useState } from "react";
import PersonalInformation from "../../componet/personal-information/personal-information";
import PersonalSummary from "../../componet/personal-summary/PersonalSummary";
import EducationForm from "../../componet/education/Education-form";
import Skill from "../../componet/skill/skill";
import EmploymentHistory from "../../componet/empolyment-history/employmentHistory";
import Practces from "../../componet/practices/Practces";
import Hobby from "../../componet/hobby/Hobby";
import Lagnguges from "../../componet/language/Lagnguges";
import Navbar from "../../componet/navBar/nav-bar";
import FreeResume from "../../componet/resume/freeResume";
import { userRoutes, axiosInstance } from "../../api/api";
import { useNavigate } from "react-router";
type EducationFormType = {
  Studes: string;
  University: string;
  startData: string;
  endDate: string;
  city: string;
  Discription: string;
};

type SkillFormType = {
  Skill: string;
  Level: any;
};

type EmploymentHistoryType = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  city: string;
  Discription: string;
};
type PractcesType = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  city: string;
  Discription: string;
};

type LagngugesType = {
  lagnguges: string;
  level: string;
};

function ResumeFormPage() {
  const Navigate = useNavigate();
  const [submit, setSubmitPage] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [resumeData,setResumeData]= useState<any|null>(null)
  const [showResume, setShowResume] = useState<boolean>(false);

  const [personalInformation, setPersonalInformation] = useState({
    firstName: "",
    lastName: "",
    jobTitile: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    country: "",
    nationality: "",
    postCode: "",
    identiyNumber: "",
  });
  const [personalSummary, setPersonalSummary] = useState<string>("");
  const [educationForm, setEducationForm] = useState<Array<EducationFormType>>(
    []
  );
  const [skill, setSkill] = useState<Array<SkillFormType>>();
  const [employmentHistory, setEmploymentHistory] = useState<
    Array<EmploymentHistoryType>
  >([]);
  const [practces, setPractces] = useState<Array<PractcesType>>([]);
  const [hobby, setHobby] = useState<string>("");
  const [lagnguges, setLagnguges] = useState<Array<LagngugesType>>();
  const displayPage = () => {
    if (page >= 0 && page <= 7) {
      if (page === 0) {
        return (
          <PersonalInformation
            personalInformation={personalInformation}
            setPersonalInformation={setPersonalInformation}
          />
        );
      } else if (page === 1) {
        return (
          <PersonalSummary
            personalSummary={personalSummary}
            setPersonalSummary={setPersonalSummary}
          />
        );
      } else if (page === 2) {
        return (
          <EducationForm
            educationForm={educationForm}
            setEducationForm={setEducationForm}
          />
        );
      } else if (page === 3) {
        return <Skill skill={skill} setSkill={setSkill} />;
      } else if (page === 4) {
        return (
          <EmploymentHistory
            employmentHistory={employmentHistory}
            setEmploymentHistory={setEmploymentHistory}
          />
        );
      } else if (page === 5) {
        return <Practces practces={practces} setPractces={setPractces} />;
      } else if (page === 6) {
        return <Hobby hobby={hobby} setHobby={setHobby} />;
      } else if (page === 7) {
        return <Lagnguges lagnguges={lagnguges} setLagnguges={setLagnguges} />;
      }
      if (page === 7) {
        setSubmitPage(true);
      }
    }
  };
  const length = 2;

  const handleSubmitData = () => {
    const resumeData = {
      personalInformation,
      personalSummary,
      educationForm,
      skill,
      employmentHistory,
      practces,
      hobby,
      lagnguges,
    };

    axiosInstance
      .post(`${userRoutes}/create-resume`, { resumeData })
      .then((res) => {
        if (res) {
          console.log(res.data.resumeData);
          setShowResume(true);
          setResumeData(res.data.resumeData)
        }
      });
  };
  const navBarIndex = 2;
  return (
    <>
      {showResume ? (
        <FreeResume resumeData={resumeData} />
      ) : (
        <div>
          <Navbar navBarIndex={navBarIndex} />
          <div>{displayPage()}</div>
          <div className="flex flex-wrap justify-center gap-4">
            {page > 0 && page <= 7 && (
              <div className="w-full lg:w-auto">
                <button
                  role="button"
                  aria-label="Previous step"
                  className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-blue-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 w-full lg:w-auto"
                  onClick={() => {
                    setPage((currentPage) => currentPage - 1);
                  }}
                >
                  <span className="text-sm font-medium text-center text-gray-800 capitalize">
                    Previous Step
                  </span>
                  <svg
                    className="mt-1 ml-3"
                    width={12}
                    height={8}
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z"
                      fill="#242731"
                    />
                  </svg>
                </button>
              </div>
            )}

            {page >= 7 ? (
              <div className="w-full lg:w-auto">
                <button
                  role="button"
                  aria-label="Next step"
                  className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-blue-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 w-full lg:w-auto"
                  onClick={handleSubmitData}
                >
                  <span className="text-sm font-medium text-center text-gray-800 capitalize">
                    Finish
                  </span>
                  <svg
                    className="mt-1 ml-3"
                    width={12}
                    height={8}
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z"
                      fill="#242731"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <>
                <div className="w-full lg:w-auto">
                  <button
                    role="button"
                    aria-label="Next step"
                    className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-blue-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 w-full lg:w-auto"
                    onClick={() => {
                      setPage((currentPage) => currentPage + 1);
                    }}
                  >
                    <span className="text-sm font-medium text-center text-gray-800 capitalize">
                      Next Step
                    </span>
                    <svg
                      className="mt-1 ml-3"
                      width={12}
                      height={8}
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z"
                        fill="#242731"
                      />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ResumeFormPage;
