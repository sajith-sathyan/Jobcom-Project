import React, { useEffect, useState } from "react";
import { axiosInstance, userRoutes } from "../../api/api";
import { setLinkedinData } from "../../features/store";
import { useDispatch } from "react-redux";
interface LinkedinDataType {
  title: string;
  jobStatus: string;
  companyName: string;
  companyLink: string;
  time: string;
  location: string;
  logoImage: string;
}
type LinkdinJobspropsType = {
  keyword: string;
  searchKeyword: boolean;
  searchButtonClicked: boolean;
};

function LinkdinJobs({
  keyword,
  searchKeyword,
  searchButtonClicked,
}: LinkdinJobspropsType) {
  const [linkedin, setLinkedin] = useState<LinkedinDataType[]>([]);
  const [showNaukri, setShowNaukri] = useState<boolean>(true);
  const [showLinkedin, setShowLinkedin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [naukriIsLoading, setNaukriIsLoading] = useState<boolean>(false);
  const [linkdinIsLoading, setLinkdinIsLoading] = useState<boolean>(false);

  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();

// pagination concepts
  const [currentPage, setCurrrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = linkedin.slice(firstIndex, lastIndex);
  const npage = Math.ceil(linkedin.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage != firstIndex) {
      setCurrrentPage(currentPage - 1);
    }
  };
  const changeCurrPage = (id: any) => {
    setCurrrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrrentPage(currentPage + 1);
    }
  };
  // get linkdin job logic
  const getLinkedinJob = async (keyword: string) => {
    setLinkdinIsLoading(true);
    try {
      const LinkedinResponce = await axiosInstance.post(
        `${userRoutes}/job-search-linkedin`,
        {
          keyword,
        }
      );
      const linkdinData = LinkedinResponce.data.linkdinData;
      dispatch(setLinkedinData(linkdinData));
      setLinkedin(LinkedinResponce.data.linkdinData);
      const linkedinResponse = await axiosInstance.post(
        `${userRoutes}/job-search-linkedin`,
        {
          keyword,
        }
      );
      console.log("linkedinResponse", linkedinResponse);

      setLinkdinIsLoading(false);
      setButtonDisabled(false);
      setShowLinkedin(true);
      setShowNaukri(false);
    } catch (error) {
      setLinkdinIsLoading(false);
    }
  };
  useEffect(() => {
    if (searchButtonClicked) {
      getLinkedinJob(keyword);
    }
  }, [searchButtonClicked]);

  return (
    <div>
      <>
        {" "}
        {linkdinIsLoading ? (
          <div className="min-h-[15rem] flex flex-col bg-white rounded-xl">
            <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
              <div className="flex justify-center">
                <div
                  className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <div className="mt-4 text-gray-800 font-semibold">
                "Thank you for your patience. We're collecting data. Please wait
                and avoid refreshing."
              </div>
            </div>
          </div>
        ) : linkedin.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-4">
              {records.map((job, index) => (
                <div
                  key={index}
                  className="h-32 rounded-lg bg-gray-100 mx-4 my-4 lg:mb-11"
                >
                  <article
                    key={index}
                    className="rounded-xl border-2 border-gray-100 bg-white"
                  >
                    <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                      <a href="#" className="block shrink-0">
                        <img
                          alt="Speaker"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                          className="h-14 w-14 rounded-lg object-fill"
                        />
                      </a>
                      <div>
                        <h3 className="font-medium sm:text-lg">
                          <a
                            href={job.companyLink}
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {job.title}
                          </a>
                        </h3>
                        <p className="line-clamp-2 text-sm text-gray-700">
                          {job.companyName}
                        </p>
                        <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                          <div className="flex items-center gap-1 text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="15"
                              viewBox="0 -960 960 960"
                              width="15"
                            >
                              <path
                                fill="currentColor"
                                d="M300-286q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm132 328h244v-60H432v60Zm0-164h244v-60H432v60Zm0-164h244v-60H432v60ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"
                              />
                            </svg>
                            <p className="text-xs">{job.jobStatus}</p>
                          </div>
                          <span className="hidden sm:block" aria-hidden="true">
                            &middot;
                          </span>
                          {/* <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                           
                          </p> */}
                        </div>
                        <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                          <div className="flex items-center gap-1 text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="15"
                              viewBox="0 -960 960 960"
                              width="15"
                            >
                              <path
                                fill="currentColor"
                                d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
                              />
                            </svg>
                            <p className="text-xs">{job.location}</p>
                          </div>
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                        <span className="text-[10px] font-medium sm:text-xs">
                          {job.time}
                        </span>
                      </strong>
                    </div>
                  </article>
                </div>
              ))}
            </div>
            <br />
            <ol className="flex justify-center gap-1 text-xs font-medium">
              <li>
                <a
                  onClick={prePage}
                  className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                  <span className="sr-only">Prev Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              {numbers.map((n, i) => (
                <li key={i}>
                  <a
                    onClick={() => changeCurrPage(n)}
                    href="#"
                    aria-current={currentPage === n ? "page" : undefined}
                    className={`block h-8 w-8 rounded border${
                      currentPage === n
                        ? "border-blue-600 bg-blue-600 text-center leading-8 text-white"
                        : "border-gray-100 bg-black text-center leading-8 text-white" // Change bg color to black
                    }`}
                  >
                    {n}
                  </a>
                </li>
              ))}
              <li>
                <a
                  onClick={nextPage}
                  className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                  <span className="sr-only">Next Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </>
        ) : (
          <div className="min-h-[15rem] flex flex-col bg-white rounded-xl">
            <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
              <div className="mt-4 text-gray-800 font-semibold">
                No data found !!{" "}
                {keyword.length > 0 && (
                  <p
                    className="text-blue-500 cursor-pointer"
                    onClick={() => {
                      getLinkedinJob(keyword);
                      setIsLoading(true);
                    }}
                  >
                    reload again
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default LinkdinJobs;
