import React from "react";


type PersonalInformationProps = {
  personalInformation: {
    firstName: string;
    lastName: string;
    jobTitile: string;
    dateOfBirth: string;
    email: string;
    phone: string;
    country: string;
    nationality: string;
    postCode: string;
    identiyNumber: string;
  };
  setPersonalInformation: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      jobTitile: string;
      dateOfBirth: string;
      email: string;
      phone: string;
      country: string;
      nationality: string;
      postCode: string;
      identiyNumber: string;
    }>
  >;
};

function PersonalInformation({
  personalInformation,
  setPersonalInformation,
}: PersonalInformationProps) {
  
  return (
    <div>
      <div className="w-full bg-white p-10">
        <h1
          tabIndex={0}
          role="heading"
          aria-label="profile information"
          className="focus:outline-none text-3xl font-bold text-gray-800 mt-12"
        >
          Profile info
        </h1>
        <p
          role="contentinfo"
          className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4"
        >
          Fill in the data for profile. It will take a couple of minutes. <br />
          You only need a passport
        </p>
        <h2
          role="heading"
          aria-label="enter Personal data"
          className="text-xl font-semibold leading-7 text-gray-800 mt-10"
        >
          Personal data
        </h2>
        <p className="text-sm font-light leading-none text-gray-600 mt-0.5">
          Your details and Profile Image
        </p>
        <div className="flex justify-center">
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                First name
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter first name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                value={personalInformation.firstName}
                onChange={(e) =>
                  setPersonalInformation({
                    ...personalInformation,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Last name
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter last name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                value={personalInformation.lastName}
                onChange={(e) =>
                  setPersonalInformation({
                    ...personalInformation,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Job Title
              </label>
              <input
                type="name"
                tabIndex={0}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                value={personalInformation.jobTitile}
                onChange={(e) =>
                  setPersonalInformation({
                    ...personalInformation,
                    jobTitile: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Date Of Birth
              </label>
              <input
                type="date"
                tabIndex={0}
                aria-label="Enter date of birth"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                value={personalInformation.dateOfBirth}
                onChange={(e) =>
                  setPersonalInformation({
                    ...personalInformation,
                    dateOfBirth: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                tabIndex={0}
                aria-label="Enter email Address"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                value={personalInformation.email}
                onChange={(e) =>
                  setPersonalInformation({
                    ...personalInformation,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Phone number
              </label>
              <input
                type="number"
                tabIndex={0}
                aria-label="Enter phone number"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                defaultValue="+81 839274"
                value={personalInformation.phone}
                onChange={(e) =>
                  setPersonalInformation({
                    ...personalInformation,
                    phone: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Country
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="Enter country"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                value={personalInformation.country}
                onChange={(e) =>
                  setPersonalInformation({
                    ...personalInformation,
                    country: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Nationallty
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter last name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                value={personalInformation.nationality}
                onChange={(e) =>
                  setPersonalInformation({
                    ...personalInformation,
                    nationality: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Post code
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="Enter country"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                value={personalInformation.postCode}
                onChange={(e) =>
                  setPersonalInformation({
                    ...personalInformation,
                    postCode: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Identity Number
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter last name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                value={personalInformation.identiyNumber}
                onChange={(e) =>
                  setPersonalInformation({
                    ...personalInformation,
                    postCode: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <label
          className="mb-3 text-sm leading-none text-gray-800"
          htmlFor="file_input"
        >
          Upload your image
        </label>
        <br />
        <input
          className=" text-sm text-gray-800 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-00 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
      
        />
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      ",
        }}
      />
    </div>
  );
}

export default PersonalInformation;
