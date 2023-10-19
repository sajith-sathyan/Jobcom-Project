import React, { useEffect, useState } from "react";
import { axiosInstance, userRoutes } from "../../api/api";
import NaukriJobs from "../naukri-jobs/naukriJobs";
import LinkdinJobs from "../linkdin-Jobs/linkdin-jobs";
import { useSelector, useDispatch } from "react-redux";
import {
  setNaukriData,
  setLinkedinData,
  RootState,
} from "../../features/store";
function JobSearch() {
  const [showNaukri, setShowNaukri] = useState<boolean>(false);
  const [showLinkedin, setShowLinkedin] = useState<boolean>(true);
  const [searchKeyword, setSearchKeyword] = useState<boolean>(false);
  const [reloadData, setReloadData] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const dispatch = useDispatch();

  const naukriData = useSelector((state: RootState) => state.naukri.naukriData);
  const linkedinData = useSelector(
    (state: RootState) => state.linkedin.linkedinData
  );
  console.log("naukriData redux --- >", naukriData);

  const handleSearchSubmitt = () => {
    if (keyword.length > 1) {
      setSearchButtonClicked(true); // Update the state to indicate search button clicked
    }
  };

  const handleSiteChange = (siteName: string) => {
    if (siteName === "Naukri") {
      setShowNaukri(true);
      setShowLinkedin(false);
      setReloadData(false);
    } else {
      setShowNaukri(false);
      setShowLinkedin(true);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mt-8">Search Your Job</h1>
      <br />
      <br />
      <div className="flex justify-center items-center">
        <div>
          <div className="">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex gap-6">
                {showLinkedin ? (
                  <div
                    onClick={() => handleSiteChange("LinkedIn")}
                    className="shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600 cursor-pointer"
                    // Add the 'cursor-pointer' class to apply the hand cursor on hover
                  >
                    LinkedIn
                  </div>
                ) : (
                  <div
                    onClick={() => handleSiteChange("LinkedIn")}
                    className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer"
                    // Add the 'cursor-pointer' class to apply the hand cursor on hover
                  >
                    LinkedIn
                  </div>
                )}
                {showNaukri ? (
                  <div
                    onClick={() => handleSiteChange("Naukri")}
                    className="shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600 cursor-pointer"
                    // Add the 'cursor-pointer' class to apply the hand cursor on hover
                  >
                    Naukri
                  </div>
                ) : (
                  <div
                    onClick={() => handleSiteChange("Naukri")}
                    className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer"
                    // Add the 'cursor-pointer' class to apply the hand cursor on hover
                  >
                    Naukri
                  </div>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="2lg:max-w-[356px] md:max-w-[744px] max-w-[375px] mx-auto">
        <div className="flex items-center">
          <div className="mt-8 px-6 flex-grow">
            <div className="dropdown-one border border-gray-300 w-full rounded outline-none bg-white relative mt-4">
              <div className="flex items-center justify-between">
                <input
                  onChange={(e) => setKeyword(e.target.value)}
                  type="text"
                  className="text-left font-medium text-gray-600 text-sm w-full py-[12px] pl-4 pr-5 rounded-l shadow-md focus:outline-none"
                  placeholder="Search..."
                />
                <button
                  className="dropbtn-one px-5 py-[12px] rounded-r-full shadow-md bg-blue-700 text-white border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  onClick={handleSearchSubmitt}
                  disabled={isButtonDisabled}
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showNaukri && (
        <NaukriJobs
          keyword={keyword}
          searchKeyword={searchKeyword}
          searchButtonClicked={searchButtonClicked}
        />
      )}
      {showLinkedin && (
        <LinkdinJobs
          keyword={keyword}
          searchKeyword={searchKeyword}
          searchButtonClicked={searchButtonClicked}
        />
      )}
    </div>
  );
}

export default JobSearch;
