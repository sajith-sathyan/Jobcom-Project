import React, { useState } from "react";
import { axiosInstance, userRoutes } from "../../api/api";
import Cookies from "js-cookie";
import { verify } from "crypto";

function PersonalInfo() {
  const [user, setUser] = useState<any | null>(null);
  const [render, setRender] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [incorrectPwd, setIncorrectPwd] = useState<boolean>(false);
  const [correctPwd, setCorrectPwd] = useState<boolean>(false);
  const accessToken = Cookies.get("AcessToken");
  if (render) {
    axiosInstance
      .get(`${userRoutes}/get-user?accessToken=${accessToken}`)
      .then((response) => {
        const data = response.data;
        setUser(data);
        setName(data.username);
        setEmail(data.email);
        setRender(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const veriflyPassword = () => {
    axiosInstance
      .post(`${userRoutes}/verify-password`, {
        password,
        email,
      })
      .then((response) => {
        if (response.data?.errors?.password) {
          setIncorrectPwd(true);
          setCorrectPwd(false);
        } else {
          setCorrectPwd(true);
          setIncorrectPwd(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* component */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Responsive Form
            </h2>
            <p className="text-gray-500 mb-6">
              Form is mobile responsive. Give it a try.
            </p>
            {user != null && (
              <>
                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="text-gray-600">
                      <p className="font-medium text-lg">Personal Details</p>
                      <p>Please fill out all the fields.</p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label htmlFor="full_name">Full Name</label>
                          <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={name}
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            defaultValue=""
                            value={email}
                          />
                        </div>
                        <div className="md:col-span-3">
                          <label htmlFor="address">Password</label>
                          <div className="flex items-center space-x-4">
                            <input
                              type="text"
                              className="h-10 border rounded px-4 w-full bg-gray-50"
                              defaultValue=""
                              placeholder=""
                              onChange={(e) => setPassword(e.target.value)}
                            />

                            <button
                              onClick={veriflyPassword}
                              className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                              verifly
                            </button>
                          </div>
                        </div>

                        <div className="md:col-span-5 text-right space-x-80">
                          {incorrectPwd && (
                            <>
                              <span className="text-red-500 ">
                                incorrect password
                              </span>
                            </>
                          )}
                          {correctPwd && (
                            <span className="text-green-500 hover:cursor-pointer">
                              this password in correct
                            </span>
                          )}

                          <div className="inline-flex items-end">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              Submit
                            </button>
                          </div>
                        </div>
                        {incorrectPwd && (
                          <span onClick={()=>{
                            alert("djfasdfaj")
                          }} className="text-blue-500 hover:cursor-pointer">
                            Forgot Password
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
