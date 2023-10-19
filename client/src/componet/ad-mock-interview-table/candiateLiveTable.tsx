import React, { useEffect, useState } from 'react'
import { adminRoutes, axiosInstance } from '../../api/api';
interface interviewLiveDataType {
  date: string;
  hashTag: string[];
  time: string;
  user: User;
  __v: number;
  _id: string;
}

interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  __v: number;
}
function CandiateTable() {
  const [candidateLive, setCandidateInterviewLive] = useState<interviewLiveDataType[] | null>(null);
  const [currentPage, setCurrrentPage] = useState(1);
  const getAllDetails = async () => {
    try {
      const response = await axiosInstance.get(
        `${adminRoutes}/get-interview-details`
      );
    
      if (response.data) {
        console.log(response.data);
        setCandidateInterviewLive(response.data.candidateLive);
      }
    } catch (error) {
      console.error("Error fetching interview details:", error);
    }
  };

  useEffect(() => {
    getAllDetails();
  }, []);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = candidateLive?.slice(firstIndex, lastIndex) || [];
  const npage = Math.ceil((candidateLive?.length || 0) / recordsPerPage);
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
  return (
    <div>
      <h1> Candidate Detials</h1>
    <div className="container mx-auto py-10 h-66 md:w-4/5 w-11/12 ">
      {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
      {/* <div className="w-full h-full rounded border-dashed border-2 border-gray-300"> */}
      {/* Place your content here */}
      <div className="w-full sm:px-6">
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Interview Name</th>
                <th className="font-normal text-left pl-12">Date & Time</th>

                <th className="font-normal text-left pl-20">Hash Tag</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {candidateLive != null && (
                <>
                  {records?.map((candidate, index) => (
                    <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                      <td className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="pl-4">
                            <p className="font-medium">{candidate.user?.username}</p>
                            {/* <p className="text-xs leading-3 text-gray-600 pt-2">
                   {item.email}
                 </p> */}
                          </div>
                        </div>
                      </td>
                      <td className="pl-12">
                        <p className="text-sm font-medium leading-none text-gray-800">{candidate.date}</p>
                      </td>

                      <td className="pl-20">
                        {candidate.hashTag.map((item,index)=>( <p className="text-xs leading-3 text-gray-600 mt-2">
                        {item}
                        </p>))}
                       
                      </td>
                      <td className="pl-20">
                        <p className="text-xs leading-3 text-gray-600 mt-2">
                          {/* Calculate the remaining days */}
                          {/* You can use some logic here to calculate the remaining days */}
                        </p>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <ol className="flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            onClick={prePage}
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            {/* Previous Page Icon */}
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
                  : "border-gray-100 bg-white text-center leading-8 text-gray-900"
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
            {/* Next Page Icon */}
          </a>
        </li>
      </ol>
      {/* Heads up! */}
      {/* This component comes with some `rtl` classes. Please remove them if they are not needed in your project. */}
    </div>
  </div>
  )
}

export default CandiateTable