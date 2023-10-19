import React, { useEffect, useState } from "react";
import { axiosInstance, adminRoutes } from "../../api/api";
import { ObjectId } from "mongodb";
type userDetails = {
  username: string;
  email: string;
  status: string;
  _id: ObjectId;
};

function UserDetialsTable() {
  const [currentPage, setCurrrentPage] = useState(1);
  const [userDetails, setUserDetails] = useState<userDetails[]>([]);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = userDetails.slice(firstIndex, lastIndex);
  const npage = Math.ceil(userDetails.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const refreshUserDetails = async () => {
    const updatedUserDetailsData = await getAllUser();
    setUserDetails(updatedUserDetailsData);
  };

  const BlockUser = async (id: ObjectId) => {
    try {
      const status = "BLOCK";
      const response = await axiosInstance.put(`${adminRoutes}/block-user`, {
        status,
        id,
      });

      console.log(response.data);
      refreshUserDetails();
    } catch (error) {
      console.error("Error blocking user:", error);
    }
  };

  const UblockUser = async (id: ObjectId) => {
    try {
      const status = "UNBLOCK";
      const response = await axiosInstance.put(`${adminRoutes}/unblock-user`, {
        status,
        id,
      });

      console.log(response.data);
      refreshUserDetails();
    } catch (error) {
      console.error("Error Unblocking user:", error);
    }
  };
  const getAllUser = async () => {
    const responce = await axiosInstance.get(`${adminRoutes}/get-user-detials`);
    return responce.data;
  };

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

  useEffect(() => {
    const fetchUser = async () => {
      const userDetailsData = await getAllUser();
      console.log(userDetailsData);
      setUserDetails(userDetailsData);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <div className="container mx-auto py-10 h-66 md:w-4/5 w-11/12 ">
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        {/* <div className="w-full h-full rounded border-dashed border-2 border-gray-300"> */}
        {/* Place your content here */}
        <div className="w-full sm:px-6">
          <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-normal text-left pl-4">Name</th>
                  <th className="font-normal text-left pl-12">Email</th>

                  <th className="font-normal text-left pl-20">status</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {userDetails != null && (
                  <>
                    {records.map((item, index) => (
                      <tr
                        key={index}
                        className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                      >
                        <td className="pl-4 cursor-pointer">
                          <div className="flex items-center">
                            <div className="w-10 h-10">
                              {/* Replace with your image source */}
                              <img
                                className="w-full h-full"
                                src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
                                alt="Project thumbnail"
                              />
                            </div>
                            <div className="pl-4">
                              <p className="font-medium">{item.username}</p>
                              {/* <p className="text-xs leading-3 text-gray-600 pt-2">
                            {item.email}
                          </p> */}
                            </div>
                          </div>
                        </td>
                        <td className="pl-12">
                          <p className="text-sm font-medium leading-none text-gray-800">
                            {item.email}
                          </p>
                        </td>

                        <td className="pl-20">
                          {item.status === "true" ? (
                            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                              Active
                            </span>
                          ) : (
                            <>
                              <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                Block
                              </span>
                            </>
                          )}

                          <p className="text-xs leading-3 text-gray-600 mt-2">
                            {/* Calculate the remaining budget */}
                            {/* You can use some logic here to calculate the remaining budget */}
                          </p>
                        </td>
                        <td className="pl-20">
                          {item.status == "true" ? (
                            <p className="text-xs leading-3 text-gray-600 mt-2">
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="sr-only peer"
                                  checked={false}
                                  onChange={() => BlockUser(item._id)}
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                              </label>

                              {/* Calculate the remaining days */}
                              {/* You can use some logic here to calculate the remaining days */}
                            </p>
                          ) : (
                            <p className="text-xs leading-3 text-gray-600 mt-2">
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="sr-only peer"
                                  checked={true}
                                  onClick={() => UblockUser(item._id)}
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                              </label>

                              {/* Calculate the remaining days */}
                              {/* You can use some logic here to calculate the remaining days */}
                            </p>
                          )}
                        </td>
                        <td className="pl-16">
                          <div className="flex items-center"></div>
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

        {/* Heads up! */}
        {/* This component comes with some `rtl` classes. Please remove them if they are not needed in your project. */}
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
      </div>
    </div>
  );
}

export default UserDetialsTable;
