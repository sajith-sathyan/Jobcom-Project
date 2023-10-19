import { axiosInstance, userRoutes } from "../api/api";

export const getNaukriJobs = async (keyword: string) => {
  try {
    const NaukriResponse = await axiosInstance.post(
      `${userRoutes}/job-search-naukri`,
      {
        keyword,
      }
    );
    return NaukriResponse.data.naukriData;
  } catch (error) {
    console.log( error)
  }
};

export const getLinkedinJob = async (keyword: string) => {
  try {
    const LinkedinResponce = await axiosInstance.post(
      `${userRoutes}/job-search-linkedin`,
      {
        keyword,
      }
    );
   
    return  LinkedinResponce.data.linkdinData

  } catch (error) {
   console.log(error)
  }
};