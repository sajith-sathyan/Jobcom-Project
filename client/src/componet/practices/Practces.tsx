import React, { useState } from "react";
type PractcesType = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  city: string;
  Discription: string;
};
type setPractcesPropsType = {
  practces: PractcesType[];
  setPractces:React.Dispatch<React.SetStateAction<PractcesType[]>>
};
function Practces({ practces, setPractces }: setPractcesPropsType) {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompony] = useState("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndData] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [discription, setDiscription] = useState<string>("");

  const handleJobTileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobTitle(e.target.value);
  };
  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompony(e.target.value);
  };
  const handleStartDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndData(e.target.value);
  };
  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handleDiscriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscription(e.target.value);
  };

  const handleAdd = () => {
    if (
      jobTitle.trim() !== "" &&
      company.trim() !== "" &&
      startDate.trim() !== "" &&
      endDate.trim() !== "" &&
      city.trim() !== "" &&
      discription.trim() !== ""
    ) {
      // Update the parent component's educationForm state with the new data
      setPractces([
        ...practces,
        {
          jobTitle: jobTitle,
          company: company,
          startDate,
          endDate,
          city,
          Discription: discription,
        },
      ]);

      setJobTitle("");
      setCompony("");
      setStartDate("");
      setEndData("");
      setCity("");
      setDiscription("");
    }
  };
  return (
    <div>
      <div>
        <div className="w-full bg-white p-10">
          <h1
            tabIndex={0}
            role="heading"
            aria-label="profile information"
            className="focus:outline-none text-3xl font-bold text-gray-800 mt-12"
          >
            Internship
          </h1>
          <p
            role="contentinfo"
            className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4"
          >
            Add all The information About Your Internship
          </p>

          <div className="flex justify-center">
            <div className="mt-8 md:flex items-center">
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Job Title
                </label>
                <input
                onChange={handleJobTileChange}
                value={jobTitle}
                  type="name"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                />
              </div>
              <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Company
                </label>
                <input
                onChange={handleCompanyChange}
                value={company}
                  type="name"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-8 md:flex items-center">
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Start Date
                </label>
                <input
                onChange={handleStartDataChange}
                value={startDate}
                  type="Date"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                />
              </div>
              <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  End Date
                </label>
                <input
                onChange={handleEndDateChange}
                value={endDate}
                  type="Date"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-8 md:flex items-center">
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  City
                </label>
                <input
                onChange={handleCityChange}
                value={city}
                  type="text"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                />
              </div>
              <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Discription
                </label>
                <input
                onChange={handleDiscriptionChange}
                value={discription}
                  type="text"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                />
              </div>
            </div>
           
          </div>
          <br /> <br />
            <button
              onClick={handleAdd}
              type="button"
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              {" "}
              Add & save
            </button>
            {practces.map((item, index) => (
              <li>{item?.jobTitle}</li>
            ))}
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      ",
          }}
        />
      </div>
    </div>
  );
}

export default Practces;
